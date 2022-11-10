import { useState } from "react"
import { FooterMain } from "./footerStyled"
import mic from "../assets/microphone.svg"
import smile from "../assets/smiley.svg"
import paperclip from "../assets/paperclip.svg"

function Footer(props) {
   

    const [message, setMessage] = useState("");
    
    function onChangeInput(event) {
        setMessage(event.target.value)
    }

    function oneKeyDownInput(event) {
        if (event.key === "Enter") {
           
            const novaMensage = [...props.messages]

            const objetoMensagem = {
                nomeDoAutor:props.person,
                mensagemDoAutor:message
            }
            
            novaMensage.push(objetoMensagem)

           
            props.setMessages(novaMensage)

            setMessage("")
        }
    }

    return (
        <FooterMain>
            <div>
                <a href="#">
                    <img src={smile} alt="smile icon" />
                </a>

                <input
                    type={"text"}
                    value={message}
                    onChange={onChangeInput}
                    onKeyDown={oneKeyDownInput}
                />

                <a href="#">
                    <img src={paperclip} alt="paperclip icon" />
                </a>
            </div>
            <div>
                <a href="#">
                    <img src={mic} alt="microfone" />
                </a>
            </div>
        </FooterMain>
    )
}

export default Footer
