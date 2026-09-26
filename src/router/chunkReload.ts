// After a deployment the hashed chunks of the previous build no longer exist.
// A tab that was opened before the deployment still references them, so the
// next lazy route navigation fails. Loading the target URL fresh fetches the
// new index.html and with it the new chunk names.

const RELOAD_KEY = "chunk-reload-at";
// Prevents a reload loop if the chunk is missing for another reason.
const RELOAD_GUARD_MS = 10_000;

const CHUNK_ERROR_PATTERN =
  /Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed|Unable to preload CSS/i;

export function isChunkLoadError(error: unknown): boolean {
  return error instanceof Error && CHUNK_ERROR_PATTERN.test(error.message);
}

function readLastReload(): number {
  try {
    return Number(sessionStorage.getItem(RELOAD_KEY)) || 0;
  } catch {
    return 0;
  }
}

function writeLastReload(timestamp: number): void {
  try {
    sessionStorage.setItem(RELOAD_KEY, String(timestamp));
  } catch {
    // storage unavailable (private mode): reload anyway, the guard is best effort
  }
}

/**
 * Loads the given URL from the server, at most once within RELOAD_GUARD_MS.
 * Returns false if a reload was skipped because of the guard.
 */
export function reloadForNewDeployment(url: string, now = Date.now()): boolean {
  if (now - readLastReload() < RELOAD_GUARD_MS) {
    return false;
  }
  writeLastReload(now);
  window.location.assign(url);
  return true;
}
