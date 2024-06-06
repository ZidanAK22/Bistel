import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";

export default function NavbarCustom () {
    return (
    <Navbar className="flex flex-row justify-start bg-slate-50 text-black">
        <NavbarBrand>      
            <Link href="/" className="flex">
                <Image className="m-3" src="/catfish.png" width={64}/>                
                <p className="p-6 m-2 font-bold">Lele Digital Solutions Inc</p>                
            </Link>  
        </NavbarBrand>     
        <NavbarContent className="p-6 m-2 self-end">
            <NavbarItem className="mr-10">
                <Link href="/products">
                    Products
                </Link>                                
            </NavbarItem>        
            {/* <NavbarItem className="ml-6">
                <Link href="/products">
                    About Us
                </Link>
            </NavbarItem> */}
        </NavbarContent>       
    </Navbar>
    );
}