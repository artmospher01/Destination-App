import { useEffect } from "react";
import { NavbarON } from "../element/navbar";
import "../style/pagesMessage.css"



function Account() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section>
            <NavbarON page="promo" />
            <h1 className="messagePages">Sorry, The Promo page is not yet available</h1>
        </section>
    )
}

export default Account