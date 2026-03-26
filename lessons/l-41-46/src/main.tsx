import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/shared/styles/index.css'
import App from "@/app/app.tsx";
import AppProviders from "@/app/app-providers.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
		<AppProviders>
    <App />
		</AppProviders>
  </StrictMode>,
)
