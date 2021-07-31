import humanF from "../../public/img/characters/humanF.png";
import humanM from "../../public/img/characters/humanM.png";
import kitsuneF from "../../public/img/characters/kitsuneF.png";
import kitsuneM from "../../public/img/characters/kitsuneM.png";
import kobolthF from "../../public/img/characters/kobolthF.png";
import kobolthM from "../../public/img/characters/kobolthM.png";
import sylphF from "../../public/img/characters/sylphF.png";
import sylphM from "../../public/img/characters/sylphM.png";
import * as genderConst from "../constants/GENDERS";

const findGenderAvatar = (
  gender: string,
  maleAvatar: any,
  femaleAvatar: any
) => {
  if (gender === genderConst.FEMALE) {
    return femaleAvatar;
  } else return maleAvatar;
};

export const findAvatar = (race: string, gender: string) => {
  switch (race) {
    case "HUM":
      return findGenderAvatar(gender, humanM, humanF);

    default:
      return sylphF;
  }
};
