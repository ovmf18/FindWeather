import { ImageSourcePropType } from 'react-native';

const icons: Record<string, any> = {
  // Clear
  day_clear: require('../assets/sun.png'),
  night_clear: require('../assets/night.png'),
  // Cloud
  day_cloud: require('../assets/cloud.png'),
  night_cloud: require('../assets/cloud.png'), // No night specific in list
  // Light Rain
  day_light_rain: require('../assets/light-rain.png'),
  night_light_rain: require('../assets/light-rain-night.png'),
  // Raining
  day_raining: require('../assets/raining.png'),
  night_raining: require('../assets/raining-night.png'),
  // Heavy Raining
  day_heavy_raining: require('../assets/heavy-raining.png'),
  night_heavy_raining: require('../assets/heavy-raining-night.png'),
  // Waterdrop
  day_waterdrop: require('../assets/waterdrop.png'),
  night_waterdrop: require('../assets/waterdrop-night.png'),
  // Raining and Thunder
  day_raining_and_thunder: require('../assets/raining-and-thunder.png'),
  night_raining_and_thunder: require('../assets/raining-and-thunder.png'),
  // Heavy Raining and Thunder
  day_heavy_raining_and_thunder: require('../assets/heavy-raining-and-thunder.png'),
  night_heavy_raining_and_thunder: require('../assets/heavy-raining-and-thunder-night.png'),
  // Thunder
  day_thunder: require('../assets/thunder.png'),
  night_thunder: require('../assets/thunder-night.png'),
  // Hailstone
  day_hailstone: require('../assets/hailstone.png'),
  night_hailstone: require('../assets/hailstone-night.png'),
  // Fog
  day_fog: require('../assets/fog.png'),
  night_fog: require('../assets/fog-night.png'),
  // Icy Fog
  day_icy_fog: require('../assets/icy-fog.png'),
  night_icy_fog: require('../assets/icy-fog-night.png'),
  // Squalls
  day_squalls: require('../assets/squalls.png'),
  night_squalls: require('../assets/squalls.png'),
  // Freezing Raining
  day_freezing_raining: require('../assets/freezing-raining.png'),
  night_freezing_raining: require('../assets/freezing-raining-night.png'),
  // Freezing Light Rain
  day_freezing_light_rain: require('../assets/freezing-light-rain.png'),
  night_freezing_light_rain: require('../assets/freezing-light-rain-night.png'),
  // Freezing Heavy Raining
  day_freezing_heavy_raining: require('../assets/freezing-heavy-raining.png'),
  night_freezing_heavy_raining: require('../assets/freezing-heavy-raining-night.png'),
  // Blizzard
  day_blizzard: require('../assets/blizzard.png'),
  night_blizzard: require('../assets/blizzard-night.png'),
  // Snow
  day_snow: require('../assets/snow.png'),
  night_snow: require('../assets/snow.png'),
  // Snow Light Rain
  day_snow_light_rain: require('../assets/snow-light-rain.png'),
  night_snow_light_rain: require('../assets/snow-light-rain-night.png'),
  // Snow Heavy Raining
  day_snow_heavy_raining: require('../assets/snow-heavy-raining.png'),
  night_snow_heavy_raining: require('../assets/snow-heavy-raining-night.png'),
  // Snow with Thunder
  day_snow_with_thunder: require('../assets/snow-with-thunder.png'),
  night_snow_with_thunder: require('../assets/snow-with-thunder.png'),
  // Snowing
  day_snowing: require('../assets/snowing.png'),
  night_snowing: require('../assets/snowing-night.png'),
  // Sand Dust Cloud
  day_sand_dust_cloud: require('../assets/sand-dust-cloud.png'),
  night_sand_dust_cloud: require('../assets/sand-dust-cloud.png'),
  // Volcanic Ash Cloud
  day_volcanic_ash_cloud: require('../assets/volcanic-ash-cloud.png'),
  night_volcanic_ash_cloud: require('../assets/volcanic-ash-cloud.png'),
  // Tornado
  day_tornado: require('../assets/tornado.png'),
  night_tornado: require('../assets/tornado.png'),
  // Sand Dust Whirls
  day_sand_dust_whirls: require('../assets/sand-dust-whirls.png'),
  night_sand_dust_whirls: require('../assets/sand-dust-whirls.png'),
};

