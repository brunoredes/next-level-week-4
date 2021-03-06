package com.nlw.four.api.exceptionhandler

import com.nlw.four.api.exceptionhandler.Problem.ProblemField
import com.nlw.four.domain.exception.BusinessException
import com.nlw.four.domain.exception.ModelNotFoundException
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.MessageSource
import org.springframework.context.i18n.LocaleContextHolder
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.validation.FieldError
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.context.request.WebRequest
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler
import java.time.OffsetDateTime
import java.util.*

@ControllerAdvice
class ApiExceptionHandler(
    @Autowired
    private val messageSource: MessageSource? = null,
) : ResponseEntityExceptionHandler() {

    @ExceptionHandler(ModelNotFoundException::class)
    fun handleEntityNotFound(ex: BusinessException, request: WebRequest?): ResponseEntity<Any> {
        val status = HttpStatus.NOT_FOUND
        val problem = Problem()
        problem.status = status.value()
        problem.title = ex.message
        problem.dateTime = OffsetDateTime.now()
        return handleExceptionInternal(ex, problem, HttpHeaders(), status, request!!)
    }

    @ExceptionHandler(BusinessException::class)
    fun handleBusiness(ex: BusinessException, request: WebRequest?): ResponseEntity<Any> {
        val status = HttpStatus.BAD_REQUEST
        val problem = Problem()
        problem.status = status.value()
        problem.title = ex.message
        problem.dateTime = OffsetDateTime.now()
        return handleExceptionInternal(ex, problem, HttpHeaders(), status, request!!)
    }

    override fun handleMethodArgumentNotValid(
        ex: MethodArgumentNotValidException,
        headers: HttpHeaders, status: HttpStatus, request: WebRequest
    ): ResponseEntity<Any> {
        val campos = ArrayList<ProblemField>()
        for (error in ex.bindingResult.allErrors) {
            val name = (error as FieldError).field
            val message = messageSource!!.getMessage(error, LocaleContextHolder.getLocale())
            campos.add(ProblemField(name, message))
        }
        val problem = Problem()
        problem.status = status.value()
        problem.title =
            "One or more fields are invalid. Fill in the fields correctly and try again."
        problem.dateTime = OffsetDateTime.now()
        problem.fields = campos
        return super.handleExceptionInternal(ex, problem, headers, status, request)
    }
}