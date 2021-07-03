import Layout from '../components/templates/Layout';
import { InferGetStaticPropsType } from 'next';
import { HomeProps } from '../components/templates/Home';
import HomeContent from '../components/templates/Home';
import characterApi from '../lib/api/character';

type pageProps = {
  pageTitle: string,
  content: HomeProps
}

export const getStaticProps = async () => {
  const pageTitle = "Accueil"
  const title = "Hello Caroline"
  const characters = await characterApi.getAllCharacters();
  return {
    props: {
      pageTitle,
      content: {
        title: title,
        characters: characters
      }
    } as pageProps,
  }
}

const Home = ({ pageTitle, content }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Layout pageTitle={pageTitle}>
        <HomeContent
          title={content.title}
          characters={content.characters}
        />
      </Layout>
    </div>
  )
}

export default Home;
