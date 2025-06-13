export const formatDateKoreanWeekday = (dateTime: string): string => {
  const date = new Date(dateTime);
  const day = date.getDate();
  const weekday = new Intl.DateTimeFormat('ko-KR', { weekday: 'long' }).format(
    date,
  );

  return `${day}일 ${weekday}`;
};
