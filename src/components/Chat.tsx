import styled from "@emotion/styled"
import { UserInterface } from "../models/UserInterface"

type Props = {
    user?: UserInterface
}

const Chat = ({user}: Props) => {
    return (
        <ChatDiv>
            <h1>{user?.name}</h1>
        </ChatDiv>
    )
}

const ChatDiv = styled.div`
    
`

export default Chat