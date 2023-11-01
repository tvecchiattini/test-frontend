import { Link, useLoaderData } from "react-router-dom";
import { User } from "../../models/user";

function Users() {
    const users = useLoaderData() as User[]
    return (
        <>
            <h1>Users</h1>
            <Link to={'/users/create'}>+ User</Link>
            <hr />
            {users.map(user => (
                <div>
                    <Link to={`/users/${user.email}`}>
                        {user.firstname} {user.lastname}
                    </Link>
                </div>
            ))}
        </>
    )
}

export default Users
