import Link from "next/link";
import "./homepage.css"
import Image from "next/image";

export default function Page(){


    return(
        <div>


            <div style={{position:"relative",width:"100%",height:"450px"}}>
              <Image className="image-fade" src="/banner2.jpg" alt="" fill></Image>

                <div className="youtube">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/W-luC-oW-M0?si=QqTLz0PBcYPYx7BU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              
            </div>


            


            <div style={{marginLeft:"20px"}}>
                <Link href="/gacha">Gacha</Link>
                <Link href="/debug">Debug</Link>
            </div>
        </div>
    )
}


