package com.nlw.four.domain.service

import com.nlw.four.domain.exception.BusinessException
import com.nlw.four.domain.model.User
import com.nlw.four.domain.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CreateUserService(
    @Autowired private val userRepository: UserRepository
) {
    fun create(user: User): User {
        val userExists = userRepository.findByEmail(user.email!!)

        if (userExists != null && !userExists.equals(user)) {
            throw BusinessException("User already exists")
        }

        return userRepository.saveAndFlush(user)
    }
}