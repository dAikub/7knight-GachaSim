"use client";
import { useState } from "react";
import Image from "next/image";
import { Char } from "../lib/char/char";
import { CharReceive } from "../lib/roll/roll";
import { relative } from "path";

export default function RollPage() {

  const base = { id: 0, name: "Pooki", rarity: "", img: "/char/chara_264.png" };
  const [characters, setCharacters] = useState<Char[]>(Array(5).fill(base));
  const [final, setFinal] = useState<Char | null>();
  const [gold,setGold] = useState<number>(0)
  const [showText, setShowText] = useState<boolean>(true)

  // ฟังก์ชันเรียก API เพื่อสุ่มใหม่
  async function fetchRoll5() {
    setFinal(null)
    const res = await fetch("/api/roll");
    const data = await res.json();
    setCharacters(data.characters);
    setGold(gold+300000)
    setShowText(true)
    
  }

  return (
    <div style={{position:"relative"}}>

      <div className="status m-[5rem_4rem_3rem_4rem] lg:m-[9rem_17rem_6rem_17rem] sm:m-[5rem_5rem_3rem_5rem]">
        <h1 className="text-[12px] lg:text-3xl sm:text-[16px]" >Total Spend: {gold.toLocaleString()} Gold</h1>
        <h1 className="text-[12px] lg:text-3xl sm:text-[16px]">Base on 800 point</h1>
      </div>
      
      <div className="character-receivce mt-[50px] ">
        {final ? (
          <div className={final.rarity==="rare" ? `character-reveal-wrapper rarity-${final.rarity}
            `: "character-reveal-wrapper-fire"}>
            {<Image className="w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[10rem]  lg:w-[12.01rem] lg:h-[12.01rem]" src={final.img} alt="" width={120} height={120} ></Image>}
          </div>
        ) : (
          <p></p>
        )}
      </div>

      <ul>
        {characters.map((char,idx) => (
          <li key={idx}>
            <div className={`character-reveal-wrapper rarity-${char.rarity}`} >
              <div className="img-scale">
                <Image src={char.img} alt="" fill style={{objectFit:"cover"}}></Image>
              </div>
            </div>
          </li>
        ))}
      </ul>




      <div className="show-percents">
        <h1 style={{ display: showText ? "block" : "none" }}>37.12%</h1>
        <h1 style={{ display: showText ? "block" : "none" }}>21.6%</h1>
        <h1 style={{ display: showText ? "block" : "none" }}>18%</h1>
        <h1 style={{ display: showText ? "block" : "none" }}>14.4%</h1>
        <h1 style={{ display: showText ? "block" : "none" }}>8.88%</h1>
      </div>




      <div className="flex item-center justify-center gap-36" style={{height:"150%"}}>
        <button onClick={fetchRoll5} className="lg:text-[1.8rem] lg:w-[30.01rem] sm:text-[1.2rem] sm:w-[18rem]">Dark Predictions</button>
        <button className="lg:text-[1.8rem] lg:w-[30.01rem] sm:text-[1.2rem] sm:w-[18rem]"
          disabled={characters.length === 0}
          onClick={() => CharReceive(characters,setCharacters,setFinal,setShowText)}
        >
          Black Magic Experimentation
        </button>
      </div>
    </div>
  );
}
