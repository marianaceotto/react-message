import { MainChatBox,Message } from "./chatStyled"
import tickGreen from "../assets/tick-green-double.svg"


function ChatBox(props) {

  
    const mostraMensagem = props.messages.map((message,index)=>{
        return(
            <Message 
                key={index}
                autor={message.nomeDoAutor}
            >
                <h1>{message.nomeDoAutor}</h1>
                <div>
                    <p>{message.mensagemDoAutor}</p>
                    <div>
                        <img src={tickGreen} alt="ticket"/>
                    </div>
                </div>
            </Message>
        )
    })

    return (
        <MainChatBox>
            {mostraMensagem}
        </MainChatBox>
    )
}

export default ChatBox
