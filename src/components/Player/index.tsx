import Image from 'next/image';
import React from 'react';
import { usePlayer } from '../../contexts/player';

import { Container, Progress, Buttons, PlayButton, EmptyPlayer, CurrentEpisodes } from './styles';

const Player: React.FC = () => {
    const { episodesPlayList, selectedEpisodeIndex } = usePlayer();

    const currentEpisode = episodesPlayList[selectedEpisodeIndex];

    return (
        <Container empty={Number(!currentEpisode)}>
            <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>Tocando agora</strong>
            </header>

            {!!currentEpisode ?
                (
                    <CurrentEpisodes>
                        <Image src={currentEpisode.thumbnail} objectFit="cover" width={592} height={592} />
                        <strong>{currentEpisode.title}</strong>
                        <span>{currentEpisode.members}</span>
                    </CurrentEpisodes>
                )
                :
                (
                    <EmptyPlayer>
                        <strong>Selecione um podcast para ouvir</strong>
                    </EmptyPlayer>
                )
            }

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