/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly VITE_VERSION: string;
  readonly VITE_REVISION: string;
  readonly VITE_DATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
