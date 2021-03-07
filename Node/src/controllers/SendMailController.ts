import { Request, Response } from "express";
import { SurveysRepository, SurveysUsersRepository, UserRepository } from "../repositories";
import { getCustomRepository } from "typeorm";

class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, survey_id: surveyId } = request.body;

    const usersRepository = getCustomRepository(UserRepository);
    const surveyRepository = getCustomRepository(SurveysRepository);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (!userAlreadyExists) {
      return response.status(400).json({
        error: 'User does not exists'
      });
    }

    const surveyAlreadyExists = await surveyRepository.findOne({ id: surveyId });

    if(!surveyAlreadyExists) {
      return response.status(400).json({
        error: 'Survey does not exists'
      });
    }

    const surveyUser = surveysUsersRepository.create({
      user_id: userAlreadyExists.id,
      survey_id: surveyId
    });

    await surveysUsersRepository.save(surveyUser);

    return response.status(200).json(surveyUser);

  }
}

export { SendMailController };
