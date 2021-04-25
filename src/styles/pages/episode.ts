import styled from 'styled-components';

export const Container = styled.div`
    max-width: 45rem;
    padding: 2rem 3rem;
    margin: 0 auto;

    > div:first-child {
        position: relative;

        img {
            border-radius: 1rem;
        }

        button {
            width: 3rem;
            height: 3rem;
            border-radius: 0.75rem;
            position: absolute;
            z-index: 5;
            font-size: 0;
            transition: filter .2s;

            &:first-child {
                left: 0;
                top: 50%;
                background: ${({ theme }) => theme.purple500};
                transform: translate(-50%, -50%);
            }

            &:last-child {
                right: 0;
                top: 50%;
                background: ${({ theme }) => theme.green500};
                transform: translate(50%, -50%);
            }

            :hover {
                filter: brightness(0.9);
            }
        }
    }

    header {
        padding-bottom: 1rem;
        border-bottom: 1px solid ${({ theme }) => theme.gray100};

        h1 {
            margin-top: 2rem;
            margin-bottom: 1.5rem;
        }

        span {
            display: inline-block;
            font-size: 0.875rem;

            & + span {
                margin-left: 1rem;
                padding-left: 1rem;
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

    div:last-child {
        margin-top: 2rem;
        line-height: 1.675rem;
        color: ${({ theme }) => theme.gray800};

        p {
            margin: 1.5rem 0;
        }
    }
`;
