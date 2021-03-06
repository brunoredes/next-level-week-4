package com.nlw.four.api.controller

import com.nlw.four.domain.model.User
import com.nlw.four.domain.service.CreateUserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
class CreateUserController(
    @Autowired private val userService: CreateUserService,
) {

    @PostMapping("/users")
    @ResponseStatus(HttpStatus.CREATED)
    fun createUser(@Valid @RequestBody user: User?): User? {
        return user?.let { userService.create(it) };
    }
}