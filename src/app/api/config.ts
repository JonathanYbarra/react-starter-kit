declare global {
  interface Window {
    _env_: { [key: string]: any};
  }
}
interface AppConfig {
  apiUrl?: string
}

export const config: AppConfig = {
  apiUrl: 'https://rickandmortyapi.com/api'//process.env.REACT_APP_API_URL
} as const;
