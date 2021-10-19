import type { Options } from "@wdio/types";
import { remote } from "webdriverio";

type WebDriver = WebdriverIO.Browser;

export const options: Options.WebdriverIO = {
  capabilities: {
    browserName: "chrome",
  },
};

export async function initDriver(){
  Holder.driver = await remote(options);
}

export class Holder {
  private static d: WebDriver;
  static set driver(driver: WebDriver) {
    this.d = driver;
  }
  static get driver(): WebDriver {
    return this.driver;
  }
}
