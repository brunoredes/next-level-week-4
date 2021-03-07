import { Survey } from "models";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { getCustomRepository } from "typeorm";

class ShowSurveyService {
  async show(): Promise<Survey[]> {
    const surveysRepository = getCustomRepository(SurveysRepository);

    const allSurveys = await surveysRepository.find();

    return allSurveys;
  }
}

export { ShowSurveyService }