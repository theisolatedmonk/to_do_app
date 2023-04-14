import { Card } from "@/components/Card";
import checkIcon from "@/images/icon-check.svg";
import { TiTick } from "react-icons/ti";
import myImage from "@/images/icon-moon.svg";
import Image from "next/image";

export default function Todo() {
  return (
    <main className="flex bg-no-repeat  bg-top bg-[url('../images/bg-desktop-light.jpg')] min-h-screen flex-col items-center justify-between p-24">
      <div className=" items-center  flex flex-col text-sm lg:flex">
        <div className="flex justify-between">
          <div>TODO</div>
          <div>
            <Image src={myImage} alt="" />
          </div>
        </div>
        <div className=" flex flex-col gap-4	">
          <div className="flex justify-between">
            <div className="flex gap-2 pl-2 items-center border border-black bg-white w-96 h-10 rounded-sm">
              <div className="rounded-full shadow-md">
                {" "}
                <TiTick className="text-black text-xl " />
              </div>
              <input
                type="text"
                className=" h-full w-full border   outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-0">
            <div className="flex gap-2 pl-2 items-center border border-black bg-white w-96 h-10 rounded-sm">
              <div className="rounded-full shadow-md">
                {" "}
                <TiTick className="text-black text-xl" />
              </div>
              <div className=" h-full w-full border text-center  outline-none">
                task 1
              </div>
            </div>
            <div className="flex gap-2 justify-between p-2 text-xs items-center border border-black bg-white w-96 h-10 rounded-sm ">
              <div className="">5item left</div>
              <div className=" flex ">
                <div>All</div>
                <div>Active</div>
                <div>Completed</div>
              </div>
              <div>Clear Completed</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
