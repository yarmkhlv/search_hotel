function changeEndingOfDay(amount: number) {
  const lastNumberOfAmount = amount % 10;
  let word;
  if (lastNumberOfAmount === 1) {
    word = '1 день';
  }
  if (lastNumberOfAmount >= 2 && lastNumberOfAmount <= 4) {
    word = `${amount} дня`;
  }
  if (lastNumberOfAmount === 0 || lastNumberOfAmount > 4) {
    word = `${amount} дней`;
  }
  return word;
}

const transformWordHotel = (amount: number) => {
  const lastNumberOfAmount = amount % 10;
  let word;
  if (lastNumberOfAmount === 1) {
    word = 'отель';
  }
  if (lastNumberOfAmount >= 2 && lastNumberOfAmount <= 4) {
    word = 'отеля';
  }
  if (lastNumberOfAmount === 0 || lastNumberOfAmount > 4) {
    word = 'отелей';
  }
  return word;
};

export { changeEndingOfDay, transformWordHotel };
