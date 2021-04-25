import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';
import api from '../../services/api';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import convertTimeToString from '../../utils/convertTimeToString';
import Image from 'next/image';
import { Container } from '../../styles/pages/episode';

type EpisodeProps = {
    episode: Episode;
};

export default function Episode({ episode }: EpisodeProps) {
    return (
        <Container>
            <div>
                <Link href="/">
                    <button>
                        <img src="/arrow-left.svg" alt="Voltar" />
                    </button>
                </Link>
                <Image
                    width={700}
                    height={160}
                    objectFit="cover"
                    src={episode.thumbnail}
                />
                <button>
                    <img src="/play.svg" alt="Tocar episódio" />
                </button>
            </div>
            <header>
                <h1>{episode.title}</h1>
                <span>{episode.members}</span>
                <span>{episode.published_at}</span>
                <span>{episode.stringDuration}</span>
            </header>
            <div dangerouslySetInnerHTML={{ __html: episode.description }} />
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { data } = await api.get(`/episodes/${params?.id}`);

    const episode = {
        ...data,
        published_at: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
        stringDuration: convertTimeToString(Number(data.file.duration)),
        file: {
            ...data.file,
            duration: Number(data.file.duration)
        }
    }

    return {
        props: {
            episode
        },
        revalidate: 60 * 60 * 24
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        fallback: 'blocking',
        paths: []
    }
}