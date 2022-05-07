export type mileageType = {
  number: number;
  unit: string;
};

export type CarType = {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  mileage: mileageType;
  color: string;
  pictureUrl: string;
  fuelType: string;
};

export interface CarListItemProps {
  data: CarType;
}

export interface CarListItemWrapperProps {
  color: string;
  borderColor: string;
  primary: string;
}
