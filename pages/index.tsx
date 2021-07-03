import Layout from '../components/templates/Layout';
import { InferGetStaticPropsType } from 'next';
import { HomeProps } from '../components/templates/Home';

type pageProps = {
  pageTitle: string,
  content: HomeProps
}

export const getStaticProps = () => {
  const pageTitle = "Accueil"
  const title = "Hello Caroline"
  return {
    props: {
      pageTitle,
      content: {
        title: 'Hello Caroline'
      }
    } as pageProps,
  }
}

const Home = ({ pageTitle, content }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Layout pageTitle={pageTitle}>
        <div className="home">
          <h1 className="home__title">{content.title}</h1>
        </div>
      </Layout>
    </div>
  )
}

export default Home;
