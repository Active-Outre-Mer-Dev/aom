import { cva } from "cva";

export const cardSectionStyles = cva(
  `-ui-mx-4 data-[first=true]:-ui-mt-4  data-[first=true]:ui-rounded-t-md 
  data-[last=true]:ui-rounded-b-md data-[last=true]:-ui-mb-4  `,
  {
    variants: {
      inheritPadding: {
        true: "ui-p-4"
      }
    }
  }
);
