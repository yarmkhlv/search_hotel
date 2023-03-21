function dateFormattedForInput() {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, '0');
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const year = today.getFullYear().toString();
  return `${year}-${month}-${day}`;
}

function dateFormattedCheckOut(checkIn: string, amount: string) {
  const arrivalDate = new Date(checkIn);
  const stayDays = amount;
  const departureDate = new Date(
    arrivalDate.getTime() + Number(stayDays) * 24 * 60 * 60 * 1000
  );
  const departureDateString = departureDate.toISOString().substring(0, 10);
  return departureDateString;
}

function transformDate(date: string) {
  const dateString = date;
  const dateObj = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const formattedDate = dateObj
    .toLocaleDateString('ru-RU', options)
    .replace(/ г\./g, '');
  return formattedDate;
}

function dateNowForInputDate() {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = `0${dateObj.getMonth() + 1}`.slice(-2);
  const day = `0${dateObj.getDate()}`.slice(-2);
  return `${year}-${month}-${day}`;
}

export {
  dateFormattedForInput,
  dateFormattedCheckOut,
  transformDate,
  dateNowForInputDate,
};
