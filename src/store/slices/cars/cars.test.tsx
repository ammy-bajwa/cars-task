import {
  createStore,
  getCars,
  getMoreCars,
  getColorsList,
  getManufactures,
  carsActions,
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

  it("Should be able to set current color", async () => {
    const store = createStore;
    store.dispatch(carsActions.setSelectedColor("red"));
    expect(store.getState().cars.selectedColor).toBe("red");
  });

  it("Should be able to set current manufacturer", async () => {
    const store = createStore;
    store.dispatch(carsActions.setSelectedColor("Audi"));
    expect(store.getState().cars.selectedManufacturer).toBe("Audi");
  });

  it("Should be able to set current page", async () => {
    const store = createStore;
    store.dispatch(carsActions.setCurrentPage(16));
    expect(store.getState().cars.currentPage).toBe(16);
  });

  it("Should be able to add favourites", async () => {
    const store = createStore;
    store.dispatch(carsActions.addCarToFavourite(456));
    expect(store.getState().cars.favourites.includes(456)).toBeTruthy();
  });

  it("Should be able to remove favourites", async () => {
    const store = createStore;
    store.dispatch(carsActions.addCarToFavourite(456));
    store.dispatch(carsActions.removeCarToFavourite(456));
    expect(store.getState().cars.favourites.includes(456)).toBeFalsy();
  });
});
