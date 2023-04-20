import { Link } from "react-router-dom"
import "../style/navbar.css"

import iHome from "../img/home.png"
import iCart from "../img/cart.png"
import iPromo from "../img/promo.png"
import iAccount from "../img/account.png"
import iHomeFill from "../img/home-fill.png"
import iCartFill from "../img/cart-fill.png"
import iPromoFill from "../img/promo-fill.png"
import iAccountFill from "../img/account-fill.png"
import { useEffect, useState } from "react"
import { Search } from "./search"



export function NavbarON(props) {

  //  setting Search
  const [showSearch, setshowSearch] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })


  function handleScroll() {
    const targetPosition = 300


    if (window.scrollY > targetPosition) {
      setshowSearch(true)
    }
    else {
      setshowSearch(false)
    }
  }

  // condition page
  if (props.page === "home") {
    return (
      <nav className="containerNav">
        <h1 className={showSearch ? "logoOff" : "logoOn"}>Destination</h1>
        <div className="contenNav">
          <Link to="/" className="iNav" >
            <div className="isiNav">
              <img src={iHomeFill} alt="home" />
              <span className="hLight">Home</span>
            </div>
          </Link>

          <Link to="/cart" className="iNav">
            <div className="isiNav">
              <img src={iCart} alt="cart" />
              <span>Cart</span>
            </div>
          </Link>
          <Link to="/promo" className="iNav">
            <div className="isiNav">
              <img src={iPromo} alt="promo" />
              <span>Promo</span>
            </div>
          </Link>
          <Link to="/account" className="iNav">
            <div className="isiNav">
              <img src={iAccount} alt="account" />
              <span>Account</span>
            </div>
          </Link>
        </div>

        <div className={showSearch ? "showSearch searchNavbar" : "hideSearch searchNavbar"}>
          <Search />
        </div>
      </nav>
    );
  }
  if (props.page === "cart") {

    return (
      <nav className="containerNav">
        <h1 className={showSearch ? "logoOff" : "logoOn"}>Destination</h1>
        <div className="contenNav">

          <Link to="/" className="iNav">
            <div className="isiNav">
              <img src={iHome} alt="home" />
              <span>Home</span>
            </div>
          </Link>
          <Link to="/cart" className="iNav">
            <div className="isiNav">
              <img src={iCartFill} alt="cart" />
              <span className="hLight">Cart</span>
            </div>
          </Link>
          <Link to="/promo" className="iNav">
            <div className="isiNav">
              <img src={iPromo} alt="promo" />
              <span>Promo</span>
            </div>
          </Link>
          <Link to="/account" className="iNav">
            <div className="isiNav">
              <img src={iAccount} alt="account" />
              <span>Account</span>
            </div>
          </Link>
        </div>

        <div className={showSearch ? "showSearch searchNavbar" : "hideSearch searchNavbar"}>
          <Search />
        </div>
      </nav>
    )
  }

  if (props.page === "promo") {
    return (
      <nav className="containerNav">
        <h1 className={showSearch ? "logoOff" : "logoOn"}>Destination</h1>
        <div className="contenNav">
          <Link to="/" className="iNav">
            <div className="isiNav">
              <img src={iHome} alt="home" />
              <span>Home</span>
            </div>
          </Link>
          <Link to="/cart" className="iNav">
            <div className="isiNav">
              <img src={iCart} alt="cart" />
              <span>Cart</span>
            </div>
          </Link>
          <Link to="/promo" className="iNav">
            <div className="isiNav">
              <img src={iPromoFill} alt="promo" />
              <span className="hLight">Promo</span>
            </div>
          </Link>
          <Link to="/account" className="iNav">
            <div className="isiNav">
              <img src={iAccount} alt="account" />
              <span>Account</span>
            </div>
          </Link>
        </div>

        <div className={showSearch ? "showSearch searchNavbar" : "hideSearch searchNavbar"}>
          <Search />
        </div>
      </nav>
    )
  }

  if (props.page === "account") {

    return (
      <nav className="containerNav">
        <h1 className={showSearch ? "logoOff" : "logoOn"}>Destination</h1>
        <div className="contenNav">
          <Link to="/" className="iNav">
            <div className="isiNav">
              <img src={iHome} alt="home" />
              <span>Home</span>
            </div>
          </Link>
          <Link to="/cart" className="iNav">
            <div className="isiNav">
              <img src={iCart} alt="cart" />
              <span>Cart</span>
            </div>
          </Link>
          <Link to="/promo" className="iNav">
            <div className="isiNav">
              <img src={iPromo} alt="promo" />
              <span>Promo</span>
            </div>
          </Link>
          <Link to="/account" className="iNav">
            <div className="isiNav">
              <img src={iAccountFill} alt="account" />
              <span className="hLight">Account</span>
            </div>
          </Link>
        </div>

        <div className={showSearch ? "showSearch searchNavbar" : "hideSearch searchNavbar"}>
          <Search />
        </div>
      </nav>
    )
  }

}