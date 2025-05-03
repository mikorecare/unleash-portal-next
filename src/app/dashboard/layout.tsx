"use client";

import DashBoardSidebar from "./components/sidebar/sidebar.component"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashBoardSidebar>
        {children}
      </DashBoardSidebar>
    </>
  )
}

export default DashboardLayout;