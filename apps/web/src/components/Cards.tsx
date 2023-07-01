"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  IconAccessible,
  IconGauge,
  IconReportAnalytics,
  IconTestPipe,
  IconWorldSearch,
  IconTools
} from "@tabler/icons-react";
import { Card } from "@aomdev/ui";

const slideUp: Variants = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
};

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

type Service = {
  Icon: (props: { size?: number }) => JSX.Element;
  title: string;
};

export function Cards() {
  const services: Service[] = [
    {
      Icon: IconWorldSearch,
      title: "SEO"
    },
    {
      Icon: IconGauge,
      title: "Performance"
    },
    {
      Icon: IconAccessible,
      title: "Accessibility"
    },
    {
      Icon: IconTestPipe,
      title: "Automated tests"
    },
    {
      Icon: IconTools,
      title: "Design"
    },
    {
      Icon: IconReportAnalytics,
      title: "User insights"
    }
  ];
  return (
    <>
      <motion.div
        variants={stagger}
        whileInView={"visible"}
        initial={"hidden"}
        viewport={{ margin: "-150px" }}
        className="grid grid-cols-3 col-span-full w-full gap-4"
      >
        {services.map(({ Icon, title }, key) => {
          return (
            <motion.div key={key} variants={slideUp}>
              <Card className="relative overflow-hidden space-y-4 " variant={"outline"}>
                <div className="card-gradient absolute top-0 left-0 w-full h-full"></div>
                <span className="h-6 w-6 block rounded-full text-primary-300">
                  <Icon size={32} />
                </span>
                <h3 className="text-2xl font-heading relative text-primary-50">{title}</h3>
                <p className="relative">Culpa incididunt eu reprehenderit ea est aute dolore nostrud.</p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}

// function Card({ Icon, title }: PropTypes) {
//   return (
//     <motion.div
//       variants={slideUp}
//       className="border relative overflow-hidden  space-y-4 border-neutral-500 rounded-xl px-4 py-5"
//     >
//       <div className="card-gradient absolute top-0 left-0 -translate-x-6 -translate-y-2 w-full h-full"></div>
//       <span className="h-6 w-6 block rounded-full text-primary-300">
//         <Icon size={32} />
//       </span>
//       <h3 className="text-2xl font-heading relative text-primary-50">{title}</h3>
//       <p className="relative">Culpa incididunt eu reprehenderit ea est aute dolore nostrud.</p>
//     </motion.div>
//   );
// }
