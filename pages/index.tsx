import Layout from '../components/atoms/Layout';
import { InferGetStaticPropsType } from 'next';
import { HomeProps } from '../components/templates/Home';
import HomeContent from '../components/templates/Home';

type pageProps = {
  pageTitle: string,
  content: HomeProps
}

export const getStaticProps = async () => {
  const pageTitle = "Accueil"
  const title = "Hello Caroline"
  return {
    props: {
      pageTitle,
      content: {
        title: title,
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
        />
      </Layout>
    </div>
  )
}

export default Home;
