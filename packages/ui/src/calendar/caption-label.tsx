import { Popover } from "../popover";
import { cardStyles } from "../card/styles";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "./icons";
import format from "date-fns/format";

const MONTHS = [...Array(12).keys()];
type PropTypes = {
  setDate: (date: Date) => void;
  date: Date;
  children: React.ReactNode;
};

export function CustomLabel(props: PropTypes) {
  const [page, setPage] = useState(0);

  const decade = useMemo(() => {
    let current = props.date.getFullYear() + page;

    const decadeYears = [];

    while (current % 10 !== 9) {
      current += 1;
      decadeYears.push(current);
    }
    while (current % 10 !== 0) {
      current -= 1;
      if (decadeYears.includes(current)) continue;
      decadeYears.push(current);
    }
    return decadeYears.sort();
  }, [props.date.getFullYear(), page]);

  return (
    <Popover>
      <Popover.Trigger asChild>
        <button
          className={`w-2/4 hover:bg-neutral-50 hover:dark:bg-neutral-700 rounded-md flex justify-center
         items-center text-gray-800 dark:text-gray-100`}
        >
          {props.children}
        </button>
      </Popover.Trigger>
      <Popover.Content className={cardStyles({ variant: "filled", className: "flex flex-col gap-4" })}>
        <div className="grid grid-cols-3 gap-2">
          {MONTHS.map((month, key) => {
            const date = new Date();
            date.setMonth(key);
            date.setFullYear(props.date.getFullYear());
            return (
              <button
                className={`rounded-md hover:bg-neutral-50 hover:dark:bg-neutral-700 px-2
              text-gray-800 dark:text-gray-100`}
                onClick={() => props.setDate(date)}
                key={month}
              >
                {format(date, "MMM")}
              </button>
            );
          })}
        </div>
        <div>
          <div className="flex justify-between mb-3">
            <button
              className={`h-7 w-7 flex items-center justify-center bg-transparent p-0 opacity-75 
        hover:opacity-100 text-gray-700 dark:text-gray-200  
         `}
              onClick={() => setPage(prev => prev - 10)}
            >
              <ChevronLeft />
            </button>
            <button
              className={`h-7 w-7 flex items-center justify-center bg-transparent p-0 opacity-75 
        hover:opacity-100 text-gray-700 dark:text-gray-200  
         `}
              onClick={() => setPage(prev => prev + 10)}
            >
              <ChevronRight />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {decade.map(year => {
              return (
                <button
                  className={`rounded-md hover:bg-neutral-50 hover:dark:bg-neutral-700 px-2
            text-gray-800 dark:text-gray-100`}
                  onClick={() => props.setDate(new Date(year, props.date.getMonth()))}
                  key={year}
                >
                  {year}
                </button>
              );
            })}
          </div>
        </div>
      </Popover.Content>
    </Popover>
  );
}
