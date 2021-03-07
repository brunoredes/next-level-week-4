import { SendMailController, SurveysController, UserController } from '../controllers';
import { Router } from 'express';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();

router.post('/users', userController.create);

router.get('/surveys', surveysController.show);
router.post('/surveys', surveysController.create);
router.post('/sendMail', sendMailController.execute);

export { router };