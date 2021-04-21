import styled from 'styled-components';

interface ContainerProps {
    empty: number;
}

export const Container = styled.aside<ContainerProps>`
    width: 26.5rem;
    height: 100vh;
    padding: 3rem 4rem;
    background: ${({ theme }) => theme.purple500};
    color: ${({ theme }) => theme.white};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    header {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    strong {
        font-family: Lexend, sans-serif;
        font-weight: 600;
    }

    > div {
        width: 100%;
        height: 20rem;
        border-radius: 1.5rem;
        background: 
            linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%),
            url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='1.5rem' ry='1.5rem' stroke='%239F75FFFF' stroke-width='1.5' stroke-dasharray='16' stroke-dashoffset='100' stroke-linecap='square'/%3e%3c/svg%3e");
 
        padding: 4rem;
        text-align: center;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    footer {
        align-self: stretch;

        opacity: ${({ empty }) => empty ? 0.6 : 1};
    }
`;

export const Progress = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.875rem;

    span {
        display: inline-block;
        width: 4rem;
        text-align: center;
    }

    > div {
        flex: 1;


        > div {
            width: 100%;
            height: 4px;
            background: ${({ theme }) => theme.purple300};
            border-radius: 2px;
        }
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    gap: 1.5rem;

    button {
        background: transparent;
        font-size: 0;
    }
`;

export const PlayButton = styled.button`
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.purple400} !important;
`;