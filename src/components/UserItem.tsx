import { Container, Avatar } from "./StyleAvatarText"

type Props = {
    avatar: string
    name: string
    onClick?: () => void
}

const UserItem = ({avatar, name, onClick}: Props) => {
    return (
        <Container onClick={onClick}>
            <Avatar src={avatar} alt={name} />
            <div>{name}</div>
        </Container>
    )
}

export default UserItem