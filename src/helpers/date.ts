import { format } from "date-fns";

export const formatDate = (
  date: string,
  dateFormat = "dd/MM/yyyy HH:mm"
): string => {
  console.log(date)

  return format(new Date(date), dateFormat);
};