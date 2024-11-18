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
<<<<<<< HEAD:front/src/components/header/header.tsx
                    <li><Link href={"/Dietas"}>Dietas</Link></li>
                    <li>
                        <Link href="/Login">Login</Link>
=======
                    <li><Link href={'/calculo'}>Calculo</Link></li>
                    <li>
                        <Link href="/Cu">Login</Link>
                    </li>
                    <li>
                        <Link href="/register">Register</Link>
>>>>>>> 29e40b5048629746c252216d841761b447aa542c:front/src/components/layout/header/header.tsx
                    </li>
                </ul>
            </nav>
        </header>
    )
}