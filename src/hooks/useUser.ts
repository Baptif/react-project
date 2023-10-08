import { useState } from "react";
import { UserInterface } from "../models/UserInterface";
import { getUsers } from "../services/api";
import { useMountEffect } from "./useMountEffect";

export const useUsers = () => {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState<UserInterface[]>([])

    useMountEffect(() => {
        (async () => {
            const users = await getUsers()

            setUsers(users)
            setLoading(false)
        })();
    })

    return { users, loading }
}