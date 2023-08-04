import { forwardRef, useId } from "react";
import { Label } from "../label";
import { textareaStyles } from "./styles";
import { twMerge } from "tailwind-merge";
import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "cva";

export type TextareaProps = VariantProps<typeof textareaStyles> &
  ComponentPropsWithRef<"textarea"> & { label?: string; error?: boolean };

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ ...props }, ref) => {
  const id = useId();
  const classes = twMerge(textareaStyles());
  return (
    <div>
      {props.label ? (
        <Label htmlFor={props.id || id} className="block mb-1">
          {props.label}
        </Label>
      ) : null}

      <textarea
        data-error={props.error}
        ref={ref}
        {...props}
        id={props.id || id}
        rows={props.rows || 3}
        className={classes}
      />
    </div>
  );
});

Textarea.displayName = "Textarea";
