import {
  createStore,
  getCars,
  getMoreCars,
  getColorsList,
  getManufactures,
} from "../../index";

describe("Testing fetching cars", () => {
  it("Should Render NavItem Component", () => {
    const store = createStore;
    const globalState = store.getState();
    expect(globalState.cars).toEqual({
      currentCar: null,
      currentPage: 1,
      favourites: [],
      cars: [],
      colors: [],
      loading: false,
      loadingFilters: false,
      manufacturers: [],
      selectedColor: "red",
      selectedManufacturer: "Audi",
      totalCarsCount: 0,
      totalPageCount: 0,
    });
  });

  it("Should fetch list of cars", async () => {
    const store = createStore;
    const data = await store.dispatch(getCars({})).unwrap();
    expect(data?.cars).toBeTruthy();
  });

  it("Should fetch more cars", async () => {
    const store = createStore;
    const data = await store.dispatch(getMoreCars({})).unwrap();
    expect(data?.cars).toBeTruthy();
  });

  it("Should fetch colors", async () => {
    const store = createStore;
    const data = await store.dispatch(getColorsList()).unwrap();
    expect(data?.colors).toBeTruthy();
  });

  it("Should fetch manufacturer", async () => {
    const store = createStore;
    const data = await store.dispatch(getManufactures()).unwrap();
    expect(data?.manufacturers).toBeTruthy();
  });
});
