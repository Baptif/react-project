import { faker } from '@faker-js/faker'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const createUser = (id: number) => ({
    id, 
    name: faker.person.fullName(), 
    avatar: faker.image.avatar()
})

export const getUsers = async () => {
    const array = Array.from(Array(50).keys())

    await delay(1000)

    return array.map((id) => ({
        id,
        name: faker.person.fullName(),
        avatar: faker.image.avatar(),
    }))
}