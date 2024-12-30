"use client"

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const AcmeLogo = () => {
  return (
    <Image src="logo.svg" alt="MHT" width={32} height={32} />
  );
};

export default function App() {
  const pathname = usePathname();
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit ml-3">Mental health tracker</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === "/dashboard"}>
          <Link color="foreground" href="/dashboard">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/journal"}>
          <Link color="foreground" href="/journal">
            Journal
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/assessments"}>
          <Link color="foreground" href="/assessments">
            Assessment
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/professionals"}>
          <Link color="foreground" href="/professionals">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
