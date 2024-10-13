import * as imports from "./vizdom_ts_bg.js";
import { __wbg_set_wasm } from "./vizdom_ts_bg.js";

import { webcrypto } from "node:crypto";
try {
  // In node 22 you don't need this
  // https://docs.rs/getrandom/latest/getrandom/#nodejs-es-module-support
  globalThis.crypto = webcrypto;
} catch (e) {
  // in Astro it throws TypeError: Cannot assign to read only property 'crypto' of object '#<Object>'
}

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
// In node 20: const __dirname = import.meta.dirname;
const __dirname = dirname(fileURLToPath(import.meta.url));
const wasm = (
  await WebAssembly.instantiate(
    readFileSync(join(__dirname, "vizdom_ts_bg.wasm")),
    {
      "./vizdom_ts_bg.js": imports,
    }
  )
).instance.exports;

__wbg_set_wasm(wasm);
export * from "./vizdom_ts_bg.js";

wasm.__wbindgen_start();
