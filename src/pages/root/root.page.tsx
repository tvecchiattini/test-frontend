import { Link } from 'react-router-dom'
import './root.style.css'

function Root() {
    return (
        <>
            <h1>Welcome</h1>
            <p><Link to={`users`}>Show users</Link></p>
            <p><Link to={`brands`}>Show brands</Link></p>
        </>
    )
}

export default Root
