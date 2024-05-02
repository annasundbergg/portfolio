import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MessageFormInput } from "@/types/form";
import { ControllerRenderProps } from "react-hook-form";

type Props = {
  field: ControllerRenderProps<MessageFormInput, "email">;
};

export function EmailField({ field }: Props) {
  return (
    <FormItem>
      <FormLabel>Your E-mail</FormLabel>
      <FormControl>
        <Input autoComplete="off" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
