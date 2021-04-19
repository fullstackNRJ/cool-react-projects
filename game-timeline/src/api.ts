import faker from "faker";

import { Player } from './models/Player';

export function createTag() {
    return {
        name: faker.random.word(),
        color: faker.internet.color()
    };
}


export const fetchDataFromServer = (n = 1000) => {
    let data: Player[] = [];

    for (let i = 0; i < n; i++) {
        data.push({
            image: faker.image.avatar(),
            title: faker.name.findName(),
            subtitle: faker.name.jobTitle(),
            company: faker.company.companyName(),
            description: faker.lorem.paragraph(),
            //tags: [createTag(), createTag(), createTag()]
        });
    }

    return data;
}