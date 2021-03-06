package com.nlw.four.domain.service

import com.nlw.four.domain.model.Survey
import com.nlw.four.domain.repository.SurveyRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class ShowSurveyService(
    @Autowired
    private val surveyRepository: SurveyRepository? = null
) {
    fun showAllSurveys(): MutableList<Survey> {
        return surveyRepository!!.findAll()
    }
}