            

import Image from "next/image"
import {svenkChar} from "../lib/char/char"



export default function Page(){

    
    
    return(
        <>

            <div style={{backgroundColor:"lightblue"}}>
                {svenkChar.map((char,idx)=>(
                    <div key={idx} style={{marginTop:"50px"}}>
                        <Image src={char.img} alt="" width={100} height={100}></Image>
                        <p>{char.name}</p>
                        <p>{char.rarity}</p>
                        
                    </div>
                ))}
            </div>

        </>
            
            
            // <ul>
            //     {svenkChar.map((item)=>(
            //         <li key={item.id}> 
            //         <Image src={item.img} width={100} height={100} alt=""></Image> 
                    
            //         </li>

            //     ))}
            // </ul>
    )

}