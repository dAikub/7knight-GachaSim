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


      <div className="status">
        <h1 className="text-3xl">Total Spend: {gold.toLocaleString()} Gold</h1>
        <h1 className="text-3xl">Base on 800 point</h1>
      </div>
      
      <div className="character-receivce">
        {final ? (
          <div className={final.rarity==="rare" ? `character-reveal-wrapper rarity-${final.rarity}
            `: "character-reveal-wrapper-fire"}>
            {<Image className="w-[12.01rem] h-[12.01rem]" src={final.img} alt="" width={120} height={120} ></Image>}
          </div>
        ) : (
          <p></p>
        )}
      </div>

      <ul>
        {characters.map((char,idx) => (
          <li key={idx}>
            <div className={`character-reveal-wrapper rarity-${char.rarity}`} >
              <Image className="w-[12.rem] h-[12.rem]" src={char.img} alt="" width={120} height={120}></Image>
            </div>
          </li>
        ))}
      </ul>
      <div className="show-percents text-[1.5rem]">
        <h1 style={{ display: showText ? "block" : "none" }}>37.12%</h1>
        <h1 style={{ display: showText ? "block" : "none" }}>21.6%</h1>
        <h1 style={{ display: showText ? "block" : "none" }}>18%</h1>
        <h1 style={{ display: showText ? "block" : "none" }}>14.4%</h1>
        <h1 style={{ display: showText ? "block" : "none" }}>8.88%</h1>
      </div>




      <div className="flex item-center justify-center gap-36" style={{height:"150%"}}>
        <button onClick={fetchRoll5} className="  text-[1.8rem] w-[30.01rem]">Dark Predictions</button>
        <button className="text-[1.8rem] w-[30.01rem]"
          disabled={characters.length === 0}
          onClick={() => CharReceive(characters,setCharacters,setFinal,setShowText)}
        >
          Black Magic Experimentation
        </button>
      </div>
    </div>
  );
}
