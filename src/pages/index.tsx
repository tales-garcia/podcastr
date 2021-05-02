import { GetStaticProps } from "next";
import api from "../services/api";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import convertTimeToString from "../utils/convertTimeToString";
import Image from 'next/image';
import Link from 'next/link';
import { Container, LatestEpisodes, RemainingEpisodes } from "../styles/pages/home";
import { usePlayer } from "../contexts/player";
import { useMemo } from "react";

type HomeProps = {
  latestEpisodes: Episode[];
  remainingEpisodes: Episode[];
}

export default function Home({ latestEpisodes, remainingEpisodes }: HomeProps) {
  const { playList } = usePlayer();
  const allEpisodes = useMemo(() => [...latestEpisodes, ...remainingEpisodes].reverse(), [latestEpisodes, remainingEpisodes]);

  return (
    <Container>
      <LatestEpisodes>
        <h2>Ultimos lançamentos</h2>

        <ul>
          {latestEpisodes.map((episode) => (
            <li key={episode.id}>
              <Image width={192} height={192} src={episode.thumbnail} alt={episode.title} objectFit="cover" />
              <div>
                <Link href={`/episode/${episode.id}`}>{episode.title}</Link>
                <p>{episode.members}</p>
                <span>{episode.published_at}</span>
                <span>{episode.stringDuration}</span>
              </div>
              <button onClick={() => playList(allEpisodes, allEpisodes.findIndex(ep => ep.id === episode.id))}>
                <img src="/play-green.svg" alt="Tocar episódio" />
              </button>
            </li>
          ))}
        </ul>
      </LatestEpisodes>

      <RemainingEpisodes>
        <h2>Todos os episódios</h2>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th />
              <th>Podcast</th>
              <th>Integrantes</th>
              <th>Data</th>
              <th>Duração</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {remainingEpisodes.map((episode) => (
              <tr key={episode.id}>
                <td style={{ width: 72 }}>
                  <Image alt={episode.title} objectFit="cover" width={120} height={120} src={episode.thumbnail} />
                </td>
                <td>
                  <Link href={`/episode/${episode.id}`}>{episode.title}</Link>
                </td>
                <td>{episode.members}</td>
                <td style={{ width: 100 }}>{episode.published_at}</td>
                <td>{episode.stringDuration}</td>
                <td>
                  <button type="button" onClick={() => playList(allEpisodes, allEpisodes.findIndex(ep => ep.id === episode.id))}>
                    <img src="/play-green.svg" alt="Tocar episódio"/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </RemainingEpisodes>
    </Container>
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

  const latestEpisodes = episodes.slice(0, 2);
  const remainingEpisodes = episodes.slice(2, episodes.length);

  return {
    props: {
      latestEpisodes,
      remainingEpisodes
    },
    revalidate: 60 * 60 * 4
  };
}