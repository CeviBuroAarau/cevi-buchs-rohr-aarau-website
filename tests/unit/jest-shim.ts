// jest-canvas-mock uses jest.fn() internally; alias jest → vi so it works with Vitest.
import { vi } from "vitest";
(global as typeof globalThis & { jest: unknown }).jest = vi;
