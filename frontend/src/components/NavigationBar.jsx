import { NavLink, Link } from "react-router-dom"
import BloggNodeLogo from "../images/bloggnode_logo_1024.png"

function NavigationBar() {
  return <div className="flex justify-between border-b-2 border-cyan-500 px-5 bg-cyan-200 content-center item-center">
        <Link to="/" className="py-2 px-4 border-cyan-200 rounded-lg border-2"><img src={BloggNodeLogo} height="25px" width="25px" className="inline"/><strong className="px-2">BloggNode</strong></Link>
        <ul className="flex justify-around items-center">
            <NavLink to="/" className={({isActive}) => `${isActive? "underline underline-offset-2 decoration-cyan-700 ":"" }`}><li className="py-1 px-2  hover:border-cyan-50 border-cyan-200 hover:bg-cyan-100 rounded-lg border-2 mr-1">Home</li></NavLink>
            <NavLink to="/blogs" className={({isActive}) => `${isActive? "underline underline-offset-2 decoration-cyan-700 ":"" }`}><li className="py-1 px-2  hover:border-cyan-50 border-cyan-200 hover:bg-cyan-100 rounded-lg border-2 ml-1">Blogs</li></NavLink>
            <NavLink to="/aboutus" className={({isActive}) => `${isActive? "underline underline-offset-2 decoration-cyan-700 ":"" }`}><li className="py-1 px-2  hover:border-cyan-50 border-cyan-200 hover:bg-cyan-100 rounded-lg border-2 ml-1">About Us</li></NavLink>
        </ul>
        <ul className="flex content-center items-center">
            <Link to="/signin" ><li className="py-1 px-2  hover:border-blue-400 hover:underline hover:underline-offset-4 border-cyan-200 hover:bg-cyan-100 rounded-lg border-2 mr-1">Sign In</li></Link>
            <Link to="/signup" ><li className="py-1 px-2  hover:border-blue-400 hover:underline hover:underline-offset-4 border-cyan-200 hover:bg-cyan-100 rounded-lg border-2 mr-1">Sign Up</li></Link>
        </ul>
    </div>
}

export default NavigationBar