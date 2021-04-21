import { GetStaticProps } from "next";

type HomeProps = {
  episodes: Episode[];
}

export default function Home({ episodes }: HomeProps) {
  return (
    <h1>{JSON.stringify(episodes)}</h1>
  )
} 

export const getStaticProps: GetStaticProps = async () => {
  const episodes = await (await fetch('http://localhost:3333/episodes?_limit=10&_sort=published_at&_order=desc')).json();

  return {
    props: {
      episodes
    },
    revalidate: 60 * 60 * 4
  };
}