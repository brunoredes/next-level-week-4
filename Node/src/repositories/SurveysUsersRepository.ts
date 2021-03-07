import { SurveyUser } from "../models";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(SurveyUser)
class SurveysUsersRepository extends Repository<SurveyUser> { }

export { SurveysUsersRepository }