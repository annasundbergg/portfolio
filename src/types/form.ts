import { z } from "zod";

export type MessageFormInput = {
    name: string;
    email: string;
    message: string;
};

export const MessageFormInputSchema: z.ZodSchema<MessageFormInput> =
    z.object({
        name: z.string(),
        email: z.string(),
        message: z.string(),
    });

export type MessageFormActionInput = {
    name: string;
    email: string;
    message: string;

};

export const MessageFormActionInputSchema: z.ZodSchema<MessageFormActionInput> =
    z.object({
        name: z.string(),
        email: z.string(),
        message: z.string(),
    });

