package com.nlw.four.api.exceptionhandler

import com.fasterxml.jackson.annotation.JsonInclude
import java.time.OffsetDateTime

@JsonInclude(JsonInclude.Include.NON_NULL)
class Problem {
    var status: Int? = null
    var dateTime: OffsetDateTime? = null
    var title: String? = null
    var fields: List<ProblemField>? = null

    class ProblemField(var name: String, var message: String)
}
