import { NavbarON } from "../element/navbar";
import { RecomendationApi } from "../element/recomendation";
import { Search } from "../element/search";
import "../style/home.css"
import arrow from "../img/arrow.png"
import { CardPromo } from "../element/cardPromo";
import { PopulerApi } from "../element/populer";
import { useEffect, useRef } from "react";
import { ClickScroll } from "../element/clickScroll";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const refScroll = useRef()

    return (
        <section>
            <div className="container">
                <NavbarON page="home" />
                <div className="welcome">

                    <h1> Welcome.</h1>
                    <h2>Choose Your Destination</h2>
                </div>

                <Search />

                <div className="conten">

                    <div className="titleArrow">
                        <h1>Recomendation</h1>
                        <img src={arrow} alt="next" />
                    </div>

                    <div className="conRecomended">
                        <div ref={refScroll} className="cardRecom">
                            <RecomendationApi />
                        </div>
                        <ClickScroll refScroll={refScroll} />
                    </div>

                    <div className="boxPromo">
                        <CardPromo />
                    </div>

                    <div className="titleArrow">
                        <h1>Populer</h1>
                        <img src={arrow} alt="next" />
                    </div>
                    <div className="cardPopuler">
                        <PopulerApi />
                    </div>


                    <div className="footer">
                    </div>
                </div>
            </div>
        </section>
    )
} 