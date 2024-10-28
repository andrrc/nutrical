import React from "react"
import { UserRegister } from '@/types/users'
import { useForm } from "react-hook-form";

export default function FormRegistro() {

    return (
        <div className="container">
            <form>
                <label>Nome:</label>
                <input type="text" />

                <label>Email:</label>
                <input type="email" />

                <label>Senha:</label>
                <input type="password" />

                <label>Altura em CM:</label>
                <input type="number" />

                <label>Peso em KG:</label>
                <input type="number" />

                <label>Data de Nascimento:</label>
                <input type="date" />

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}