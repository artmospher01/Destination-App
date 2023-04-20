import { useEffect } from "react";
import { NavbarON } from "../element/navbar";
import "../style/pagesMessage.css"



function Account() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section>
            <NavbarON page="account" />
            <h1 className="messagePages">Sorry, The account page is not yet available</h1>
        </section>
    )
}

export default Account