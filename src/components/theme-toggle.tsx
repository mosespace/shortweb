"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { IoMoon } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { IoSunnySharp } from "react-icons/io5";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      size='icon'
      variant='outline'
    >
      {theme === "dark" ? (
        <IoSunnySharp className='text-lg' />
      ) : (
        <IoMoon className='text-lg' />
      )}
    </Button>
  );
}
