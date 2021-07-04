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
   const pageTitle = "Races"
   const title = "Les races"
   return {
      props: {
         pageTitle,
         content: {
            title: title
         }
      } as pageProps,
   }
}

const Race = ({ pageTitle, content }: InferGetStaticPropsType<typeof getStaticProps>) => {
   return (
      <div>
         <Layout pageTitle={pageTitle}>
            {  /*<HomeContent
               title={content.title}
               characters={content.characters}
            />*/}
            <h1>{content.title}</h1>
         </Layout>
      </div>
   )
}

export default Race;