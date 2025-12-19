import { ReactNode } from "react";
import { SideBar } from "@/components/layout";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full gap-6 text-[#0c0c0c]">
      <SideBar />
      <div className="min-w-0 flex-1 rounded-[32px] border border-black/5 bg-white/80 p-6 shadow-[0_35px_80px_-55px_rgba(0,0,0,0.8)] backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
