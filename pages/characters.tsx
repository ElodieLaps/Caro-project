import Layout from '../components/templates/Layout';
import { InferGetStaticPropsType } from 'next';
import { CharactersProps } from '../components/templates/Characters';
import CharactersContent from '../components/templates/Characters';
import characterApi from '../lib/api/character';
import raceApi from '../lib/api/race';

type pageProps = {
   pageTitle: string,
   content: CharactersProps
}

export const getStaticProps = async () => {

   const pageTitle = "Les personnages"
   const title = "Les personnages"
   const characters = await characterApi.getAllCharacters();
   const races = await raceApi.getAllRaces();

   return {
      props: {
         pageTitle,
         content: {
            title: title,
            characters: characters,
            races: races
         } as unknown
      } as pageProps,
   }
}

const Characters = ({ pageTitle, content }: InferGetStaticPropsType<typeof getStaticProps>) => {
   return (
      <div>
         <Layout pageTitle={pageTitle}>
            {<CharactersContent
               title={content.title}
               characters={content.characters}
               races={content.races}
            />}
         </Layout>
      </div>
   )
}

export default Characters;