import {  
    Navbar,  
    NavbarBrand,   
    NavbarContent,   
    NavbarItem,   
    NavbarMenuToggle,  
    NavbarMenu,  
    NavbarMenuItem} from "@nextui-org/navbar";

import Link from "next/link";
import {Button, ButtonGroup} from "@nextui-org/button";

const MainNavbar = async () => {

    return (
        <div className="text-black flex">
            <Navbar>
            <NavbarContent className="hidden sm:flex gap-4" justify="start">
                <NavbarItem> 
                    <Link href="/"> <Button>Home</Button> </Link>
                </NavbarItem>
                <NavbarItem> 
                    <Link href="/resume"> <Button>Resume</Button> </Link>
                </NavbarItem>
                <NavbarItem> 
                    <Link href="/projects"> <Button>Projects</Button> </Link>
                </NavbarItem>
                
            </NavbarContent>
            
            <NavbarContent className="" justify="end">
                <NavbarItem> 
                    <Link href="/contacts"> <Button color="primary"> Contact Me </Button></Link>
                </NavbarItem>
            </NavbarContent>
            </Navbar>
      </div>
    );
}

export default MainNavbar;