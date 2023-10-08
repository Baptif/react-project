import styled from "@emotion/styled"

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap:0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;
    border-radius: 0.5rem;
    &:hover {
        background-color: var(--accent);
    }
`

export const Avatar = styled.img`
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 2.5rem;
`