import { prismaConnection } from "./client"

const users = [
    {
        name: 'user 1',
        email: 'user 1',
        age: 'user 1',
        departament: 'user 1',
    },
    {
        name: 'user 2',
        email: 'user 2',
        age: 'user 2',
        departament: 'user 2',
    },
]

const insert = async () => {
    users.map(async user => {
        await prismaConnection.user.create({
            data: user
        })
    })
}

insert().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(() => prismaConnection.$disconnect())