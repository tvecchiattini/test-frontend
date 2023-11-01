export type UserBase = {
    firstname: string;
    lastname: string;
    email: string;
    country: string;
    state: string;
    age?: number;
}

export type User = {
    _id?: string;
} & UserBase