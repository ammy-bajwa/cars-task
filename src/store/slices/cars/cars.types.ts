import { CarType } from "../../../components";

export interface CarsSliceState {
  cars: CarType[];
  favourites: number[];
  currentCar: CarType | null;
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
