import React from "react";

type Props = {
  children: React.ReactNode;
  customClass: string;
};
export default function CommonLayout({ children, customClass }: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className={`${customClass && customClass} bg-white`}>{children}</div>
    </div>
  );
}
