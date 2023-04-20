import { Link } from "react-router-dom"
import arrow from "../img/arrow.png"
import cart from "../img/cart.png"
import { Search } from "./search"
import "../style/detail.css"
import { useState } from "react"
import { useEffect } from "react"

export function SearchDeatail() {
    const [showSearch, setshowSearch] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    function handleScroll() {
        const targetPosition = 300


        if (window.scrollY > targetPosition) {
            setshowSearch(true)
        }
        else {
            setshowSearch(false)
        }
    }

    return (
        <div className={showSearch ? "showSearch conBackSearch" : "hideSearch conBackSearch"}>
            <Link className="backDet" to="/">
                <img src={arrow} alt="Back" />
            </Link>
            <div className="searchDet">
                <Search />
            </div>
            <Link className="cartDet" to="/cart">
                <img src={cart} alt="Cart" />
            </Link>
        </div>
    )
}