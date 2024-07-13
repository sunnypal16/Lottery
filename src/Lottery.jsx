import { useState } from "react"
import { genticket,sum } from "./Helper";
import "./Lottery.css"
import Ticket from "./Ticket";


function Lottery ({n=4}){
    const [ticket, setTicket] = useState(genticket(n));

    let isWinnig = sum(ticket) === 15

    let buyTicket =()=>{
        setTicket(genticket(n))
    }

    return(
        
        <div className="body">
        <h1>Lottery</h1>
            <Ticket ticket={ticket}/>
        
        <button onClick={buyTicket}>Buy new Ticket</button>                  
        <h1>{isWinnig && "Congratulations, you won"}</h1> 
        
        </div>
    )
}

export default Lottery