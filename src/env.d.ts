/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COCKPIT_API: string;
  readonly VITE_COCKPIT_AUTHORIZATION: string;
  readonly VITE_COCKPIT_FILES: string;
  readonly VITE_VERSION: string;
  readonly VITE_REVISION: string;
  readonly VITE_DATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
