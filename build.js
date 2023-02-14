"use strict";

// Pull in our modules
import chalk from "chalk";
import boxen from "boxen";
import { writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "double",
};

// Text + chalk definitions
const data = {
  name: chalk.white("           Luke Watts"),
  handle: chalk.white("thisislawatts"),
  work: chalk.white("Engineer at Snyk"),
  github: chalk.gray("https://github.com/") + chalk.green("thisislawatts"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") + chalk.blue("thisislawatts"),
  web: chalk.cyan("https://bestemployeeever.com"),
  npx: chalk.red("npx") + " " + chalk.white("thisislawatts"),
  labelWork: chalk.white.bold("    Work:"),
  labelGitHub: chalk.white.bold("  GitHub:"),
  labelLinkedIn: chalk.white.bold("LinkedIn:"),
  labelWeb: chalk.white.bold("     Web:"),
  labelCard: chalk.white.bold("    Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  webing +
  newline +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.green(boxen(output, options))
);
