'use client'

import React from "react"
import { UserRegister } from '@/types/users'
import { SubmitHandler, useForm } from "react-hook-form";
import "../formRegister/style.css"

export default function FormRegister() {

    const { register, handleSubmit } = useForm<UserRegister>();

    const onSubmit: SubmitHandler<UserRegister> = (data) => {
        console.log(data);
    };

    return (
        <div className="container" onSubmit={handleSubmit(onSubmit)}>
            <form>
                <label>Nome:</label>
                <input {...register("name")} type="text" />

                <label>Email:</label>
                <input {...register("email")} type="email" placeholder="email" />

                <label>Senha:</label>
                <input {...register("password")} type="password" />

                <label>Altura em CM:</label>
                <input {...register("height")} type="number" />

                <label>Peso em KG:</label>
                <input {...register("weight")} type="number" />

                <label>Data de Nascimento:</label>
                <input {...register("age")} type="date" />

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}