declare type EmailDTO = {
    to: string;
    text: string;
    subject: string;
};
export declare class EmailService {
    constructor();
    sendEmail(payload: EmailDTO): void;
    newmailjet(payload: EmailDTO): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo | undefined>;
}
export {};
