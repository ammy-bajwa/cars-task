import { render, screen } from "../../tests";
import { CarListItem } from ".";

const data = {
  stockNumber: 32808,
  manufacturerName: "Fiat",
  modelName: "Argenta",
  color: "white",
  mileage: {
    number: 109600,
    unit: "km",
  },
  fuelType: "Diesel",
  pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
};

const setup = () => {
  render(<CarListItem data={data} />, {});
  const component = screen.queryByTestId("carListItem");
  return { component };
};

describe("<CarListItem />", () => {
  it("Should Render CarListItem Component", () => {
    const { component } = setup();
    expect(component).toBeInTheDocument();
  });
});
