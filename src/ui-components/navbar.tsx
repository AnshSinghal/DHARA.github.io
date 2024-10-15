"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";


export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-2 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <a href="/">
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem></a>
        <a href="/search">
        <MenuItem setActive={setActive} active={active} item="Ask">
        </MenuItem></a>
        {/* <a href="/predict">
        <MenuItem setActive={setActive} active={active} item="Predict">
        </MenuItem></a> */}
        <a href="/about">
        <MenuItem setActive={setActive} active={active} item="About Us">
        </MenuItem></a>
      </Menu>
    </div>
  );
}
