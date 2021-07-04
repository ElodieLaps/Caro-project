import Link from 'next/link';

export type HomeProps = {
   title: string;
}

const HomeContent = ({ title }: HomeProps) => {

   return (
      <div className="home">
         <h1>{title}</h1>
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