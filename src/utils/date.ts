export const formatCurrentDate = (): string => {
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  const dateStr = formatter.format(new Date());
  return dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
};
