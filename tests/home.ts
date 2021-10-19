import { initDriver, Holder } from "../src/driver";

describe("Test", () => {
  beforeEach(async () => {
    await initDriver();
  });
  it("test", () => {
    Holder.driver.navigateTo("https://stackoverflow.com");
  });
});
