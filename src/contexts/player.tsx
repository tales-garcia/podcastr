import { createContext, Dispatch, FC, SetStateAction, useCallback, useContext, useState } from "react";

interface PlayerContextData {
    selectedEpisodeIndex: number;
    episodesPlayList: Episode[];
    play(episode: Episode): void;
    isPlaying: boolean;
    toggleAudio(): void;
    setIsPlaying: Dispatch<SetStateAction<boolean>>;
    playList(list: Episode[], index: number): void;
    playNext(): void;
    playPrevious(): void;
    shuffle(): void;
}

function getRandomNumberBetweenExcept(min: number, max: number, exclude: number[]): number {
    const random = Math.floor(Math.random() * (max - min)) + min;

    if (exclude.includes(random)) return getRandomNumberBetweenExcept(min, max, exclude);

    return random;
}

const playerContext = createContext<PlayerContextData>({} as PlayerContextData);

export function usePlayer() {
    const data = useContext(playerContext);

    if (!data) throw new Error('usePlayer must be used within PlayerProvider');

    return data;
}

export const PlayerProvider: FC = ({ children }) => {
    const [episodesPlayList, setEpisodesPlayList] = useState<Episode[]>([]);
    const [selectedEpisodeIndex, setSelectedEpisodeIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const play = useCallback((episode: Episode) => {
        setEpisodesPlayList([episode]);
        setSelectedEpisodeIndex(0);
        setIsPlaying(true);
    }, []);

    const toggleAudio = useCallback(() => {
        setIsPlaying(previousState => !previousState);
    }, []);

    const playList = useCallback((list: Episode[], index: number) => {
        setEpisodesPlayList(list);
        setSelectedEpisodeIndex(index);
        setIsPlaying(true);
    }, []);

    const playNext = useCallback(() => {
        setSelectedEpisodeIndex(previousState => previousState + 1);
        setIsPlaying(true);
    }, []);

    const playPrevious = useCallback(() => {
        setSelectedEpisodeIndex(previousState => previousState - 1);
        setIsPlaying(true);
    }, []);

    const shuffle = useCallback(() => {
        const shuffledEpisodes: Episode[] = [];
        const episodesLength = episodesPlayList.length;
        const usedNumbers: number[] = [];

        episodesPlayList.forEach(() => {
            const randomIndex = getRandomNumberBetweenExcept(episodesLength, 0, usedNumbers);
            usedNumbers.push(randomIndex);

            shuffledEpisodes.push(episodesPlayList[randomIndex]);
        });
        setEpisodesPlayList(shuffledEpisodes);
    }, [episodesPlayList]);

    return (
        <playerContext.Provider
            value={{
                episodesPlayList,
                selectedEpisodeIndex,
                play,
                isPlaying,
                toggleAudio,
                setIsPlaying,
                playList,
                playNext,
                playPrevious,
                shuffle
            }}
        >
            {children}
        </playerContext.Provider>
    );
}