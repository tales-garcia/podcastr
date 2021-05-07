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
    isLooping: boolean;
    toggleLoop(): void;
    isShuffling: boolean;
    toggleShuffling(): void;
    currentTime: number;
    setCurrentTime: Dispatch<SetStateAction<number>>;
    clearPlayerState(): void;
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
    const [isLooping, setIsLooping] = useState<boolean>(false);
    const [isShuffling, setIsShuffling] = useState<boolean>(false);
    const [usedIndexes, setUsedIndexes] = useState<number[]>([]);
    const [currentTime, setCurrentTime] = useState<number>(0);

    const play = useCallback((episode: Episode) => {
        setEpisodesPlayList([episode]);
        setSelectedEpisodeIndex(0);
        setIsPlaying(true);
    }, []);

    const toggleAudio = useCallback(() => {
        setIsPlaying(previousState => !previousState);
    }, []);

    const toggleLoop = useCallback(() => {
        setIsLooping(previousState => !previousState);
    }, []);

    const playList = useCallback((list: Episode[], index: number) => {
        setEpisodesPlayList(list);
        setSelectedEpisodeIndex(index);
        setIsPlaying(true);
    }, []);

    const playNext = useCallback(() => {
        setIsPlaying(true);

        if (isShuffling) {
            const episodesLength = episodesPlayList.length;

            if (episodesLength === usedIndexes.length) {
                setUsedIndexes([]);

                const randomIndex = getRandomNumberBetweenExcept(episodesLength, 0, []);

                setSelectedEpisodeIndex(randomIndex);

                return;
            }

            const randomIndex = getRandomNumberBetweenExcept(episodesLength, 0, usedIndexes);
            setUsedIndexes([...usedIndexes, randomIndex]);

            setSelectedEpisodeIndex(randomIndex);

            return;
        }

        setSelectedEpisodeIndex(previousState => previousState + 1);
    }, [usedIndexes, isShuffling, episodesPlayList]);

    const playPrevious = useCallback(() => {
        setSelectedEpisodeIndex(previousState => previousState - 1);
        setIsPlaying(true);
    }, []);

    const toggleShuffling = useCallback(() => {
        setIsShuffling(previousState => !previousState);
    }, []);

    const clearPlayerState = useCallback(() => {
        setEpisodesPlayList([]);
        setSelectedEpisodeIndex(0);
        setIsPlaying(false);
        setUsedIndexes([]);
        setCurrentTime(0);
    }, []);

    return (
        <playerContext.Provider
            value={{
                episodesPlayList,
                clearPlayerState,
                selectedEpisodeIndex,
                play,
                isPlaying,
                toggleAudio,
                setIsPlaying,
                playList,
                playNext,
                playPrevious,
                isLooping,
                toggleLoop,
                isShuffling,
                toggleShuffling,
                currentTime,
                setCurrentTime
            }}
        >
            {children}
        </playerContext.Provider>
    );
}