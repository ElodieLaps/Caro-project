import Experience from "../../../lib/models/Experience";
import Statistic from "../../../lib/models/Statistic";

type StatbarType = {
   statistic: Statistic | Experience;
}

const Statbar = ({ statistic }: StatbarType) => {

   const style = {
      width: `${((statistic.current / statistic.max) * 100)}%`,
   }

   return (
      <div className="statistic">
         <p className="statistic__label">{statistic.label}: </p>
         <p className="statistic__values">{statistic.current} / {statistic.max} pts</p>
         <div className="statistic__container">
            <div className={`statistic__bar ${statistic.type}`} style={style}></div>
         </div>
      </div>
   )
}

export default Statbar;