import Statistic from "../../../lib/models/Statistic";

type StatbarType = {
   statistic: Statistic;
}

const Statbar = ({ statistic }: StatbarType) => {
   const width = (statistic.current && (statistic.current / statistic.value) * 100);
   const color = width && width <= 10 ? 'red' : '';

   const style = {
      width: `${width}%`,
      backgroundColor: statistic.type === 'health' ? color : ''
   }

   return (
      <div className={`statistic item__${statistic.type}`}>
         <p className="statistic__label">{statistic.label}: </p>
         <p className="statistic__values">{statistic.current} / {statistic.value} pts</p>
         <div className="statistic__container">
            <div className={`statistic__bar ${statistic.type}`} style={style}></div>
         </div>
      </div>
   )
}

export default Statbar;