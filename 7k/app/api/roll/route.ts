
import {svenkChar,Char,Rarity} from "../../lib/char/char"



const poolByRarity:Record<Rarity,Char[]> = {sven7Origin:[], legendary:[], rare:[]}

for (const item of svenkChar){
    poolByRarity[item.rarity].push(item)
}



const slot:Rarity[] = ["rare","legendary","legendary","legendary","sven7Origin"]


const allowedMapping:Record<Rarity,Rarity[]> = {
    sven7Origin:["sven7Origin","legendary","legendary"],
    legendary:["legendary","legendary","legendary","legendary","legendary","legendary","rare"],
    rare:["legendary","rare"]
}


function Roll1(r:Rarity){
    const allowedRare = allowedMapping[r]
    let pool:Char[] = []
    for (const eachRarity of allowedRare){
        pool = pool.concat(poolByRarity[eachRarity])

    }
    return pool[Math.floor(Math.random()*pool.length)]
}



 function Roll5(){
    const result = slot.map(r=>(Roll1(r)
    ))
    
    return result
}


export async function GET(){
    return new Response(JSON.stringify({"characters":Roll5()}))
    

    
}