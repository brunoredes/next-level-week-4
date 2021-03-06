package com.nlw.four.domain.repository

import com.nlw.four.domain.model.Survey
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface SurveyRepository : JpaRepository<Survey, UUID> {

}