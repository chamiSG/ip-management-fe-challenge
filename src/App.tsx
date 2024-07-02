import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from '@/routes';
import RootLayout from '@/layouts';

function App() {

  const router = createBrowserRouter(routes);

  return (
    <main>
      <RootLayout>
        <RouterProvider router={router} />
      </RootLayout>
    </main>
  )
}

export default App
