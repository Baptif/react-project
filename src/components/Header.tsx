import styled from "@emotion/styled"
import { Avatar } from "./StyleAvatarText"

type Props = {
    avatar?: string
    name?: string
}

const Header = ({avatar, name} : Props) => {
    return (
        <HeaderDiv>
            <SearchDiv>
                <input type="text" placeholder="Search.." />
            </SearchDiv>
            <Container>
                {avatar && name && (
                <>
                    <Avatar src={avatar} alt={name} />
                    <strong>{name}</strong>
                </>
                )}
            </Container>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    width: 100vw;
    height: 6.5vh;
    box-shadow: 0 1px 1px 0px #16141e;
    background-color: var(--background);
    display: flex;
`

const SearchDiv = styled.div`
    width:16rem;
    height: 100%;
    background-color: var(--secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    & input {
        border-radius: 0.5rem;
        background-color: var(--background);
        border: none;
        width: 100%;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
`

const Container = styled.div`
    display: flex;
    align-items: center;
    gap:0.5rem;
    padding: 0.5rem;
`

export default Header