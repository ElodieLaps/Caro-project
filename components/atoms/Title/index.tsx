type TitleProps = {
   classname: string;
   text: string;
}

const Title = ({ classname, text }: TitleProps) => {
   return (
      <h1 className={`title ${classname}`}>
         {text}
      </h1>
   )
}

export default Title;