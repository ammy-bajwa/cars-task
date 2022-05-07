export interface CarsSliceState {
  cars: any[];
  currentCar: any;
  loading: boolean;
  loadingFilters: boolean;
  totalCarsCount: number;
  currentPage: number;
  totalPageCount: number;
  selectedColor: string;
  selectedManufacturer: string;
  colors: string[];
  manufacturers: string[];
}
