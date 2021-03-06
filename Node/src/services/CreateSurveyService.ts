import { Survey } from "models";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { getCustomRepository } from "typeorm";

class CreateSurveyService {

  async create(title: string, description: string): Promise<Survey> {
    const surveysRepository = getCustomRepository(SurveysRepository);

    const survey = surveysRepository.create({
      title,
      description
    });

    return await surveysRepository.save(survey);
  }
 }

export { CreateSurveyService };
