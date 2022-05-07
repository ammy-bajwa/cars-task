export type mileageType = {
  number: number;
  unit: string;
};

export interface CarListItemProps {
  data: {
    stockNumber: number;
    manufacturerName: string;
    modelName: string;
    mileage: mileageType;
    color: string;
    pictureUrl: string;
    fuelType: string;
  };
}
