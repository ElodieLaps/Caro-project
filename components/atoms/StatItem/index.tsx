import Statistic from "../../../lib/models/Statistic";

type StatItemType = {
   statistic: Statistic
}

const StatItem = ({ statistic }: StatItemType) => {
   return (
      <p className={`statistic__item item__${statistic.type}`}>
         <span>{statistic.label}: </span>
         {statistic.value}
      </p>
   )
}

export default StatItem;