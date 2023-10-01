import { ReactNode } from "react";

const Definition = ({ children }: { children: ReactNode[] }) => {
  return (
    <div className="rounded-md border-2 border-blue-500 bg-blue-50 p-2">
      {children}
    </div>
  );
};

export default Definition;
