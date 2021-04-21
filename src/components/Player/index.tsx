import React from 'react';

import { Container, Progress, Buttons, PlayButton } from './styles';

const Player: React.FC = () => {
    return (
        <Container empty={1}>
            <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>Tocando agora</strong>
            </header>

            <div>
                <strong>Selecione um podcast para ouvir</strong>
            </div>

            <footer>
                <Progress>
                    <span>00:00</span>
                    <div><div /></div>
                    <span>00:00</span>
                </Progress>
                <Buttons>
                    <button type="button">
                        <img src="/shuffle.svg" alt="Embaralhar" />
                    </button>
                    <button type="button">
                        <img src="/play-previous.svg" alt="Tocar anterior" />
                    </button>
                    <PlayButton type="button">
                        <img src="/play.svg" alt="Tocar" />
                    </PlayButton>
                    <button type="button">
                        <img src="/play-next.svg" alt="Tocar próxima" />
                    </button>
                    <button type="button">
                        <img src="/repeat.svg" alt="Repetir" />
                    </button>
                </Buttons>
            </footer>
        </Container>
    );
}

export default Player;