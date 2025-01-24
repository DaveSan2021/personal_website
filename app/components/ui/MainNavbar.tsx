"use client"
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@heroui/navbar";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { usePathname } from "next/navigation";
import React from "react";
import { m } from "framer-motion";

const MainNavbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Resume",
            link: "/resume"
        },
        {
            name: "Projects",
            link: "/projects"
        },
    ];

    const handleMenuItemClick = () => {
        setIsMenuOpen(false); // Close the menu when an item is clicked
    };


    return (
        <Navbar 
        isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}
        style={{ backgroundColor: "#131515"}} className="text-[#7de2d1]" isBordered>
            {/* Navbar brand */}

            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />

            <NavbarContent className={isMenuOpen ? 'justify-center' : 'justify-start'}>
                <p className="font-bold text-inherit text-white">
                Davayan Sanyal
                </p>
            </NavbarContent>

            {/* Centered Navbar items */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center" onClick={handleMenuItemClick}>
                <NavbarItem isActive={pathname === "/"}>
                    <Link href="/">
                    Home</Link>
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
                    <Link href="/contacts">My Links</Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="flex flex-col">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`} className="flex-none">
                        <Link
                            
                            color={
                                index === 2 
                                ? "primary" 
                                : index === menuItems.length - 1 
                                ? "danger" 
                                : "foreground"
                            }
                            href={item.link}
                            
                        >
                        {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

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
