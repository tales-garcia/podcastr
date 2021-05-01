import Image from 'next/image';
import React from 'react';
import { usePlayer } from '../../contexts/player';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { Container, Progress, Buttons, PlayButton, EmptyPlayer, CurrentEpisodes, EmptySlider } from './styles';

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
                    <div>{currentEpisode ? (
                            <Slider
                                trackStyle={{ backgroundColor: '#04d361' }}
                                railStyle={{ backgroundColor: '#9f75ff' }}
                                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
                            />
                        ) : <EmptySlider />}</div>
                    <span>00:00</span>
                </Progress>
                <Buttons>
                    <button type="button" disabled={!currentEpisode}>
                        <img src="/shuffle.svg" alt="Embaralhar" />
                    </button>
                    <button type="button" disabled={!currentEpisode}>
                        <img src="/play-previous.svg" alt="Tocar anterior" />
                    </button>
                    <PlayButton type="button" disabled={!currentEpisode}>
                        <img src="/play.svg" alt="Tocar" />
                    </PlayButton>
                    <button type="button" disabled={!currentEpisode}>
                        <img src="/play-next.svg" alt="Tocar próxima" />
                    </button>
                    <button type="button" disabled={!currentEpisode}>
                        <img src="/repeat.svg" alt="Repetir" />
                    </button>
                </Buttons>
            </footer>
        </Container>
    );
}

export default Player;