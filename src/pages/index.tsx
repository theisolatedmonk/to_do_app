import { Card } from "@/components/Card";
import checkIcon from "@/images/icon-check.svg";
import {TiTick} from "react-icons/ti"


export default function Todo() {
  return (
    <main className="flex bg-no-repeat  bg-top bg-[url('../images/bg-desktop-light.jpg')] min-h-screen flex-col items-center justify-between p-24">
      <div className=" items-center  flex text-sm lg:flex">
        <div className="	">
        <div className="flex justify-between">
      <div className="flex gap-2 items-start">
        <div> <TiTick className="text-white text-2xl stroke-blue-500"/></div>
        <div className="rounded-md h-4 w-36">hello......</div>
      </div>
    </div>
        </div>
      </div>
    </main>
  );
}
