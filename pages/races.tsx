import Layout from '../components/atoms/Layout';
import { InferGetStaticPropsType } from 'next';
import raceApi from './api/race';
import RacesContent, { RacesProps } from '../components/templates/Race';

type pageProps = {
   pageTitle: string;
   content: RacesProps;
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

const Races = ({ pageTitle, content }: InferGetStaticPropsType<typeof getStaticProps>) => {
   return (
      <div>
         <Layout pageTitle={pageTitle}>
            <RacesContent
               title={content.title}
               races={content.races}
            />
         </Layout>
      </div>
   )
}

export default Races;