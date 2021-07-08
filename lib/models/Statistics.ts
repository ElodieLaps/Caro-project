import Statistic from "./Statistic";

export default class Statistics {
  health;
  health_regen;
  mana;
  mana_regen;
  attack_damages;
  dark_power;
  light_power;
  armor;
  protection;
  blessing;
  swiftness;
  dodge;
  constructor(
    health: Statistic,
    health_regen: Statistic,
    mana: Statistic,
    mana_regen: Statistic,
    attack_damages: Statistic,
    dark_power: Statistic,
    light_power: Statistic,
    armor: Statistic,
    protection: Statistic,
    blessing: Statistic,
    swiftness: Statistic,
    dodge: Statistic
  ) {
    this.health = health;
    this.health_regen = health_regen;
    this.mana = mana;
    this.mana_regen = mana_regen;
    this.attack_damages = attack_damages;
    this.dark_power = dark_power;
    this.light_power = light_power;
    this.armor = armor;
    this.protection = protection;
    this.blessing = blessing;
    this.swiftness = swiftness;
    this.dodge = dodge;
  }
}
