import { cva } from "cva";

export const itemStyles = cva(
  `group text-sm leading-none rounded-[3px] flex items-center h-8 px-[5px]
       relative pl-[25px] select-none outline-none`,
  {
    variants: {
      color: {
        warn: `text-warn-600 dark:text-warn-200 data-[highlighted]:bg-warn-200/30
            data-[highlighted]:dark:bg-warn-600/30`,
        error: `text-error-600 dark:text-error-200 
            data-[highlighted]:bg-error-200/30 data-[highlighted]:dark:bg-error-600/30`,
        default: `dark:text-gray-100 text-gray-900  
          data-[disabled]:text-gray-200 data-[highlighted]:bg-primary-200/30 
          data-[highlighted]:text-primary-600 data-[highlighted]:dark:text-primary-200
          data-[disabled]:dark:text-gray-500 data-[highlighted]:dark:bg-primary-600/30`
      }
    },
    defaultVariants: {
      color: "default"
    }
  }
);
