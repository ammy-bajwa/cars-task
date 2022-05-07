export interface CarsSliceState {
  cars: any[];
  currentCar: any;
  loading: boolean;
  loadingFilters: boolean;
  totalCarsCount: number;
  totalPageCount: number;
  colors: string[];
  manufacturers: string[];
}
