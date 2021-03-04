import { User } from "@/models";
import { EntityRepository, getRepository, Repository } from "typeorm";

@EntityRepository(User)
class UserRepository extends Repository<User> {
  async createUser(email: string, name: string): Promise<User> {
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

export { UserRepository };
