package com.nlw.four.domain.exception

open class BusinessException(message:String): RuntimeException(message) {
    companion object {
        private const val serialVersionUID = 1L
    }
}