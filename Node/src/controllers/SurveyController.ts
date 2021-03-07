import { Request, Response } from "express";
import { CreateSurveyService, ShowSurveyService } from "../services";

class SurveysController {
  async create(request: Request, response: Response) {
    const { title, description } = request.body;

    const createSurveyService = new CreateSurveyService();

    const survey = await createSurveyService.create(title, description);

    return response.status(201).json(survey);
  }

  async show(request: Request, response: Response) {
    const showSurveyService = new ShowSurveyService();
    
    const allSurveys = await showSurveyService.show();

    return response.status(200).json(allSurveys);
  }
}

export { SurveysController };
