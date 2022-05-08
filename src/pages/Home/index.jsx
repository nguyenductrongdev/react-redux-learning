
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <Link to="/todo" >Todo list</Link>
        </div>
    );
}

export default Home;