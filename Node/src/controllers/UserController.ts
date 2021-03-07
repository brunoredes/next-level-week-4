import { Request, Response } from "express";
import { CreateUserService } from '../services';

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const userRepository = new CreateUserService();

    const newUser = await userRepository.create(email, name);

    return response.status(201).json(newUser);
  }
}

export { UserController };