export const getWeatherIcon = (description: string, isDay: boolean): ImageSourcePropType => {
  const text = description.toLowerCase();
  let baseIcon = 'cloud'; // default

  // Light Rain
  if (
    text.includes('chuvisco irregular') ||
    text.includes('chuvisco') ||
    text.includes('chuva fraca irregular') ||
    text.includes('chuva fraca') ||
    text.includes('chuva leve') ||
    text.includes('chuva e garoa') ||
    text.includes('garoa de intensidade leve')
  ) {
    baseIcon = 'light_rain';
  }
  // Raining
  else if (
    text.includes('possibilidade de chuva irregular') ||
    text.includes('períodos de chuva moderada') ||
    text.includes('chuva moderada') ||
    text.includes('chuva de banho') ||
    text === 'chuva' ||
    text.includes('tempestade irregular')
  ) {
    baseIcon = 'raining';
  }
  // Heavy Raining
  else if (
    text.includes('períodos de chuva forte') ||
    text.includes('chuva forte') ||
    text.includes('chuva torrencial') ||
    text.includes('chuva de forte intensidade') ||
    text.includes('chuva muito forte') ||
    text.includes('chuva extrema') ||
    text.includes('garoa de forte intensidade') ||
    text.includes('chuva forte e garoa')
  ) {
    baseIcon = 'heavy_raining';
  }
  // Waterdrop
  else if (
    text.includes('aguaceiros fracos') ||
    text.includes('aguaceiros moderados ou fortes')
  ) {
    baseIcon = 'waterdrop';
  }
  // Raining and Thunder
  else if (
    text.includes('chuva fraca irregular com trovoada') ||
    text.includes('leve tempestade') ||
    text.includes('trovoada com chuva leve') ||
    text.includes('trovoada com garoa')
  ) {
    baseIcon = 'raining_and_thunder';
  }
  // Heavy Raining and Thunder
  else if (
    text.includes('chuva moderada ou forte com trovoada') ||
    text.includes('trovoada com chuva') ||
    text.includes('forte tempestade')
  ) {
    baseIcon = 'heavy_raining_and_thunder';
  }
  // Thunder
  else if (
    text.includes('possibilidade de trovoada') ||
    text === 'trovoada'
  ) {
    baseIcon = 'thunder';
  }
  // Hailstone
  else if (
    text.includes('granizo')
  ) {
    baseIcon = 'hailstone';
  }
  // Clear
  else if (
    text.includes('sol') ||
    text.includes('céu limpo') ||
    text.includes('claro')
  ) {
    baseIcon = 'clear';
  }
  // Cloud
  else if (
    text.includes('nublado') ||
    text.includes('encoberto') ||
    text.includes('nuvem') ||
    text.includes('nuvens')
  ) {
    baseIcon = 'cloud';
  }
  // Fog
  else if (
    text.includes('neblina') ||
    text.includes('nevoeiro') ||
    text.includes('névoa')
  ) {
    baseIcon = 'fog';
  }
  // Icy Fog
  else if (
    text.includes('nevoeiro gelado')
  ) {
    baseIcon = 'icy_fog';
  }
  // Squalls
  else if (
    text.includes('rajadas')
  ) {
    baseIcon = 'squalls';
  }
  // Freezing Raining
  else if (
    text.includes('chuva gelada moderada ou forte') ||
    text.includes('chuva congelante')
  ) {
    baseIcon = 'freezing_raining';
  }
  // Freezing Light Rain
  else if (
    text.includes('chuvisco gelado') ||
    text.includes('chuva fraca e gelada')
  ) {
    baseIcon = 'freezing_light_rain';
  }
  // Freezing Heavy Raining
  else if (
    text.includes('chuvisco forte gelado') ||
    text.includes('possibilidade de chuvisco gelado irregular')
  ) {
    baseIcon = 'freezing_heavy_raining';
  }
  // Blizzard
  else if (
    text.includes('nevasca') ||
    text.includes('chuva de neve')
  ) {
    baseIcon = 'blizzard';
  }
  // Snow Light Rain
  else if (
    text.includes('chuva fraca com neve') ||
    text.includes('aguaceiros fracos com neve') ||
    text.includes('chuva fraca e neve') ||
    text.includes('chuva de neve leve')
  ) {
    baseIcon = 'snow_light_rain';
  }
  // Snow Heavy Raining
  else if (
    text.includes('chuva moderada ou forte com neve') ||
    text.includes('aguaceiros moderados ou fortes com neve') ||
    text.includes('chuva e neve') ||
    text.includes('chuva forte de neve')
  ) {
    baseIcon = 'snow_heavy_raining';
  }
  // Snow with Thunder
  else if (
    text.includes('neve com trovoada') ||
    text.includes('neve fraca irregular com trovoada') ||
    text.includes('neve moderada ou forte com trovoada')
  ) {
    baseIcon = 'snow_with_thunder';
  }
  // Snowing
  else if (
    text.includes('neve intensa') ||
    text.includes('neve pesada')
  ) {
    baseIcon = 'snowing';
  }
  // Snow
  else if (
    text.includes('neve')
  ) {
    baseIcon = 'snow';
  }
  // Sand Dust Cloud
  else if (
    text.includes('areia') ||
    text.includes('pó')
  ) {
    baseIcon = 'sand_dust_cloud';
  }
  // Volcanic Ash
  else if (
    text.includes('cinza vulcanica')
  ) {
    baseIcon = 'volcanic_ash_cloud';
  }
  // Tornado
  else if (
    text.includes('tornado')
  ) {
    baseIcon = 'tornado';
  }
  // Sand Dust Whirls
  else if (
    text.includes('confusão') ||
    text.includes('redemoinhos')
  ) {
    baseIcon = 'sand_dust_whirls';
  }

  const prefix = isDay ? 'day_' : 'night_';
  return icons[prefix + baseIcon] || icons['day_' + baseIcon] || icons['day_cloud'];
};
