import Statistic from "../../../lib/models/Statistic";

type StatItemType = {
   statistic: Statistic
}

const StatItem = ({ statistic }: StatItemType) => {
   return (
      <p className="character__item">
         <span>{statistic.label}: </span>
         {statistic.max}
      </p>
   )
}

export default StatItem;