import Footer from "@/components/footer";
import React, { ReactNode } from "react";
import Alert from "@/components/front-end/alert";
import Header from "@/components/front-end/header";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className=''>
      <Alert />

      <div className='pt-[10rem] lg:pt-[5rem] bg-secondary dark:bg-primary-foreground px-8'>
        {children}
      </div>
      <Footer />
    </div>
  );
}
