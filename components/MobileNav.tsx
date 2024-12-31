"use client";

// Components to build a mobile navigation menu
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
// installed hamburger menu icon from react-icons using "npm i react-icons"
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Projects",
        path: "/my-projects",
    },
    {
        name: "Contact",
        path: "/contact",
    },
]

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">

                <div className="mt-32 mb-40 text-center text-2xl">logo
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Elnur<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link href={link.path}
                                key={index}
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"
                                    } text-xl capitalize hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>

    );
};

export default MobileNav;