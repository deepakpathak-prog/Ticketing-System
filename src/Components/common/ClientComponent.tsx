'use client';

import Sidebar from "@/Components/common/Sidebar";
import PassSidebar from "@/Components/common/PassSidebar"; // Import the additional sidebar component
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientComponent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [shouldHideSidebar, setShouldHideSidebar] = useState(false);
  const [shouldShowPassSidebar, setShouldShowPassSidebar] = useState(false); // State for additional sidebar

  useEffect(() => {
    const noSidebarRoutes = ["/login", "/reset","/FirstPassword","/AccountDetails","/team/Managerlogin","/Onboard/ManagerOnboard","/Onboard/ResetPassword"]; // Routes where the main sidebar should be hidden
    const passSidebarRoutes = ["/FirstPassword", "/AccountDetails","/Onboard/ResetPassword"]; // Routes where PassSidebar should be shown

    setShouldHideSidebar(noSidebarRoutes.includes(pathname));
    setShouldShowPassSidebar(passSidebarRoutes.includes(pathname));
  }, [pathname]);

  return (
    <div className="flex h-screen">
      {!shouldHideSidebar && !shouldShowPassSidebar && <Sidebar />} {/* Main Sidebar */}
      {shouldShowPassSidebar && <PassSidebar />} {/* Additional Sidebar */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
