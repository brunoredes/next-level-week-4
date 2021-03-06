import { UserRepository } from '../repositories/userRepository';
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const userRepository = getCustomRepository(UserRepository)

    const newUser = await userRepository.createUser(email, name);

    return response.status(201).json(newUser);
  }
}

export { UserController };
