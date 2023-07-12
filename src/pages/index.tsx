import { Card } from "@/components/Card";
import checkIcon from "@/images/icon-check.svg";
import { TiTick } from "react-icons/ti";
import moonImage from "@/images/icon-moon.svg";
import Image from "next/image";
import crossImage from "@/images/icon-cross.svg";
import checkImage from "@/images/icon-check.svg";
import TodoList from "@/components/TodoList";

export default function Todo() {
  return (
    <main className="flex bg-no-repeat  bg-top bg-[url('../images/bg-desktop-light.jpg')] min-h-screen flex-col items-center justify-center">
    <TodoList/>
    </main>
  );
}
