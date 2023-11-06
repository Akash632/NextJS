"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function Layout({children}){

    const pathName = usePathname();
    return(
        <div>
            <div style={{width:'30%'}}>
                {pathName !== "/about/students" ? <ul style={{display:'flex',justifyContent:'space-between'}}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/login">
                        Login
                    </Link>
                    </li>
                    <li>
                        <Link href="/about">
                        About
                        </Link>
                        </li>
                </ul> : ""}
            </div>
            {children}
        </div>
    )
}

