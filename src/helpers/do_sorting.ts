import { Hotel } from '../store/hotels_list_slice';

export function doSorting(arr: Hotel[], sortById: number, sortByTrend: string) {
  let sorted = [...arr];
  if (sortById === 1) {
    switch (sortByTrend) {
      case 'increase':
        sorted = sorted.sort((a, b) => a.stars - b.stars);
        break;
      case 'decrease':
        sorted = sorted.sort((a, b) => b.stars - a.stars);
        break;

      default:
        return sorted;
    }
  } else if (sortById === 2) {
    switch (sortByTrend) {
      case 'increase':
        sorted = sorted.sort((a, b) => a.priceAvg - b.priceAvg);
        break;
      case 'decrease':
        sorted = sorted.sort((a, b) => b.priceAvg - a.priceAvg);
        break;

      default:
        return sorted;
    }
  }
  return sorted;
}
