import { cva } from "cva";

export const textareaStyles = cva(
  `rounded-md   text-neutral-900  border resize-none bg-none relative
  appearance-none  w-full bg-transparent  
  placeholder:top-2/4 placeholder:
placeholder:dark:text-gray-600 placeholder:text-gray-400 pl-2
border-neutral-300 outline-none 
 data-[error=true]:border-error-600 
data-[error=true]:dark:border-error-400 
dark:border-neutral-700  dark:text-neutral-100  
focus-within:ring focus-within:ring-offset-2 ring-0 
ring-offset-neutral-50 dark:ring-offset-neutral-900 dark:ring-primary-500 ring-primary-600
data-[error=true]:ring-error-400 data-[error=true]:dark:ring-error-600
`
);
