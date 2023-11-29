"use client";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { truncate } from "@/lib/Utils/formatter";

const UserSection = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" w-full py-2">
        {isClient && (
          <div className=" flex items-center space-x-4 px-4">
            <Avatar>
              <AvatarFallback>RP</AvatarFallback>
            </Avatar>
            <div className=" text-left">
              <p className="text-sm font-medium leading-none mb-0">
                Rodney paul
              </p>
              <p className="text-sm text-muted-foreground mb-0">
                {truncate("Rodney@gmail.com", 17)}
              </p>
            </div>
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserSection;
