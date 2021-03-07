import { getRepository } from "typeorm";
import { User } from "../models";

class CreateUserService {
  async create(email: string, name: string): Promise<User> {
    const userRepository = getRepository(User);

    const userAlreadyExists = await userRepository.findOne({
      email
    });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = userRepository.create({ name, email });

    await userRepository.save(user);

    return user;
  }
}

export { CreateUserService };
