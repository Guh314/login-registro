import { faker } from '@faker-js/faker';

// Usar para popular o banco de dados
export function createRandomUser() {
    return {
        nome: faker.person.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
}
