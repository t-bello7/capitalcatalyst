import { ReactNode } from "react";
import DashboardShell from "@/components/layout/DashboardShell";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <DashboardShell>{children}</DashboardShell>
  );
};

export default DashboardLayout;
