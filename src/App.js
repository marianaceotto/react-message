import { useState } from "react";
import { Main } from "./mainStyled";
import Chat from "./components/Chat/chat";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

function App() {

 
  const [messages, setMessages] = useState([])
  const [person, setPerson] = useState("")

  
  return (
    <>

    <Main>
      <Header
        person={person}
        setPerson={setPerson}
      />
      <Chat 
        person={person}
        messages={messages}
      />
      <Footer 
        person={person}
        messages={messages} 
        setMessages={setMessages}
      />

    </Main>
    </>
  );
}

export default App;