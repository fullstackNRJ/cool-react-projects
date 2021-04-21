export interface Player {
    image: string;
    title: string,
    subtitle: string,
    company: string,
    description: string,
    //tags: Array<Tags>
    date: number
}

interface Tags {
    name: string;
    color: string;
}