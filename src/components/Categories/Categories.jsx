import './Categories.css';
import { FaMagic , FaLaptopCode} from "react-icons/fa";
import { GiCyberEye } from "react-icons/gi";

function Categories()
{
    return(<div className='categories'>
        <h1 id="heading">Browse By <span>Categories</span></h1>
        <button className='category-button'>  All Categories</button>
        <div className='categories-list'>
            <div className='category'>
            <FaMagic className='category-icon'/>
            <div className='category-text'>
                <p className='category-title'>Animation<br/>
                <span className='category-course'>8 Courses</span></p>
            </div>
            </div>
            <div className='category'>
            <GiCyberEye className='category-icon'/>
            <div className='category-text'>
                <p className='category-title'>Cyber Security<br/>
                <span className='category-course'>12 Courses</span></p>
            </div>
            </div>
            <div className='category'>
            <FaLaptopCode className='category-icon'/>
            <div className='category-text'>
                <p className='category-title'>Web development<br/>
                <span className='category-course'>3 Courses</span></p>
            </div>
            </div>
        </div>
    </div>)
}

export default Categories;