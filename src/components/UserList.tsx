import styled from "@emotion/styled"
import { UserInterface } from "../models/UserInterface"
import UserItem from "./UserItem"

type Props = {
    users: UserInterface[],
    onClick: (user: UserInterface) => void
}

const UserList = ({users, onClick}: Props) => {
    return(
        <UsersListe>
        {users.map(({name, avatar, id}) => (
            <UserItem 
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