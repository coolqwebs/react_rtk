import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"


const Layout = () => {

  const {pathname} = useLocation()

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <div className="container mx-auto">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
export default Layout