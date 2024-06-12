import React from 'react'; // Importa o React
import ReactDOM from 'react-dom/client'; // Importa o ReactDOM
import { QueryClient, QueryClientProvider } from 'react-query'; // Importa o QueryClient e QueryClientProvider do React Query
import App from './App'; // Importa o componente principal da aplicação

// Cria uma instância do QueryClient
const queryClient = new QueryClient();

// Obtém a raiz do documento HTML e cria um root para renderizar a aplicação
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza a aplicação dentro do QueryClientProvider, fornecendo a instância do QueryClient para a aplicação
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
