import Link from "next/link"
import "./components.css";

export default function Nav(){
    return(
        <nav className="items-center text-[1.4rem] flex fixed w-full flex-wrap  ]" >
                <div className="pl-[2rem]">
                    <Link href="/"> Home</Link>
                </div>

                <div className="pr-[2rem]" style={{display:"flex",gap:"5px"}}>
                    <Link href="https://github.com/dAikub"> Github</Link>
                </div>
        </nav>
    )
}