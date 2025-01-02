import React from "react";

type T_Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Readonly<T_Props>) {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1 wrapper">{children}</main>
    </div>
  );
}
