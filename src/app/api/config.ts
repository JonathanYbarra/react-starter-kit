declare global {
  interface Window {
    _env_: { [key: string]: any};
  }
}
interface AppConfig {
  apiUrl?: string
}

console.log(import.meta.env.VITE_APP_API_BASE, "process.env.REACT_APP_API_URL")
export const config: AppConfig = {
  apiUrl: import.meta.env.VITE_APP_API_BASE
} as const;
