import { User } from "../../models/user";

export async function userLoader({ params }) {
    const users = await fetch(`http://0.0.0.0:3000/users/${params.id}`).
        then(res => res.json()) as User
    return users;
}