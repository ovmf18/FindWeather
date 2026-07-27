export interface DailyForecast {
  dayOfWeek: string;
  dateStr: string;
  iconDesc: string;
  isDay: boolean;
  minTemp: number;
  maxTemp: number;
  humidity: number;
  windSpeed: number;
  rainProb: number;
}

export const getNext5DaysForecast = (list: any[]): DailyForecast[] => {
  const dailyData: Record<string, any[]> = {};

  // Group by local date string
  list.forEach(item => {
    const dateObj = new Date(item.dt * 1000);
    const dateStr = dateObj.toLocaleDateString('pt-BR'); // DD/MM/YYYY
    if (!dailyData[dateStr]) {
      dailyData[dateStr] = [];
    }
    dailyData[dateStr].push(item);
  });

  // Extract the next 5 days (skip today)
  const todayStr = new Date().toLocaleDateString('pt-BR');
  const allDates = Object.keys(dailyData);
  const futureDates = allDates.filter(date => date !== todayStr).slice(0, 5);

  return futureDates.map(dateStrKey => {
    const dayItems = dailyData[dateStrKey];
    
    // Find min and max temps
    const temps = dayItems.map(item => item.main.temp);
    const minTemp = Math.round(Math.min(...temps));
    const maxTemp = Math.round(Math.max(...temps));

    // Averages for humidity, wind, rain prob
    const humidity = Math.round(dayItems.reduce((acc, item) => acc + item.main.humidity, 0) / dayItems.length);
    const windSpeed = Math.round(dayItems.reduce((acc, item) => acc + (item.wind.speed * 3.6), 0) / dayItems.length);
    const rainProb = Math.round(dayItems.reduce((acc, item) => acc + (item.pop * 100), 0) / dayItems.length);

    // Pick the most representative item for the icon (closest to 12:00 PM local time)
    let representativeItem = dayItems.find(item => {
      const hours = new Date(item.dt * 1000).getHours();
      return hours >= 11 && hours <= 14;
    });
    
    if (!representativeItem) {
      representativeItem = dayItems[Math.floor(dayItems.length / 2)];
    }

    const iconDesc = representativeItem.weather[0].description;
    const isDay = representativeItem.sys.pod === 'd';

    // Parse the DD/MM/YYYY back to a date object to format it
    const [day, month, year] = dateStrKey.split('/');
    const dateObj = new Date(Number(year), Number(month) - 1, Number(day));
    
    const dayOfWeek = new Intl.DateTimeFormat('pt-BR', { weekday: 'short' }).format(dateObj);
    const dayOfWeekFormatted = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1).replace('.', '');

    const monthName = new Intl.DateTimeFormat('pt-BR', { month: 'short' }).format(dateObj);
    const monthFormatted = monthName.charAt(0).toUpperCase() + monthName.slice(1).replace('.', '');

    return {
      dayOfWeek: dayOfWeekFormatted,
      dateStr: `${monthFormatted}, ${day.padStart(2, '0')}`,
      iconDesc,
      isDay,
      minTemp,
      maxTemp,
      humidity,
      windSpeed,
      rainProb
    };
  });
};
