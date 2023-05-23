import phone from "../../assets/phone.svg"
import camera from "../../assets/video-cam.svg"
import pontinhos from "../../assets/pontinhos.svg"
import { MainHeader, MainPerson , Icons} from "./headerStyled"

function Header(props) {

  function onChangePerson(event){
    props.setPerson(event.target.value)
  }

  return (
    <MainHeader>
      <MainPerson>
        <img src="https://picsum.photos/200/300" alt="imagem perfil" />
        <div>
          <select value={props.person} onChange={onChangePerson}>
            <option value="">Selecione uma pessoa</option>
            <option value="me">Me</option>
            <option value="scooby">Scooby-Doo</option>
            <option value="salsicha">Salsicha</option>
            <option value="daphne">Daphne</option>
            <option value="velma">Velma</option>
            <option value="fred">Fred</option>
          </select>
          <p>Online</p>
        </div>
      </MainPerson>

      <Icons>
        <a><img src={phone} alt="phon" /></a>
        <a><img src={camera} alt="camera" /></a>
        <a><img src={pontinhos} alt="pontinhos" /></a>
      </Icons>

    </MainHeader>
  )
}

export default Header