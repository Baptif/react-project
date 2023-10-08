import styled from "@emotion/styled"
import { Avatar } from "./StyleAvatarText"
import { UserInterface } from "../models/UserInterface"

type Props = {
    user: UserInterface,
    message: string
}

const ChatItem = ({user, message}: Props) => {
    const maDate = new Date().toLocaleDateString("fr") 

    return (
        <ProfileDiv>
            <Avatar src={user.avatar} alt={user.name} />
            <ChatDiv>
                <div><strong>{user.name}</strong>&nbsp;<small>{maDate}</small></div>
                <div>{message}</div>
            </ChatDiv>
        </ProfileDiv>
    )
}

const ProfileDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
`

const ChatDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export default ChatItem