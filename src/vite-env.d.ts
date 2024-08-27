/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_TABLET_SIZE: string;
    readonly VITE_DESKTOP_SIZE: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }