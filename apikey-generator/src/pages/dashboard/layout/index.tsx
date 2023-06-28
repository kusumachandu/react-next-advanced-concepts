import React from "react";
import { ReactNode } from "react";

export default function DashboardLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
}