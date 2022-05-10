import { MailAdapter, SendMailData } from "../mail.adapter";
import nodemailer from "nodemailer"

export class NodemailerMailAdapter implements MailAdapter {

    async sendMail({ subject, body }: SendMailData) {

        const transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "8c8a0db90d03de",
                pass: "5898ec62497930"
            }
        });

        await transport.sendMail({
            from: "Equipe feedget <oi@feedget.com>",
            to: "Valmir Almeida <almeidavalmir76@gmail.com>",
            subject,
            html: body,
        })
    }
};
