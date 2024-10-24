import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { z } from "zod"

const app = fastify();

const prisma = new PrismaClient()
//instaciando uma chamada ao banco de dados.

app.get('/users', async () => {
    const users = await prisma.user.findMany()
    // achando todos listados na tabela.

    return { users }  // retornando eles.
})

app.post('/users', async (request, reply) => {
    const createUserSchema = z.object({       //criando um schema com um a lib zod, validação runtime.
        name: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(6)
    })

    const { name, email, password } = createUserSchema.parse(request.body) // puxando email, name pelo body do user cadastrado depois da validação.

    await prisma.user.create({  //criando uma row na tabela, com os dados cadastrados.
        data: {
            name,
            email,
            password,
        }
    })

    return reply.status(201).send() //retornando um http de criação sem nenhum corpo.
})

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333
}).then(() => {
    console.log('HTTP server running');

})
