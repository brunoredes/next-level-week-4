import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository, SurveysUsersRepository, UserRepository } from "../repositories";
import SendMailService from "../services/mail/SendMailServices";

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

    const survey = await surveyRepository.findOne({ id: surveyId });

    if (!survey) {
      return response.status(400).json({
        error: 'Survey does not exists'
      });
    }

    const surveyUser = surveysUsersRepository.create({
      user_id: userAlreadyExists.id,
      survey_id: surveyId
    });

    await surveysUsersRepository.save(surveyUser);

    await SendMailService.execute(email, survey.title, survey.description);

    return response.status(200).json(surveyUser);

  }
}

export { SendMailController };
