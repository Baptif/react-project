import styled from "@emotion/styled"
import { FaPhoneAlt } from "react-icons/fa"
import { BsCameraVideoFill } from "react-icons/bs"
import { TbPinnedFilled } from "react-icons/tb"
import { IoMdContact } from "react-icons/io"
import { BiHelpCircle } from "react-icons/bi"

type Props = {
    avatar?: string
    name?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Header = ({avatar, name, onChange} : Props) => {
    return (
        <HeaderDiv>
            <SearchDiv>
                <input type="text" placeholder="Rechercher dans vos amis.." onChange={onChange} />
            </SearchDiv>
            <ContainerLeft>
                {avatar && name && (
                <>
                    <AvatarSmall src={avatar} alt={name} />
                    <strong>{name}</strong>
                
                    <IconContainer>
                        <FaPhoneAlt size="1.4rem"/>
                        <BsCameraVideoFill size="1.4rem"/>
                        <TbPinnedFilled size="1.4rem"/>
                        <IoMdContact size="1.4rem"/>
                        <BiHelpCircle size="1.4rem"/>
                    </IconContainer>
                </>
                )}
            </ContainerLeft>
            <ContainerRight>
                <p>🔥DISCORD🔥</p>
            </ContainerRight>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    width: 100vw;
    height: 6.5vh;
    box-shadow: 0 1px 1px 0px #16141e;
    z-index:999;
    background-color: var(--background);
    display: flex;
`
const IconContainer = styled.div`
    margin-left: 25vw;
    display: flex;
    gap: 1rem;
`

const SearchDiv = styled.div`
    width:16rem;
    height: 100%;
    background-color: var(--secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    & input {
        padding-left: 0.5rem;
        height: 50%;
        width: 85%;
        border-radius: 0.3rem;
        background-color: var(--background);
        border: none;
    }
    & input:focus{
        outline: none;
    }
`

const ContainerLeft = styled.div`
    display: flex;
    align-items: center;
    gap:0.5rem;
    padding: 0.5rem;
`

const AvatarSmall = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
    margin-left: 1rem;
`

const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    gap:0.5rem;
    padding: 0.5rem;
    margin-left: auto;
    margin-right: 1rem;
`

export default Header