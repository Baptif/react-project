import styled from "@emotion/styled"
import { UserInterface } from "../models/UserInterface"
import User from "./User"

type Props = {
    users: UserInterface[],
    onClick: (user: UserInterface) => void
}

const UserList = ({users, onClick}: Props) => {
    return(
        <UsersListe>
        {users.map(({name, avatar, id}) => (
            <User 
                key={id} 
                name={name}
                avatar={avatar} 
                onClick={() => onClick({name,avatar,id})}
            />
        ))}
        </UsersListe>
    )
}

const UsersListe = styled.div`
  margin: 10px;
`

export default UserList