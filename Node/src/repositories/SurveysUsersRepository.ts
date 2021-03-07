import { SurveyUser } from "models/SurveyUser";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(SurveyUser)
class SurveysRepository extends Repository<SurveyUser> { }

export { SurveysRepository }