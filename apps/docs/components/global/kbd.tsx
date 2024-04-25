export function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="text-xs bg-neutral-200/30 dark:bg-neutral-600/30 ring-1 ring-neutral-100 dark:ring-neutral-700 inline-block ml-6 p-[1px] rounded-sm">
      {children}
    </kbd>
  );
}
