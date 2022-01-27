import React,{useState} from 'react'
import logo from "../images/logo.svg"
import menu from "../images/menu.svg"
import drop from "../images/drop.svg"
import search from "../images/search.svg"
import list from "../images/list.svg"
import search_sm from "../images/search_sm.svg"
import Searchbox from './Searchbox'

function Navbar() {
    const [showSearchBox, setShowSearchBox] = useState(false)
    return (
        <div className="bg-navbar w-full h-14 md:h-16 text-white flex items-center justify center">
            <div className="container px-12 xl:px-28 mx-auto  flex items-center ">
                 <img  className="block xl:hidden py-1 px-4 hover:bg-gray-800 rounded-md cursor-pointer" src={menu}/>
                 <img  src={logo}/>
                 <ul className="flex flex-1 h-full">
                    <li className="hidden xl:flex ml-4  p-1 font-medium items-center hover:bg-gray-800 rounded-md cursor-pointer">
                        <img  className="mr-3" src={menu}/> Menu
                    </li>
                    <li className="hidden md:flex items-center h-full w-10/12 xl:w-7/12 ml-4 bg-white  flex rounded-md">
                        <span className="flex py-1 pl-2 h-full font-bold bg-white rounded-l-md text-gray-500 border-r-2">All <img  className="" src={drop}/></span> 
                        <input type="text" className="p-1 w-11/12" placeholder="Search IMDb ..."/>
                        <span className="p-1 px-2 justify-self-end"> <img  className="" src={search}/></span> 
                    </li>
                    <li className="hidden xl:block mx-4 p-1 px-2 font-extrabold hover:bg-gray-800 rounded-md cursor-pointer">IMDbpro</li>
                    <span className="hidden xl:block h-8 xl:border-2 xl:border-gray-300"/>
                    <li className="hidden xl:flex mx-4 p-1 px-2  font-medium hover:bg-gray-800 rounded-md cursor-pointer"> <img  className="mr-1" src={list}/>WatchList</li>
                    <span className="block md:hidden ml-auto p-2 mr-3 justify-self-end hover:bg-gray-800 rounded-full" onClick={()=>setShowSearchBox(!showSearchBox)}> <img  className="" src={search_sm}/></span> 
                    {(showSearchBox)&&<Searchbox show={setShowSearchBox}/>}
                    <li className="md:ml-auto xl:ml-0 py-1 px-2 font-medium hover:bg-gray-800 rounded-md cursor-pointer ">Sign in</li>
                    <li className="md:ml-auto xl:ml-0 py-1 px-2  font-medium hover:bg-gray-800 rounded-md cursor-pointer ">EN</li>
                 </ul>

            </div>
        </div>
    )
}

export default Navbar
