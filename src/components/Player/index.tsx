import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { usePlayer } from '../../contexts/player';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { Container, Progress, Buttons, PlayButton, EmptyPlayer, CurrentEpisodes, EmptySlider } from './styles';

const Player: React.FC = () => {
    const { episodesPlayList, selectedEpisodeIndex, isPlaying, toggleAudio, setIsPlaying, playNext, playPrevious } = usePlayer();
    const audioRef = useRef<HTMLAudioElement>(null);

    const currentEpisode = episodesPlayList[selectedEpisodeIndex];

    useEffect(() => {
        if (audioRef.current) audioRef.current[isPlaying ? 'play' : 'pause']();
    }, [isPlaying])

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

                {currentEpisode && <audio ref={audioRef} onPause={() => setIsPlaying(false)} onPlay={() => setIsPlaying(true)} src={currentEpisode.file.url} autoPlay />}

                <Buttons>
                    <button type="button" disabled={!currentEpisode}>
                        <img src="/shuffle.svg" alt="Embaralhar" />
                    </button>
                    <button type="button" disabled={!currentEpisode || !episodesPlayList[selectedEpisodeIndex - 1]} onClick={playPrevious}>
                        <img src="/play-previous.svg" alt="Tocar anterior" />
                    </button>
                    <PlayButton type="button" disabled={!currentEpisode} onClick={toggleAudio}>
                        {isPlaying ? <img src="/pause.svg" alt="Pausar" /> : <img src="/play.svg" alt="Tocar" />}
                    </PlayButton>
                    <button type="button" disabled={!currentEpisode || !episodesPlayList[selectedEpisodeIndex + 1]} onClick={playNext}>
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