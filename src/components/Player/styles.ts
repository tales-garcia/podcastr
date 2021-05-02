import styled, { css } from 'styled-components';

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

    footer {
        align-self: stretch;

        opacity: ${({ empty }) => empty ? 0.6 : 1};
    }
`;

export const EmptyPlayer = styled.div`
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
`;

export const CurrentEpisodes = styled.div`
    text-align: center;

    img {
        border-radius: 1.5rem;
    }

    strong {
        display: block;
        margin-top: 2rem;
        font: 600 1.5rem Lexend, sans-serif;
        line-height: 1.75rem;
    }

    span {
        display: block;
        margin-top: 1rem;
        opacity: 0.6;
        line-height: 1.5rem;
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
        transition: filter .2s;

        &:disabled {
            cursor: default;
            opacity: 0.5;
        }

        :hover:not(:disabled) {
            filter: brightness(0.8);
        }
    }
`;

export const PlayButton = styled.button`
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.purple400} !important;


    :hover:not(:disabled) {
        filter: brightness(0.95) !important;
    }
`;

export const EmptySlider = styled.div`
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.purple300};
    border-radius: 2px;
`;

export const RepeatButton = styled.button<{ isActive: number; }>`
    ${({ isActive }) => isActive && css`
        filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
        :hover:not(:disabled) {
            filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg) brightness(0.8) !important;
        }
    `}
`;