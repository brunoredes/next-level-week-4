package com.nlw.four.api.controller

import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.beans.factory.annotation.Autowired
import com.nlw.four.domain.repository.SurveyRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.http.ResponseEntity
import com.nlw.four.domain.model.Survey
import com.nlw.four.domain.service.ShowSurveyService

@RestController
@RequestMapping(value = ["/surveys"])
class ShowSurveyController(
    @Autowired
    private val showSurveyService: ShowSurveyService
) {
    @GetMapping
    fun listSurvey(): ResponseEntity<List<Survey>> {
        val surveys: List<Survey> = showSurveyService.showAllSurveys()
        return ResponseEntity.ok().body(surveys)
    }
}