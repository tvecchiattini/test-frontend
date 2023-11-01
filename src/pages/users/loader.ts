import { User } from "../../models/user";

export async function usersLoader() {
    const users = await fetch('http://0.0.0.0:3000/users').
        then(res => res.json()) as User[]
    return users;
}