import Layout from '../components/atoms/Layout';
import { InferGetStaticPropsType } from 'next';
import roleApi from './api/role';
import RolesContent, { RolesProps } from '../components/templates/Role';

type pageProps = {
   pageTitle: string;
   content: RolesProps;
}

export const getStaticProps = async () => {

   const pageTitle = "Classes"
   const title = "Les classes"
   const roles = await roleApi.getAllRoles();

   return {
      props: {
         pageTitle,
         content: {
            title: title,
            roles: roles
         } as unknown
      } as pageProps,
   }
}

const Races = ({ pageTitle, content }: InferGetStaticPropsType<typeof getStaticProps>) => {
   return (
      <div>
         <Layout pageTitle={pageTitle}>
            <RolesContent title={content.title} roles={content.roles} />
         </Layout>
      </div>
   )
}

export default Races;