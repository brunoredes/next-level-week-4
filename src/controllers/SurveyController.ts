import { SurveysRepository } from "@/repositories/SurveysRepository";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

class SurveysController {
  async create(request: Request, response: Response) {
    const { title, description } = request.body;

    const surveysRepository = getCustomRepository(SurveysRepository);

    const survey = surveysRepository.create({
      title,
      description
    });

    await surveysRepository.save(survey);

    return response.status(201).json(survey);
  }
}

export { SurveysController }