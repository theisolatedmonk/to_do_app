import Image from "next/image";
import React from "react";

type ParaType = {
  inputTxt: string;
  svgImg : string;
  
}

export  function Card(props: ParaType) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-start">
        <div> <Image src={props.svgImg} alt="svgIcons" /></div>
        <div className="rounded-md h-4 w-36">{props.inputTxt}</div>
      </div>
      <div><img src={props.svgImg} alt="" /></div>
    </div>
  );
}

