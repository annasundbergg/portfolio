"use client";
import { sendEmail } from "../utils/send-email";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";
import { useState } from "react";
import { MessageFormInput, MessageFormInputSchema } from "@/types/form";
import { NameField } from "./NameInput";
import { EmailField } from "./EmailInput";
import { MessageField } from "./MessageTextarea";
import { cn } from "@/lib/utils";
import { fontTitanOne, fontUbuntu } from "@/lib/fonts";

export function MessageForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const form = useForm<MessageFormInput>({
    resolver: zodResolver(MessageFormInputSchema),
  });

  async function onSubmit(message: MessageFormInput) {
    try {
      setIsLoading(true);
      await sendEmail(message);
      setIsEmailSent(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      {isEmailSent ? (
        <p
          className={cn(
            "font-mono text-[#D55353] text-[40px]",
            fontTitanOne.variable
          )}
        >
          Email sent
        </p>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-1 flex-col space-y-5"
          >
            <p
              className={cn(
                "font-mono text-[#D55353] text-[40px]",
                fontTitanOne.variable
              )}
            >
              Message Me
            </p>

            <p
              className={cn(
                "font-serif text-[15px] text-[#7d5656]",
                fontUbuntu.variable
              )}
            >
              Send a message and I’ll get back to you as soon as possible
            </p>

            <FormField control={form.control} name="name" render={NameField} />

            <FormField
              control={form.control}
              name="email"
              render={EmailField}
            />

            <FormField
              control={form.control}
              name="message"
              render={MessageField}
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-1/4 self-center bg-[#d55354] hover:bg-[#FBE7C9]"
            >
              {isLoading ? "Sending message..." : "Send!"}
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}
