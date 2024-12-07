'use client'

import Link from "next/link";
import React from "react"
import { UserLogin } from '@/types/users'
import { SubmitHandler, useForm } from "react-hook-form";
import "../formLogin/style.css"

export default function FormLogin() {

    const { register, handleSubmit } = useForm<UserLogin>();

    const onSubmit: SubmitHandler<UserLogin> = (data) => {
        console.log(data);
    };

    return (
        <div className="container" onSubmit={handleSubmit(onSubmit)}>
            <form>

                <label>Email:</label>
                <input {...register("email")} type="email" placeholder="Ex: joao@email.com" />

                <label>Senha:</label>
                <input {...register("password")} type="password" placeholder="Ex: ********" />
                
                <input type="submit" value="Enviar" />
                <p>Não tem uma conta? <Link href="/register">Registre-se</Link></p>
            </form>
        </div>
    )
}