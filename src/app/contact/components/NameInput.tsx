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
  field: ControllerRenderProps<MessageFormInput, "name">;
};

export function NameField({ field }: Props) {
  return (
    <FormItem>
      <FormLabel>Your Name</FormLabel>
      <FormControl>
        <Input autoComplete="off" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
