import { Card } from "@/components/Card";
import checkIcon from "@/images/icon-check.svg";
import { TiTick } from "react-icons/ti";
import  moonImage from "@/images/icon-moon.svg";
import Image from "next/image";
import crossImage from "@/images/icon-cross.svg";
import checkImage from "@/images/icon-check.svg";

export default function Todo() {
  return (
    <main className="flex bg-no-repeat  bg-top bg-[url('../images/bg-desktop-light.jpg')] min-h-screen flex-col items-center justify-center">
      <div className=" items-center gap-3 font-sans flex flex-col text-sm lg:flex">
        <div className="flex justify-between   w-96 h-12 items-center p-1 ">
          <div className=" font-bold  text-white text-2xl">TODO</div>
          <div>
            <Image src={moonImage} alt="" />
          </div>
        </div>
        <div className=" flex flex-col gap-4	">
          <div className="flex justify-between">
            <div className="flex gap-5 p-2 items-center  bg-white w-96 h-10 rounded-sm">
              
                <Image className="bg-black rounded-full h-4 w-4 p-1 shadow-md" src={checkImage} alt="" />
              <input
                type="text"
                className=" h-full w-full    outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col shadow-sm gap-0"> 
            <div className="flex">
            <div className="flex gap-2 p-2 items-center border-b  bg-white w-96 h-10 rounded-sm">
           <div className="hover:border flex items-center justify-center h-4 w-4 rounded-full border-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)]">
           <button className="h-4 w-4  rounded-full focus:bg-gradient-to-r from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)] ">
           <Image className=" rounded-full h-4 w-4 p-1  shadow-md" src={checkImage} alt="" />
           </button>
           </div>
              <div className=" h-full w-full  outline-none line-through">
                task 1
              </div>
              <div className="">
              <Image className="h-3 w-3 " src={crossImage} alt="" />
              </div>
            </div>
            </div>
            <div className="flex gap-2 justify-between p-2 text-[9px] items-center  bg-white w-96 h-8 rounded-sm shadow-sm">
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
        <div className=" text-xs">Drag and drop to reader list</div>
      </div>
    </main>
  );
}
