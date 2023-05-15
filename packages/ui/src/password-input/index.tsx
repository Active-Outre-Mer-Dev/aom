import { useState, forwardRef, useId } from "react";
import { InputRoot } from "../input-wrapper";
import { cx } from "../cx";
import { Eye, EyeOff } from "lucide-react";
import type { ComponentPropsWithRef } from "react";
import type { InputRootProps } from "../input-wrapper";

export type PasswordInputProps = Omit<InputRootProps, "icon"> & ComponentPropsWithRef<"input">;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, description, error, ...props }, ref) => {
    const [type, setType] = useState<"text" | "password">("password");
    const id = useId();
    return (
      <>
        <InputRoot {...props} error={error} id={props.id || id} description={description} label={label}>
          <input
            {...props}
            type={type}
            ref={ref}
            id={props.id || id}
            className={cx(
              `ui-appearance-none  ui-outline-none ui-w-full ui-bg-transparent ui-h-full ui-inline-block
          placeholder:dark:ui-text-neutral-600 placeholder:ui-text-neutral-400`,
              "ui-pl-2"
            )}
          />
          <div
            className={`ui-absolute ui-text-neutral-500 dark:ui-text-neutral-300 ui-top-2/4 ui-right-2
         -ui-translate-y-2/4`}
          >
            <button
              aria-hidden="true"
              tabIndex={-1}
              className={`hover:ui-bg-neutral-300/10 ui-rounded-sm ui-p-[2px] ui-relative active:ui-top-[2px] 
            hover:dark:ui-bg-neutral-700/50`}
              onClick={() => setType(type === "text" ? "password" : "text")}
            >
              {type === "password" ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
          </div>
        </InputRoot>
      </>
    );
  }
);
