import { createContext, Dispatch, FC, SetStateAction, useCallback, useContext, useState } from "react";

interface PlayerContextData {
    selectedEpisodeIndex: number;
    episodesPlayList: Episode[];
    play(episode: Episode): void;
    isPlaying: boolean;
    toggleAudio(): void;
    setIsPlaying: Dispatch<SetStateAction<boolean>>;
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

    return (
        <playerContext.Provider value={{ episodesPlayList, selectedEpisodeIndex, play, isPlaying, toggleAudio, setIsPlaying }}>
            {children}
        </playerContext.Provider>
    );
}