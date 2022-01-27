import React from 'react'

function Searchbox({show}) {
    return (
        <div className="absolute h-14 w-full top-0 left-0  bg-navbar">
            <input type="text" className="w-11/12 h-full py-1 px-3 bg-navbar border-none outline-none" placeholder="Search IMDb..."/>
            <span className="p-1 text-gray-400 cursor-pointer " onClick={()=>show(false)}>X</span>
        </div>
    )
}

export default Searchbox
