import dayjs from "dayjs";

export const formatDate = (
  date: string,
  dateFormat = "DD/MM/YYYY HH:mm"
): string => {
  console.log(date)

  return dayjs(new Date(date)).format(dateFormat);
};