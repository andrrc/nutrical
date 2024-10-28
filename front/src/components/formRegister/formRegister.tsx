import React from "react"
import { UserRegister } from '@/types/users'
import { useForm } from "react-hook-form";

export default function FormRegistro() {

    return (
        <form method="GET" action="">
            <label>Nome:</label>
            <input type="text" />

            <label>Email:</label>
            <input type="text" />

            <label>Senha:</label>
            <input type="text" />

            <label>Peso:</label>
            <input type="text" />

            <label>Data de Nascimento:</label>
            <input type="date" />
        </form>
    )
}