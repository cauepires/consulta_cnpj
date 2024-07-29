import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import { Consulta } from "./pages/Consulta/"
import { Erro404 } from "./pages/Erro404"


function AppRoutes() {

  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consulta" element={<Navigate to="/" />} />
        <Route path="/consulta/:id/*" element={<Consulta />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export { AppRoutes }
