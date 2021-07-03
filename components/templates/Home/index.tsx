export type HomeProps = {
   title: string;
}

const Home = ({ title }: HomeProps) => {
   return (
      <div className="home">
         <h1 className="home__title">{title}</h1>
      </div>
   )
}

export default Home;