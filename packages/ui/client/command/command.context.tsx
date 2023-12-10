import { useContext, createContext } from "react";

type ContextProps = {
  onClose?: () => void;
};

const CommandContext = createContext<ContextProps | null>(null);

type PropTypes = { children: React.ReactNode } & ContextProps;

export function CommandProvider({ children, onClose }: PropTypes) {
  return <CommandContext.Provider value={{ onClose }}>{children}</CommandContext.Provider>;
}

export function useCommandProps() {
  return useContext(CommandContext);
}
