import Link from "next/link"
import "./components.css";

export default function Nav(){
    return(
        <nav>
                <div>
                    <Link href="/"> Home</Link>
                </div>

                <div style={{display:"flex",gap:"5px"}}>
                        
                        <Link href="https://github.com/dAikub"> Github</Link>
                </div>
        </nav>
    )
}