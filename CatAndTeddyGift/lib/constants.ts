export type Scene =
  | "welcome"
  | "teddy"
  | "cat"
  | "together"
  | "suspense"
  | "countdown"
  | "reveal"
  | "final";

export const SCENES: Scene[] = [
  "welcome",
  "teddy",
  "cat",
  "together",
  "suspense",
  "countdown",
  "reveal",
  "final",
];

export const sceneIndex: Record<Scene, number> = {
  welcome: 0,
  teddy: 1,
  cat: 2,
  together: 3,
  suspense: 4,
  countdown: 5,
  reveal: 6,
  final: 7,
};