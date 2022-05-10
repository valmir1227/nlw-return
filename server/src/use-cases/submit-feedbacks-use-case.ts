import { MailAdapter } from "../adapters/mail.adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";
import { PrismaFeedbackRepository } from "../repositories/prisma/prisma-feedback-repository";

interface SubmitFeedbackCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;

}

export class SubmitFeedbackUseCase {

    constructor(
        private feedbackRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ) { }

    async execute(request: SubmitFeedbackCaseRequest) {
        const { type, comment, screenshot } = request;

        await this.feedbackRepository.create({
            type,
            comment,
            screenshot
        }
        )
        await this.mailAdapter.sendMail({
            subject: "Novo Feedback",
            body: [
                `<div style="font-size: sans-serif; font-size: 16px; color: #111">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `</div>`,
            ].join("\n"),
        })
    }
}