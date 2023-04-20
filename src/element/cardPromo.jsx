import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import promo1 from "../img/cardPromo/promo1.jpg"
import promo2 from "../img/cardPromo/promo2.jpg"
import promo3 from "../img/cardPromo/promo3.jpg"
import promo4 from "../img/cardPromo/promo4.jpg"
import promo5 from "../img/cardPromo/promo5.jpg"
import promo6 from "../img/cardPromo/promo6.jpg"
import promo7 from "../img/cardPromo/promo7.jpg"
import promo8 from "../img/cardPromo/promo8.jpg"



export function CardPromo() {
    const [indexBanner, setindexBanner] = useState(0)
    const banner = [
        {
            image: promo1,
            contentHeader: "Get up to 30%",
            contentSpan: " off with our limited time discount!"
        },
        {
            image: promo2,
            contentHeader: "Don't miss the opportunity to stay",
            contentSpan: "with stunning discounts! "
        },
        {
            image: promo3,
            contentHeader: "Make your dream vacation ",
            contentSpan: " more affordable with our big discounts!"
        },
        {
            image: promo4,
            contentHeader: "Big discounts available",
            contentSpan: "for bookings now!"
        },
        {
            image: promo5,
            contentHeader: "Don't miss the opportunity to stay",
            contentSpan: "with high discounts!"
        },
        {
            image: promo6,
            contentHeader: "Book now",
            contentSpan: "and receive up to 30% off!"
        },
        {
            image: promo7,
            contentHeader: "Enjoy your vacation",
            contentSpan: "with amazing discounts!"
        },
        {
            image: promo8,
            contentHeader: "The best discounts are available",
            contentSpan: "for bookings now!"
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setindexBanner((indexBanner + 1) % banner.length);
            // console.log(indexBanner)
        }, 5000)


        return () => clearInterval(interval);
    }, [indexBanner, banner.length])


    const showBanner = banner[indexBanner];


    const navigate = useNavigate()

    function handleGoToPromo() {
        navigate("/promo")
    }

    // console.log(banner[1]);
    return (

        <div onClick={handleGoToPromo} className="isiCardPromo" style={{ backgroundImage: `url(${showBanner.image})`, transition: `background-image 0.5s ease-in-out` }}>
            <div className="contentPromo">
                <h1>{showBanner.contentHeader}</h1>
                <span>{showBanner.contentSpan}</span>
            </div>
        </div>
    )
}