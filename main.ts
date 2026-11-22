// World News — Sunday 22 November 2026.
// make.fun bounty news-image-20261122: "Sum up 22 November's world news
// in one image".
//
// The finished front page is "WORLD NEWS — Sunday 22 November 2026": a
// smooth, modern newspaper page (never pixel-retro) whose lead is Ukraine
// hit by its biggest attack of the year — 110 missiles and 400 drones —
// plus six labelled briefs (COP31 overtime, Mexico cartel boss captured,
// AI stocks shedding $4 trillion, Trump credit-card cap, Gaza ceasefire
// strains, Saturday football). The picture is a calm globe with a sunrise
// and a city skyline; all the war news is carried as text headlines only.
//
// This program writes that image to the output directory. It does not draw
// anything and does not fetch anything: entry.png sits beside this file in
// the repository and is copied byte for byte, so two runs always write
// identical bytes. Node 22, standard library only. No network, no clock,
// no randomness.
//
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const IMAGE_NAME = "entry.png";
// The bundled image is a 1024x1024 PNG, 760,506 bytes, sha256
// 26e746dd09f238ca014eb8fc92205128f2c190038ca3ef4f8f43e5da302725cd
// — comfortably under the competition's 1 MiB cap.
const EXPECTED_BYTES = 760506;
const EXPECTED_SHA256 =
  "26e746dd09f238ca014eb8fc92205128f2c190038ca3ef4f8f43e5da302725cd";
const SIZE_LIMIT_BYTES = 1024 * 1024;

const repoRoot = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(repoRoot, IMAGE_NAME);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = resolve(outputDir, IMAGE_NAME);

const image = readFileSync(sourcePath);
if (image.length !== EXPECTED_BYTES) {
  throw new Error(
    `${IMAGE_NAME} is ${image.length} bytes, expected exactly ${EXPECTED_BYTES}; refusing to write a different image.`,
  );
}
if (image.length > SIZE_LIMIT_BYTES) {
  throw new Error(
    `${IMAGE_NAME} is ${image.length} bytes, over the 1 MiB limit.`,
  );
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, outputPath);

if (statSync(outputPath).size !== EXPECTED_BYTES) {
  throw new Error("copy failed: output size does not match the source.");
}

// A size match alone does not prove the copy is intact, so hash the output
// too and refuse to finish if even one byte differs from the bundled image.
const writtenHash = createHash("sha256")
  .update(readFileSync(outputPath))
  .digest("hex");
if (writtenHash !== EXPECTED_SHA256) {
  throw new Error(
    `copy failed: output sha256 ${writtenHash} does not match ${EXPECTED_SHA256}.`,
  );
}

console.log(`wrote ${outputPath} (${EXPECTED_BYTES} bytes)`);
