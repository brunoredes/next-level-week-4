import { EntityRepository, Repository } from "typeorm";
import { User } from "../models";

@EntityRepository(User)
class UserRepository extends Repository<User> {

}

export { UserRepository };

