import { QuestionCategory } from "./questions";
import type { BadgeProps } from "ui";

export function getCatColor(type: QuestionCategory): BadgeProps["color"] {
  switch (type) {
    case "economy": {
      return "primary";
    }

    case "general": {
      return "success";
    }
    case "geography": {
      return "secondary";
    }
    case "history": {
      return "error";
    }
    default:
      return "success";
  }
}
