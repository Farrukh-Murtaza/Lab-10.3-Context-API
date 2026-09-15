import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/theme'
import { TodoProvider } from './context/todos'
import { FilterProvider } from './context/filter'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <TodoProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  </StrictMode>,
)
