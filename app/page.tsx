import Link from "next/link";
import "./homepage.css"
import Image from "next/image";

export default function Page(){


    return(
        <>

            <div className="youtube   lg:top-[10rem]; sm:top-[50%] sm:transform sm:-translate-y-1/2">
                <iframe width="560" height="315" allow="autoplay; encrypted-media; fullscreen" allowFullScreen  src="https://www.youtube.com/embed/W-luC-oW-M0?si=QqTLz0PBcYPYx7BU&autoplay=1&mute=1&loop=1" title="YouTube video player" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
            </div>
            <div style={{position:"relative",width:"100%",height:"45rem"}}>
              <Image className="image-fade" src="/banner2.jpg" alt="" fill></Image>
            </div>

            <Image className="mx-auto block w-400 h-160 sm:w-200 sm:h-80" src="/7k_logo.png" alt="" width={1000} height={200}></Image>
            {/* <div className="mt-16  border-red-300">
                
                <h2 className="text-center font-bold text-3xl">Overview</h2>
                <p className="text-center mt-12 mb-16"></p>
            </div> */}





            <div className="menu-container lg:gap-[8rem] sm:gap-[5rem] sm:mt-[3rem]">

                <div className="lg:w-[26.001rem] sm:w-[13.001rem] flex flex-col ">
                    <p className="lg:text-[3rem] sm:text-[1.5rem] break-all transform -skew-y-4 lg:mb-12 sm:m-[0_0_1.3rem_0] text-center">Mercure's Lab</p>
                    <Link href="/gacha" className="card border border-amber-500 lg:w-[26.001rem] lg:h-[46.001rem] sm:w-[13.001rem] sm:h-[23.001rem]" 
                    style={{ backgroundImage: "url('/homepage/Kyle7_box.webp')"}}>
                    </Link>
                </div>
                

                <div className="lg:w-[26.001rem] sm:w-[13.001rem] flex flex-col ">
                    <p className="lg:text-[3rem] sm:text-[1.5rem] break-all transform -skew-y-4 lg:mb-12 sm:m-[0_0_1.3rem_0] text-center">Summon Heros</p>
                    <div className="relative lg:w-[26.001rem] lg:h-[46.001rem] sm:w-[13.001rem] sm:h-[23.001rem]  ">
                        <Image className="transform -skew-y-4 opacity-20 border border-amber-500" src="/Fai.webp" alt="" fill style={{borderRadius:"15px",background:"#1b1b1b",objectFit:"fill"}}></Image>
                        <div className="overlay">
                            <h1 className="text-2xl sm:text-center">Comming soon</h1>
                        </div>
                    </div>
                </div>



                <div className="lg:w-[26.001rem] sm:w-[13.001rem] flex flex-col ">
                    <p className="lg:text-[3rem] sm:text-[1.5rem] break-all transform -skew-y-4 lg:m-[0_0_3rem_0] sm:m-[0_0_1.3rem_0] text-center">Fuse</p>
                    <div className="relative lg:w-[26.001rem] lg:h-[46.001rem] sm:w-[13.001rem] sm:h-[23.001rem]">
                        <Image className="transform -skew-y-4 opacity-20 border border-amber-500 " src="/homepage/Teo7_box.webp" alt="" fill style={{borderRadius:"15px",background:"#1b1b1b",objectFit:"fill"}}></Image>
                        <div className="overlay">
                            <h1 className="text-2xl sm:text-center">Comming soon</h1>
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




