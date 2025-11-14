"use client";
import { useState } from "react";
import Image from "next/image";
import { Char } from "../lib/char/char";
import { CharReceive } from "../lib/roll/roll";
import { relative } from "path";

export default function RollPage() {
  const [characters, setCharacters] = useState<Char[]>([]);
  const [final, setFinal] = useState<Char | null>();
  const [gold,setGold] = useState<number>(0)

  // ฟังก์ชันเรียก API เพื่อสุ่มใหม่
  async function fetchRoll5() {
    setFinal(null)
    const res = await fetch("/api/roll");
    const data = await res.json();
    setCharacters(data.characters);
    setGold(gold+100000)
    
  }

  return (
    <div style={{position:"relative"}}>


      <div className="status">
        <h1>Total Spend: {gold.toLocaleString()} Gold</h1>
        <h1></h1>
      </div>
      <div className="character-receivce">
        {final ? (
          <div className={final.rarity==="rare" ? `character-reveal-wrapper rarity-${final.rarity}
            `: "character-reveal-wrapper-fire"}>
            {<Image src={final.img} alt="" width={100} height={100} ></Image>}
          </div>
        ) : (
          <p></p>
        )}
      </div>

      <ul className="min-h-[50px]">
        {characters.map((char, idx) => (
          <li key={idx}>
            <div className={`character-reveal-wrapper rarity-${char.rarity}`} >
              <Image src={char.img} alt="" width={100} height={100}></Image>
            </div>
          </li>
        ))}
      </ul>




      <div style={{height:"150%"}}>
        <button onClick={fetchRoll5}>Roll 5 ใหม่</button>
        <button
          disabled={characters.length === 0}
          onClick={() => CharReceive(characters,setCharacters,setFinal)}
        >
          Final Roll
        </button>
      </div>
    </div>
  );
}
