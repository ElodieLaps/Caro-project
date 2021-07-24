import Link from 'next/link';
import Title from '../../atoms/Title';

export type HomeProps = {
   title: string;
}

const HomeContent = ({ title }: HomeProps) => {

   return (
      <div className="home">
         <Title classname="home__title" text={title} />
         <ul>
            <li>
               <Link href="/">
                  <a>Accueil</a>
               </Link>
            </li>
            <li>
               <Link href="/races">
                  <a>Les races</a>
               </Link>
            </li>
            <li>
               <Link href="/characters">
                  <a>les personnages</a>
               </Link>
            </li>
         </ul>

      </div>
   )
}

export default HomeContent;