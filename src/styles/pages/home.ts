import styled from 'styled-components';

export const Container = styled.main`
    padding: 0 4rem;
    height: calc(100vh - 6.5rem);
    overflow-y: scroll;

    h2 {
        margin-top: 3rem;
        margin-bottom: 1.5rem;
    }
`;

export const LatestEpisodes = styled.section`
    > ul {
        list-style: none;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;

        li {
            background: ${({ theme }) => theme.white};
            border: 1px solid ${({ theme }) => theme.gray100};
            padding: 1.25rem;
            border-radius: 1.5rem;
            position: relative;

            display: flex;
            align-items: center;

            div:first-child {
                width: 6rem;
                img {
                    width: 6rem;
                    height: 6rem;
                    border-radius: 1rem;
                }
            }

            > button {
                position: absolute;
                right: 2rem;
                bottom: 2rem;

                width: 2.5rem;
                height: 2.5rem;
                background: ${({ theme }) => theme.white};
                border: 1px solid ${({ theme }) => theme.gray100};
                border-radius: 0.675rem;
                font-size: 0;
                transition: filter 0.2s;

                img {
                    height: 1.5rem;
                    width: 1.5rem;
                }

                :hover {
                    filter: brightness(0.9);
                }
            }

            > div:not(:first-child) {
                flex: 1;
                margin-left: 1rem;

                a {
                    display: block;
                    color: ${({ theme }) => theme.gray800};
                    font-family: Lexend, sans-serif;
                    font-weight: 600;
                    text-decoration: none;
                    line-height: 1.4rem;

                    &:hover {
                        text-decoration: underline;
                    }
                }

                p {
                    font-size: 0.875rem;
                    margin-top: 0.5rem;
                    max-width: 70%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                span {
                    display: inline-block;
                    margin-top: 0.5rem;
                    font-size: 0.875rem;

                    & + span {
                        margin-left: 0.5rem;
                        padding-left: 0.5rem;
                        position: relative;

                        &::before {
                            content: "";
                            width: 4px;
                            height: 4px;
                            border-radius: 2px;
                            background-color: #DDD;
                            position: absolute;
                            left: 0;
                            top: 50%;
                            transform: translate(-50%, -50%);
                        }
                    }
                }
            }
        }
    }
`;

export const RemainingEpisodes = styled.section`
    padding-bottom: 2rem;

    table {
        width: 100%;

        th, td {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid ${({ theme }) => theme.gray100};
        }

        th {
            color: ${({ theme }) => theme.gray200};
            text-transform: uppercase;
            font: 500 0.75rem Lexend, sans-serif;
            text-align: left;
        }

        td {
            font-size: 0.875rem;

            img {
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 0.5rem;
            }

            a {
                color: ${({ theme }) => theme.gray800};
                font: 600 1rem Lexend, sans-serif;
                text-decoration: none;
                line-height: 1.4rem;

                :hover {
                    text-decoration: underline; 
                }
            }

            > button {
                width: 2rem;
                height: 2rem; 
                background: ${({ theme }) => theme.white};
                border: 1px solid ${({ theme }) => theme.gray100};
                border-radius: 0.5rem;
                font-size: 0;
                transition: filter 0.2s;

                img {
                    height: 1.25rem;
                    width: 1.25rem; 
                }

                :hover {
                    filter: brightness(0.9);
                }
            }
        }
    }
`;