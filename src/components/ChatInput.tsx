import styled from "@emotion/styled"
import { AiOutlineSend, AiFillPlusCircle } from 'react-icons/ai';
import { PiSmileyXEyesBold } from 'react-icons/pi';

type Props = {
    message?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void,
}

const ChatInput = ({message, onChange, onKeyDown}: Props) => {
    return (
        <Container>
            <InputContainer>
                <AiFillPlusCircle size="2rem" color="var(--primary)" style={styleIcon} />
                <input type="text" placeholder="Envoyer un message..." value={message} onChange={onChange} onKeyDown={onKeyDown} />
                <PiSmileyXEyesBold size="2rem" color="var(--primary)" />
                <AiOutlineSend size="2rem" color="var(--primary)" />
            </InputContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 8.5vh;
`

const InputContainer = styled.div`
    border-radius: 0.5rem;
    background-color: var(--secondary);
    width: 60%;
    height: 3rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    & input {
        height: 90%;
        width: 80%;
        border-radius: 0.5rem;
        background-color: var(--secondary);
        border: none;
    }
    & input:focus{
        outline: none;
    }
`

const styleIcon = { marginLeft: "0.5rem"}

export default ChatInput