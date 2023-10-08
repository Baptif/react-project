import { useState } from "react";
import { UserInterface } from "../models/UserInterface";
import { createUser } from "../services/api";
import { useMountEffect } from "./useMountEffect";

export const useProfile = () => {
    const [loading, setLoading] = useState(true)
    const [profile, setProfile] = useState<UserInterface>()

    useMountEffect(() => {
        (async () => {
            const nextProfile = createUser(111)

            setProfile(nextProfile);
            setLoading(false);
        })()
    })

    return { profile, loading }
}