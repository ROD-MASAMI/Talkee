"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { CustomIcon } from "@/components/Icons";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export interface ISideMenuGroup {
  title?: String;
  items: ISideMenuItem[];
}
export interface ISideMenuItem {
  label: String;
  icon?: any;
  href: String;
}

const SideMenuGroups = (props: ISideMenuGroup) => {
  const { title, items } = props;
  const router = useRouter();
  const path = usePathname();
  return (
    <div className="px-3 py-2">
      <h2 className="mb-2 px-4  tracking-tight">{title}</h2>
      <div className="space-y-1  ">
        {items.map((item, idx) => (
          <Link key={idx} href={`${item.href}`}>
            <Button
              key={idx}
              variant={path == item.href ? "secondary" : "ghost"}
              className="w-full mt-2 py-5  justify-start"
            >
              <CustomIcon icon={item.icon} />
              <div className="text-muted-foreground ml-5 text-sm font-normal">
                {item.label}
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideMenuGroups;
