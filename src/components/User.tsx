import styled from "@emotion/styled"

type Props = {
    avatar: string
    name: string
    onClick?: () => void
}

const User = ({avatar, name, onClick}: Props) => {
    return (
        <Container onClick={onClick}>
            <Avatar src={avatar} alt={name} />
            <div>{name}</div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap:0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;
    border-radius: 0.5rem;
    &:hover {
        background-color: #36393e;
    }
`

const Avatar = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
`

export default User