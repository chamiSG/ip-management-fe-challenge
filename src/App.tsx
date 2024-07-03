import './App.css'
import routes from '@/routes';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "@/contexts/AuthProvider";

function App() {

  return (
    <main>
      <Router>
        <AuthProvider>
          <Routes>
            {routes?.map((route: any) => {
              if (route.name !== 'Root') {
                return (<Route key={route.name} path={route.path} element={route.element} />)
              } else {
                return (
                  <Route key={route.name} path={route.path} element={route.element}>
                    {route.children?.map((child: any) => (
                      <Route key={child.name} path={child.path} element={child.element} />
                    ))}
                  </Route>
                )
              }
            })}

          </Routes>
        </AuthProvider>
      </Router>

    </main>
  )
}

export default App
