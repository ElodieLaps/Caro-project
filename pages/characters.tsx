import Layout from '../components/atoms/Layout';
import { InferGetStaticPropsType } from 'next';
import { CharactersProps } from '../components/templates/Characters';
import CharactersContent from '../components/templates/Characters';
import characterApi from './api/character';
import raceApi from './api/race';
import roleApi from './api/role';
import equipmentsApi from './api/equipment';

type pageProps = {
   pageTitle: string,
   content: CharactersProps
}

export const getStaticProps = async () => {

   const pageTitle = "Les personnages"
   const title = "Les personnages"
   const characters = await characterApi.getAllCharacters();
   const races = await raceApi.getAllRaces();
   const roles = await roleApi.getAllRoles();
   const equipments = await equipmentsApi.getAllEquipments();

   return {
      props: {
         pageTitle,
         content: {
            title: title,
            characters: characters,
            races: races,
            roles: roles,
            equipments: equipments
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
               roles={content.roles}
               equipments={content.equipments}
            />}
         </Layout>
      </div>
   )
}

export default Characters;