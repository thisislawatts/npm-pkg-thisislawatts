#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

"use strict";

import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const output = readFileSync(path.join(__dirname, "output"), "utf8");
console.log(output);
