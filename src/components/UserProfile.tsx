import styled from "@emotion/styled"
import { AiFillAudio } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";

type Props = {
    avatar: string
    name: string
    onClick?: () => void
}

const UserProfile = ({avatar, name, onClick}: Props) => {
    return (
        <Container onClick={onClick}>
            <Avatar src={avatar} alt={name} />
            <div>{name}</div>
            <AiFillAudio />
            <BsFillGearFill />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap:1rem;
    padding: 0.8rem;
    cursor: pointer;
    background-color: #1e2124;
`

const Avatar = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
`

export default UserProfile