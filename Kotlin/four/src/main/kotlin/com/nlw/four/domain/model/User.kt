package com.nlw.four.domain.model

import org.hibernate.annotations.Type
import java.util.*
import javax.persistence.*
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank

@Entity(name = "users")
data class User(
    @Id
    @Type(type="pg-uuid")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private val id: UUID? = null,

    @get: NotBlank
    @Email
    val email: String? = "",

    @get: NotBlank
    val name: String? = ""
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as User

        if (id != other.id) return false
        if (email != other.email) return false
        if (name != other.name) return false

        return true
    }

    override fun hashCode(): Int {
        var result = id.hashCode()
        result = 31 * result + email.hashCode()
        result = 31 * result + name.hashCode()
        return result
    }
}