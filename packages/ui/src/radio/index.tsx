import * as RadixRadio from "@radix-ui/react-radio-group";
import { useId } from "react";
import { Label } from "../label";

export type RadioItem = { label?: string } & RadixRadio.RadioGroupItemProps;
export type RadioProps = RadixRadio.RadioGroupProps;

function Item({ label, ...props }: RadioItem) {
  const id = useId();
  return (
    <div className="flex items-center gap-2">
      <RadixRadio.Item
        {...props}
        id={props.id || id}
        className={`data-[state=checked]:bg-primary-600 data-[state=checked]:dark:bg-primary-500 
        bg-neutral-200 dark:bg-neutral-700 overflow-hidden w-5 h-5 rounded-full outline-none 
        cursor-default duration-200 ease-out`}
      >
        <RadixRadio.Indicator
          className={`flex overflow-hidden bg-primary-600 dark:bg-primary-500 items-center 
          justify-center w-full h-full relative after:content-[''] after:block 
          after:w-2/4 after:h-2/4 after:rounded-full after:bg-primary-50`}
        />
      </RadixRadio.Item>
      {label ? <Label htmlFor={props.id || id}>{label}</Label> : null}
    </div>
  );
}

export function Radio(props: RadioProps) {
  return (
    <RadixRadio.Root {...props} className="flex flex-col gap-2.5">
      {props.children}
    </RadixRadio.Root>
  );
}

Radio.Item = Item;
