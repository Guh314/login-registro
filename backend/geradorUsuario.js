import { faker } from '@faker-js/faker';

// Usar para popular o banco de dados
// Fix it with propoer faker install
export function createRandomUser() {
    return {
        nome: faker.person.firstName(),
        email: faker.internet.email(),
        senha: faker.internet.password(),
        cpf: faker.string.numeric(11),
        numero: faker.phone.number()
    };
}

const newUser = createRandomUser();
