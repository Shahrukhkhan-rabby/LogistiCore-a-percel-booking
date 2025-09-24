/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_FRONTEND_URL: string;
  // add other env variables you need here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
