import nodemailer, { Transporter } from 'nodemailer';
import { CreateMailAccountHelper } from './helpers';

class SendMailService {
  private client: Transporter;

  constructor() {
    const factory = new CreateMailAccountHelper();

    nodemailer.createTestAccount()
      .then(account => {
        const transporter = nodemailer.createTransport(factory.factory(account));

        this.client = transporter;
      })
      .catch(err => {
        console.error(err);
        return new Error(err);
      });
  }
  async execute(to: string, subject: string, body: string): Promise<any> {
    const message = await this.client.sendMail({
      to,
      subject,
      html: body,
      from: 'NPS <noreply@nps.net>'
    });

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}

export default new SendMailService();
