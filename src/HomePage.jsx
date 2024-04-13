import './assets/HomePage.css';
import { signal } from "@preact/signals";

const HomePage = () => {
    
    const allPictures = signal([
        {
            name:"test",
            tags:"house",
            info:"this is a test"
    }
    ])
    return (
        <div className='homeBoxDaddy'>
            <input type="text" className="searchBar" placeholder="Search..." />
        </div>
    )
}

export default HomePage;