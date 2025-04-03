import axios from 'axios'
import React, { useEffect, useState } from 'react'
 
// https://api.unsplash.com/photos/users/ashbot/likes?page=1
// https:/api.unsplash.com/search/photos?page=1&query=${searchVal}&client_id=${API_KEY}
const SearchApp = () => {
 
    const API_KEY = "m4YqvlAykbXufWN4ZSVT3uuUnzZAJKy_8jT79AcUOv4"

    const [search, setSearch] = useState("")
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    
    const handleSearch = (e) =>{
        setSearch(e.target.value)
    }
    
    const getData = ()=>{
        myFun(search)
    }
    
    
    const myFun = async(searchVal)=>{
        const get = await fetch(`https:/api.unsplash.com/search/photos?page=${page}&query=${searchVal}&client_id=${API_KEY}`)
        const jsonData = await get.json()
        setData(jsonData.results)
    }

    useEffect(()=>{
     myFun()
    },[page])
  return (


    <>
    <div className='flex flex-col w-screen   h-screen container'>
        <h1 className='text-black text-xl'>Image Search App</h1>
      <div className="inputs">
        <button className='cursor-pointer' onClick={() => setPage((prev) => prev + 1)}>Next</button>
        <input className='pl-2 pr-20 py-3  w-[50%] border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder='Search Images...' onChange={handleSearch}/>
        <button className='px-5 bg-blue-600 rounded-md py-3 font-medium ml-2 text-white' onClick={getData}>Search</button>
        </div>
        <div className=" p-10 images">
           {
            data.map((curVal, index)=>{
                return(
                    <div className='flex  gap-5 '>

                        <img  className='w-[50%]  border' src={curVal.urls.full} alt="" />
                    </div>
                )
            })
           }
        </div>
      
    </div>
    </>
  )
}

export default SearchApp
