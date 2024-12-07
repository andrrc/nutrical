import React from "react";
import Link from "next/link";
import "@/components/header/style.css";

export default function Header() {
    return (
        <header>
            <nav>
                <h1>
                    <Link href="/dashboard">Nutrical</Link>
                </h1>
                <ul>
                    {/* <li>IA</li> */}
                    {/* <li><Link href="/Dietas">Dietas</Link></li> */}
                    <li>
                        <Link href="/Login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}