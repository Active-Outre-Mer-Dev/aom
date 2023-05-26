import { cva } from "cva";

export const cardSectionStyles = cva(
  `-mx-4 data-[first=true]:-mt-4  data-[first=true]:rounded-t-md 
  data-[last=true]:rounded-b-md data-[last=true]:-mb-4  `,
  {
    variants: {
      inheritPadding: {
        true: "p-4"
      }
    }
  }
);
