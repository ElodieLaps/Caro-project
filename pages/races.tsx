import Layout from '../components/templates/Layout';
import { InferGetStaticPropsType } from 'next';
import raceApi from '../lib/api/race';

type pageProps = {
   pageTitle: string,
   content: any
}

export const getStaticProps = async () => {

   const pageTitle = "Races"
   const title = "Les races"
   const races = await raceApi.getAllRaces();

   return {
      props: {
         pageTitle,
         content: {
            title: title,
            races: races
         } as unknown
      } as pageProps,
   }
}

const Race = ({ pageTitle, content }: InferGetStaticPropsType<typeof getStaticProps>) => {
   return (
      <div>
         <Layout pageTitle={pageTitle}>
            <h1>{content.title}</h1>
            {console.log('races', content.races)}
         </Layout>
      </div>
   )
}

export default Race;