import Link from "next/link";
import "@/components/layout/header/header.css";

export default function Header() {
    return (
        <header>
            <nav>
                <h1>
                    <Link href="/dashboard">Nutrical</Link>
                </h1>
                <ul>
                    <li>IA</li>
                    <li><Link href={'/calculo'}>Calculo</Link></li>
                    <li>
                        <Link href="/Cu">Login</Link>
                    </li>
                    <li>
                        <Link href="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}