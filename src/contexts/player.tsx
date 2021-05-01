import { createContext, FC, useCallback, useContext, useState } from "react";

interface PlayerContextData {
    selectedEpisodeIndex: number;
    episodesPlayList: Episode[];
    play(episode: Episode): void;
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

    const play = useCallback((episode: Episode) => {
        setEpisodesPlayList([episode]);
        setSelectedEpisodeIndex(0);
    }, []);

    return (
        <playerContext.Provider value={{ episodesPlayList, selectedEpisodeIndex, play }}>
            {children}
        </playerContext.Provider>
    );
}