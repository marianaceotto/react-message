import styled from "styled-components"


export const MainChatBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 16px;
    background-color: #D8D0C6
`

export const Message = styled.div`
    background-color:${props => props.autor === "me" ? "#61C554":"lightgray"};
    color:${props => props.autor === "me" ? "white":"black"};
    margin-left:${props => props.autor === "me" ? "auto":0};
    min-width: 80px;
    max-width: 300px;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 16px;
    
        h1 {
            font-weight: bold;
            font-size: 16px;
            padding-bottom: 4px;
        }
        
        div {
            display: flex;
            flex-direction: column;
            p:first-child {
                font-weight: 400;
                font-size: 16px;
                word-wrap: break-word;
            }
            
            p:last-child{
                font-size: 10px;
            }

            div {
                font-weight: 500px;
                font-size: 11px;
                color: #727272;
                margin-left: auto;
                
            img {
                width: 16px;
                margin-left: 4px;
            }
        }
}
`