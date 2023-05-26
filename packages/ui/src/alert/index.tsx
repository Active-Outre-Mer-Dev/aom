import { forwardRef } from "react";
import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "cva";
import { alertStyles } from "./styles";

export type AlertProps = ComponentPropsWithRef<"div"> &
  VariantProps<typeof alertStyles> & { icon?: React.ReactNode };

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, color, title, icon, ...props }, ref) => {
    return (
      <div ref={ref} role="alert" {...props} className={alertStyles({ className, color })}>
        {icon ? (
          <div className="col-span-1 flex items-center justify-center">{icon}</div>
        ) : (
          <div className="col-span-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              <path d="M12 9h.01"></path>
              <path d="M11 12h1v4h1"></path>
            </svg>
          </div>
        )}
        <div className={"col-span-11"}>
          {title ? <h5 className="font-semibold grow text-lg block">{title}</h5> : null}
        </div>
        <span className={"row-start-2  col-start-2 col-span-11"}>{props.children}</span>
      </div>
    );
  }
);

Alert.displayName = "Alert";
