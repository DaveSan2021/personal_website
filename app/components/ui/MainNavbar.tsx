"use client"
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@heroui/navbar";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { usePathname } from "next/navigation";

const MainNavbar = () => {
    const pathname = usePathname();

    return (
        <Navbar style={{ backgroundColor: "#131515"}} className="text-[#7de2d1]" isBordered>
            {/* Navbar brand */}
            <NavbarContent justify="start">
            <p className="font-bold text-inherit text-white">
            Davayan <br />
            Sanyal
            </p>
            </NavbarContent>

            {/* Centered Navbar items */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={pathname === "/"}>
                    <Link href="/">Home</Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === "/resume"}>
                    <Link href="/resume">Resume</Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === "/projects"}>
                    <Link href="/projects">Projects</Link>
                </NavbarItem>
            </NavbarContent>

            {/* Right-aligned Navbar items */}
            <NavbarContent justify="end">
                <NavbarItem isActive={pathname === "/contacts"}>
                    <Link href="/contacts">Contact Me</Link>
                </NavbarItem>
            </NavbarContent>
            {/* Left Content 
            <NavbarContent className="hidden sm:flex gap-4" justify="start">
                <NavbarItem>
                    <Link href="/" passHref>
                        <Button as="a">Home</Button>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/resume" passHref>
                        <Button as="a">Resume</Button>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/projects" passHref>
                        <Button as="a">Projects</Button>
                    </Link>
                </NavbarItem>
            </NavbarContent>


            <NavbarContent justify="end">
                <NavbarItem>
                    <Link href="/contacts" passHref>
                        <Button as="a" color="primary">Contact Me</Button>
                    </Link>
                </NavbarItem>
            </NavbarContent>*/}
        </Navbar>
    );
};

export default MainNavbar;
