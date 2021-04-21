import { GetStaticProps } from "next";

export default function Home() {
  return (
    <h1>Index</h1>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const episodes = await (await fetch('http://localhost:3333/episodes')).json();

  return {
    props: {
      episodes
    },
    revalidate: 60 * 60 * 4
  };
}