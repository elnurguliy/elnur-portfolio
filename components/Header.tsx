import Link from "next/link";
import { Button } from "./ui/button";


import Nav from "./Nav";
const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Elnur<span className="text-accent">.</span></h1>
                </Link>

                {/* desktop nav and hire me button */}
                <div className="hidden xl:flex">
                    <Nav />
                    <Link href="/contact">
                        <Button className="ml-6">Hire Me</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header