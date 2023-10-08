import { useEffect, useState } from "react";
import { getChat } from "../services/api";
import { ChatInterface } from "../models/ChatInterface";
import { UserInterface } from "../models/UserInterface";

export const useChat = (user: UserInterface, profile: UserInterface) => {
    const [loading, setLoading] = useState(true);
    const [chats, setChats] = useState<ChatInterface[]>([])

    useEffect(() => {
        (async () => {
            setLoading(true)
            const chats = await getChat(user, profile)

            setChats(chats)
            setLoading(false)
        })();
    }, [user]);

    return { chats, loading }
}