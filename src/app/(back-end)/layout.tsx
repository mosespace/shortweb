import React, { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/connections/auth";
import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "@/components/back-end/dashboard-header";
import Sidebar from "@/components/back-end/dashboard-sidebar";
import { User } from "@prisma/client";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  const user: User = session?.user;

  return (
    <div className='w-full md:fixed md:inset-x-0 grid min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      <Sidebar />
      <div>
        <Header user={user} />

        <div className='relative flex flex-col h-screen'>
          <ScrollArea className='relative pb-24 z-20 flex-grow h-full overflow-y-auto'>
            {children}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
