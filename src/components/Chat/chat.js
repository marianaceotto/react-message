import { MainChatBox,Message } from "./chatStyled"
import tickGreen from "../../assets/tick-green-double.svg"


function ChatBox(props) {

     //Função para deletar mensagem
     function DeletaMensagem(idMensagem){
        if (window.confirm("Deseja deletar a mensagem? ")){
            const apagaMensagem = props.messages.filter((mensagem)=>{
                if(mensagem.idDoAutor !== !idMensagem){
                    return mensagem
                }
            })
            props.setMessages(apagaMensagem)
        }
    }

  
    const mostrarMensagem = props.messages.map((message,index)=>{
        return(
            <Message 
                key={index}
                autor={message.nomeDoAutor}
                onDoubleClick={()=> DeletaMensagem(message.idDoAutor)}
            >
                <h1>{message.nomeDoAutor}</h1>
                <div>
                    <p>{message.mensagemDoAutor}</p>
                    <div>
                        <img src={tickGreen} alt="ticket"/>
                    </div>
                    <p>{message.horario}</p>
                </div>
            </Message>
        )
    })

    return (
        <MainChatBox>
            {mostrarMensagem}
        </MainChatBox>
    )
}

export default ChatBox
