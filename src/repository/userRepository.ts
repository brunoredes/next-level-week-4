import { getRepository } from "typeorm";
import { User } from "@/models/User";

class UserRepository {
  async createUser(email, name) {
    const userRepository = getRepository(User);

    const userAlreadyExists = await userRepository.findOne({
      email
    });

    if (userAlreadyExists) {
      throw new Error()
    }
    const user = userRepository.create({ name, email });

    await userRepository.save(user);

  }
}

export { UserRepository };