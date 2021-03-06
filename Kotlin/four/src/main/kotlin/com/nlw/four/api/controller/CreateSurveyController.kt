package com.nlw.four.api.controller

import com.nlw.four.domain.model.Survey
import com.nlw.four.domain.service.CreateSurveyService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping("/surveys")
class CreateSurveyController(
    @Autowired private val createSurveyService: CreateSurveyService,
) {

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun createSurvey(@Valid @RequestBody survey: Survey?): Survey? {
        return createSurveyService.create(survey)
    }
}