import { BrowserRouter, Route, Routes } from "react-router-dom"
import PublicLayout from "./layout/public"
import Home from "./pages/public"
import AboutUs from "./pages/public/about"
import Profile from "./pages/public/profile"
import Gallery from "./pages/public/gallery"
import ContactUs from "./pages/public/contact"
import RegistrationForm from "./pages/public/registration"
import Extracurricular from "./pages/public/extracurricular"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/extracurricular" element={<Extracurricular />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/registration" element={<RegistrationForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
