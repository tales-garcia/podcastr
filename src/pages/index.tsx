import { GetStaticProps } from "next";
import api from "../services/api";

type HomeProps = {
  episodes: Episode[];
}

export default function Home({ episodes }: HomeProps) {
  return (
    <h1>{JSON.stringify(episodes)}</h1>
  )
} 

export const getStaticProps: GetStaticProps = async () => {
  const episodes = (await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })).data;

  return {
    props: {
      episodes
    },
    revalidate: 60 * 60 * 4
  };
}