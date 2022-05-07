import { render, screen } from "../../tests";
import { CarDetailsFavSection } from ".";

const setup = () => {
  render(<CarDetailsFavSection />, {});
  const component = screen.queryByTestId("CarFavSection");
  const component2 = screen.queryByTestId("CustomButton");
  return { component, component2 };
};

describe("<CarDetailsFavSection />", () => {
  it("Should Render CarDetailsFavSection Component", () => {
    const { component, component2 } = setup();
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent(
      "If you like this car, click the button and save it in your collection"
    );
    expect(component2).toBeInTheDocument();
  });
});
