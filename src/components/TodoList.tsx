'use client'
import React, { useState } from 'react'
import { Card } from "@/components/Card";
import checkIcon from "@/images/icon-check.svg";
import { TiTick } from "react-icons/ti";
import moonImage from "@/images/icon-moon.svg";
import Image from "next/image";
import crossImage from "@/images/icon-cross.svg";
import checkImage from "@/images/icon-check.svg";


type Props = {}

export default function TodoList({}: Props) {
const [activity, setActivity] = useState('')
const [listData, setlistData] = useState([])
const [style, setStyle] = useState("")
const changeStyle = () => {
    setStyle("line-through");
  };

function addActivity(){
    setlistData((listData)=>{
        const updatedlist= [...listData, activity]
        setActivity('')
        return updatedlist
    })
    
}
function removeActivity(index){
    const updatedListData= listData.filter((elem,id)=>{
        return index!=id;})
        setlistData(updatedListData)
}

function removeAll(){
    setlistData([]);
}


  return (
    <div className=" w-full items-center gap-3 font-sans text-[hsl(235,19%,35%)] flex flex-col text-sm lg:flex bg-green-500 p-40">
    <div className="flex justify-between   h-12 items-center p-1 w-full">
      <div className=" font-bold  text-white text-2xl ">TODO</div>
      <div>
        <Image src={moonImage} alt="" />
      </div>
    </div>
    <div className=" flex flex-col gap-4 shadow-md w-full ">
      <div className="flex justify-between ">
        <div className="flex gap-5 p-2 items-center  bg-white  h-10 rounded-sm w-full">
          <div className="hover:ring-1 flex items-center justify-center h-4 w-4 rounded-full ring-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)] ">

            <button className="h-4 w-4  rounded-full focus:bg-gradient-to-r from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)] " onClick={addActivity} >
              <Image
                className=" rounded-full h-4 w-4 p-1  shadow-md"
                src={checkImage}
                alt=""
              />
            </button>

          </div>
          <input
            type="text" value={activity} onChange={(e)=>setActivity(e.target.value)}
            className=" h-full w-full text-lg   outline-none "
          />
        </div>
      </div>
      <div className="flex flex-col shadow-sm gap-0">
      {listData!=[] && listData.map((data, index) => {

return (
    <div className="flex">
    <div className="flex gap-2 p-2 items-center border-b  bg-white w-full h-10 rounded-sm">
      <div className="hover:ring-1 flex items-center justify-center h-4 w-4 rounded-full ring-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)]  ">
        <button className="h-4 w-4  rounded-full focus:bg-gradient-to-r from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)] "  onClick={()=>changeStyle((index))}>
          <Image
            className=" rounded-full h-4 w-4 p-1  shadow-md"
            src={checkImage}
            alt=""
          />
        </button>
      </div>
     
      <div className={` ${style} h-full w-full  outline-none  text-lg flex items-center
      
`}>
        Task:- 
        {listData}
      </div>
      <button onClick={ () => removeActivity(index)} className="">
        <Image className="h-3 w-3 " src={crossImage} alt="" />
      </button>
    </div>
  </div>
)
})}
{listData.length>=1 &&
<button  onClick={removeAll} className=' bg-red-500 text-center p-4 font-bold text-4xl'>Remove Alll</button>} 
        <div className="flex gap-2 justify-between p-2 text-sm items-center  bg-white  h-8 rounded-sm shadow-md hsl(236,9%,61%)">
          <div className="">5 item left</div>
          <div className=" flex gap-3 ">
            <div>All</div>
            <div>Active</div>
            <div>Completed</div>
          </div>
          <div>Clear Completed</div>
        </div>
      </div>
    </div>
    <div className=" font-sans font-semibold text- text-sm">
      Drag and drop to reader list
    </div>
    
  </div>  )
}