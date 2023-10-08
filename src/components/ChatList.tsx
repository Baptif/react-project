import styled from "@emotion/styled"
import { UserInterface } from "../models/UserInterface"
import { useChat } from "../hooks/useChat"
import ChatInput from "./ChatInput"
import ChatItem from "./ChatItem"
import { useState } from "react"

type Props = {
    user: UserInterface,
    profile: UserInterface
}

const ChatList = ({user, profile}: Props) => {
    const { chats, loading } = useChat(user, profile)
    const [newMessage, setNewMessage] = useState('')

    const chatListContainer = document.getElementById("chatListContainer");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessage(event.target.value)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            chats?.push({id: chats.length + 1, message: newMessage, userId: profile.id})
            setNewMessage('')

            if(chatListContainer){
                setTimeout(() => {
                    chatListContainer.scrollTop = chatListContainer.scrollHeight
                }, 50)
            }
        }
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <ChatListContainer id="chatListContainer">
                {chats?.map(({id, message, userId}) => (
                    <div key={id}>
                        {(userId === profile.id) ? (
                            <ChatItem user={profile} message={message}/>
                        ) : (
                            <ChatItem user={user} message={message}/>
                        )}
                    </div>
                ))}
            </ChatListContainer >
            <ChatInput message={newMessage} onChange={handleChange} onKeyDown={handleKeyDown}/>
        </div>
    )
}

const ChatListContainer = styled.div`
    height: 85vh;
    overflow-y: auto;
    overflow-anchor: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`

export default ChatList