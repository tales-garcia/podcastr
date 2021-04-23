import { GetStaticProps } from "next";
import api from "../services/api";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import convertTimeToString from "../utils/convertTimeToString";

type HomeProps = {
  episodes: Episode[];
}

export default function Home({ episodes }: HomeProps) {
  return (
    <p>{JSON.stringify(episodes)}</p>
  )
} 

export const getStaticProps: GetStaticProps = async () => {
  const rawEpisodes = (await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })).data as Episode[];

  const episodes = rawEpisodes.map(episode => ({
    ...episode,
    published_at: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
    stringDuration: convertTimeToString(Number(episode.file.duration)),
    file: {
      ...episode.file,
      duration: Number(episode.file.duration)
    }
  }));

  return {
    props: {
      episodes
    },
    revalidate: 60 * 60 * 4
  };
}