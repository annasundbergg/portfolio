import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { MessageFormInput } from "@/types/form";
import { ControllerRenderProps } from "react-hook-form";

type Props = {
  field: ControllerRenderProps<MessageFormInput, "message">;
};

export function MessageField({ field }: Props) {
  return (
    <FormItem>
      <FormLabel>Message</FormLabel>
      <FormControl>
        <Textarea autoComplete="off" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
