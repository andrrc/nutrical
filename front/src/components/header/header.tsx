
import "@/app/css/header.css";
export default function Header(){
    return(
        <header>
            <nav>
                <h1>Nutrical</h1>
                <ul>
                    <li>IA</li>
                    <li>Dietas</li>
                    <li>Login</li>
                    <li><a href="../formRegister.tsx">Register</a></li>
                </ul>
            </nav>
        </header>
    )
}