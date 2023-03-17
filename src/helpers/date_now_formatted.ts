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

export { dateFormattedForInput, dateFormattedCheckOut };
