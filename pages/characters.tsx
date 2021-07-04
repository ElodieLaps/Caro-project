import Layout from '../components/templates/Layout';
import { InferGetStaticPropsType } from 'next';
import { CharactersProps } from '../components/templates/Characters';
import CharactersContent from '../components/templates/Characters';
import characterApi from '../lib/api/character';

type pageProps = {
   pageTitle: string,
   content: CharactersProps
}

export const getStaticProps = async () => {

   const pageTitle = "les personnages"
   const title = "Les personnages"
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

const Characters = ({ pageTitle, content }: InferGetStaticPropsType<typeof getStaticProps>) => {
   return (
      <div>
         <Layout pageTitle={pageTitle}>
            <CharactersContent
               title={content.title}
               characters={content.characters}
            />
         </Layout>
      </div>
   )
}

export default Characters;