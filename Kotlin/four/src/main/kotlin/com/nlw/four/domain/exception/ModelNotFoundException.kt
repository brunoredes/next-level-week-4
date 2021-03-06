package com.nlw.four.domain.exception

class ModelNotFoundException(message: String?) : BusinessException(message!!) {
    companion object {
        private const val serialVersionUID = 1L
    }
}