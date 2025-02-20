import { BrowserRouter, Route, Routes } from "react-router-dom"
import PublicLayout from "./layout/public"
import Home from "./pages/public"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
