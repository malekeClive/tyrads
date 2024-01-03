"use client";

import React, { ReactElement } from "react";
import {
  MessagesSquare,
  Target,
  Home,
  Bell,
  Clock,
  Users,
  Wallet,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { Avatar } from "../Avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";

type SidebarName =
  | "home"
  | "notification"
  | "status"
  | "users"
  | "wallet"
  | "settings";

interface SidebarMenu {
  name: SidebarName;
  component: ReactElement;
}

const NavItem = ({
  onClick,
  isActive = false,
  children,
}: {
  onClick: () => void;
  isActive?: boolean;
  children: ReactElement;
}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-full p-2 ${
        isActive
          ? "bg-primary text-white"
          : "bg-primary-foreground text-foreground"
      }`}
    >
      {children}
    </div>
  );
};

function Sidebar() {
  const [activeNav, setActiveNav] = React.useState<SidebarName>("home");

  const NavItems: SidebarMenu[] = [
    {
      name: "home",
      component: <Home size={18} />,
    },
    {
      name: "notification",
      component: <Bell size={18} />,
    },
    {
      name: "status",
      component: <Clock size={18} />,
    },
    {
      name: "users",
      component: <Users size={18} />,
    },
    {
      name: "wallet",
      component: <Wallet size={18} />,
    },
    {
      name: "settings",
      component: <Settings size={18} />,
    },
  ];

  return (
    <nav>
      <div className="xl:hidden flex flex-row px-6 py-4 items-center justify-between bg-primary">
        <Target size={30} color="#fff" />
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="px-2">
                <Menu size={30} color="#fff" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <Target size={30} />
              </SheetHeader>
              <ul className="py-8 flex flex-col gap-4">
                {NavItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link href="#" passHref>
                      <Button
                        variant="ghost"
                        className="flex flex-row gap-2 p-0"
                      >
                        <div className="text-primary">{item.component}</div>
                        <p className="capitalize text-base font-normal">
                          {item.name}
                        </p>
                      </Button>
                    </Link>
                  </SheetClose>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <ul className="hidden bg-white xl:flex flex-col gap-10 h-full justify-between p-4">
        <li className="flex-1 flex flex-col gap-10 items-center">
          <Target />
          <div className="bg-secondary-foreground cursor-pointer rounded-full p-2">
            <MessagesSquare size={18} />
          </div>
        </li>
        <li className="flex-[2] flex flex-col bg-primary-foreground justify-between items-center rounded-full p-2">
          {NavItems.map((item: SidebarMenu) => (
            <NavItem
              key={item.name}
              onClick={() => setActiveNav(item.name)}
              isActive={item.name === activeNav}
            >
              {item.component}
            </NavItem>
          ))}
        </li>
        <li className="flex-[1] justify-self-end flex flex-col gap-4 items-center">
          <Avatar size="xs" className="text-xs">
            A
          </Avatar>
          <LogOut size={18} />
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
