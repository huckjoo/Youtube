import { Outlet } from 'react-router-dom';

import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Header from './components/Header';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div id="contents">
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
