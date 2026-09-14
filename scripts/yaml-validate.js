#!/usr/bin/env node
// Validates that each YAML file passed as an argument parses.
// Exits with 1 on the first file that fails.
import { readFileSync } from "node:fs";
import { load } from "js-yaml";

const files = process.argv.slice(2);

if (files.length === 0) {
  console.error("usage: yaml-validate <file> [...]");
  process.exit(1);
}

for (const file of files) {
  try {
    load(readFileSync(file, "utf8"));
    console.log("OK:", file);
  } catch (e) {
    console.error("FAIL:", file, e.message);
    process.exit(1);
  }
}
