'use client'

import React from "react"
import { UserRegister } from '@/types/users'
import { SubmitHandler, useForm } from "react-hook-form";
import "../formRegister/style.css"
import Link from "next/link"

export default function FormRegister() {

    const { register, handleSubmit } = useForm<UserRegister>();

    const onSubmit: SubmitHandler<UserRegister> = (data) => {
        console.log(data);
    };

    return (
        <div className="container" onSubmit={handleSubmit(onSubmit)}>
            <form>
                <label>Nome:</label>
                <input {...register("name")} type="text" placeholder="Ex: João Silva" />

                <label>Email:</label>
                <input {...register("email")} type="email" placeholder="Ex: joao@email.com" />

                <label>Senha:</label>
                <input {...register("password")} type="password" placeholder="Ex: ********" />

                <label>Altura em CM:</label>
                <input {...register("height")} type="number" placeholder="Ex: 175" />

                <label>Peso em KG:</label>
                <input {...register("weight")} type="number" placeholder="Ex: 70" />

                <label>Data de Nascimento:</label>
                <input {...register("age")} type="date" placeholder="Ex: 01/01/1990" />

                <input type="submit" value="Enviar" />
                <p>Já possui uma conta? <Link href="/Login">Entre</Link></p>
            </form>
        </div>
    )
}