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
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

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
      className={`nav-item ${isActive ? "active" : "not-active"}`}
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
      <div className="sidebar-mobile">
        <Target size={30} color="#fff" />
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="variant-ghost size-default">
                <Menu size={30} />
              </Button>
            </SheetTrigger>
            <SheetContent className="variant-side-left">
              <SheetHeader>
                <Target size={30} />
              </SheetHeader>
              <ul className="sidebar-mobile-list">
                {NavItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link href="#" passHref>
                      <Button className="variant-ghost size-default">
                        <div>{item.component}</div>
                        <p>{item.name}</p>
                      </Button>
                    </Link>
                  </SheetClose>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <ul className="sidebar-web ">
        <li>
          <Target />
          <div>
            <MessagesSquare size={18} />
          </div>
        </li>
        <li>
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
        <li>
          <Avatar className="variant-default size-xs">
            <Image
              alt="clive"
              src="/avatar-cute-monster.jpeg"
              width={25}
              height={25}
            />
          </Avatar>
          <LogOut size={18} />
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
