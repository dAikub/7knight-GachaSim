import Link from "next/link";
import "./homepage.css"
import Image from "next/image";

export default function Page(){


    return(
        <>

            <div className="youtube">
                <iframe width="560" height="315" allow="autoplay; encrypted-media; fullscreen" allowFullScreen  src="https://www.youtube.com/embed/W-luC-oW-M0?si=QqTLz0PBcYPYx7BU&autoplay=1&mute=1&loop=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
            </div>
            <div style={{position:"relative",width:"100%",height:"45rem"}}>
              <Image className="image-fade" src="/banner2.jpg" alt="" fill></Image>
            </div>

            <Image className="mx-auto block w-200 h-80" src="/7k_logo.png" alt="" width={1000/2} height={200/2}></Image>
            {/* <div className="mt-16  border-red-300">
                
                <h2 className="text-center font-bold text-3xl">Overview</h2>
                <p className="text-center mt-12 mb-16"></p>
            </div> */}







            <div className="menu-container">

                <div className="w-[260px] flex flex-col ">
                    <p className="text-4xl break-all transform -skew-y-4 mb-12 text-center">Mercure's Lab</p>
                    <Link href="/gacha" className="card border border-amber-500" 
                    style={{ backgroundImage: "url('/homepage/Kyle7_box.webp')" }}>
                    </Link>
                </div>
                

                <div className="w-[260px] flex flex-col ">
                    <p className="text-4xl break-all transform -skew-y-4 mb-12 text-center">Summon Heros</p>
                    <div className="relative w-[260px] h-[460px]">
                        <Image className="transform -skew-y-4 opacity-20 border border-amber-500" src="/Fai.webp" alt="" fill style={{borderRadius:"15px",background:"#1b1b1b",objectFit:"fill"}}></Image>
                        <div className="overlay">
                            <h1 className="text-2xl">Comming soon</h1>
                        </div>
                    </div>
                </div>



                <div className="w-[260px] flex flex-col ">
                    <p className="text-4xl break-all transform -skew-y-4 mb-12 text-center">Fuse</p>
                    <div className="relative w-[260px] h-[460px]">
                        <Image className="transform -skew-y-4 opacity-20 border border-amber-500 " src="/homepage/Teo7_box.webp" alt="" fill style={{borderRadius:"15px",background:"#1b1b1b",objectFit:"fill"}}></Image>
                        <div className="overlay">
                            <h1 className="text-2xl">Comming soon</h1>
                        </div>
                    </div>
                </div>





                {/* <Link href="/debug" className="card" 
                style={{ backgroundImage: "url('/Fai.webp')",opacity:"0.15"  }}>
                    <div className="overlay">
                        <h2>Comming soon</h2>
                    </div>
                </Link>

                <Link href="/game/2xko" className="card" 
                style={{ backgroundImage: "url('/Kyle.webp')",opacity:"0.15"}}>
                    <div className="overlay">
                        <h2>Comming soon</h2>
                    </div>
                </Link> */}


            </div>




        </>
    )







}




