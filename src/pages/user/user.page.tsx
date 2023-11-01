import { useLoaderData } from "react-router-dom";
import { User } from "../../models/user";

function UserPage() {
    const user = useLoaderData() as User
    return (
        <>
            <h1>User</h1>
            <pre>
                {JSON.stringify(user)}
            </pre>
        </>
    )
}

export default UserPage
