import TicketNum from "./TicketNum";
import "./Ticket.css"

export default function Ticket({ticket}){
    return(
    
        <div className="Ticket">
        <h2>Ticket</h2>
        {ticket.map((sunny, idx)=>(
            <TicketNum num={sunny} key={idx} />
        ))}
        </div>
    
    );
}
