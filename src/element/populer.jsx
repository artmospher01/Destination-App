
import { useState } from "react";
import { useEffect } from "react";
import { star } from "./rating"


export function PopulerApi() {
    const [card, setcard] = useState([])
    const [loading, setloading] = useState(false)

    const checkIn = (a) => {
        let today = new Date();
        const dd = String(today.getDate() + a).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;

        if (dd > 30) {
            if (mm > 12) {
                return (Number(yyyy) + 1) + '-' + (Number(mm) - 11) + '-' + dd;
            }
            return yyyy + '-' + (Number(mm) + 1) + '-' + (Number(dd) - 29);
        }

        return today
    }

    const regionId = () => {
        const random = Math.random()
        let result = ""
        const region = [3593, 181363, 513, 602651]

        if (random < 0.5) {
            (random < 0.25) ? result = region[0] : result = region[1]
        }
        else {
            (random < 0.75) ? result = region[2] : result = region[3]
        }
        return result
    }

    useEffect(() => {
        setloading(false)
        function TampilApi() {
            const options = {
                method: 'GET',
                headers: {

                    'X-RapidAPI-Key': '18d40e799cmshcc863d0d55b8f87p166ee5jsn76a7d8490a7f',
                    'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
                }
            };

            return fetch(`https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?domain=AE&sort_order=REVIEW&locale=en_GB&checkout_date=${checkIn(19)}&region_id=${regionId()}&adults_number=1&checkin_date=${checkIn(10)}&available_filter=SHOW_AVAILABLE_ONLY&meal_plan=FREE_BREAKFAST&guest_rating_min=8&price_min=10&page_number=1&children_ages=4%2C0%2C15&amenities=WIFI%2CPARKING&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&payment_type=PAY_LATER%2CFREE_CANCELLATION&star_rating_ids=3%2C4%2C5`, options)
                .then(response => response.json())
                .then(response => {
                    setloading(true)
                    // console.log(response);
                    setcard(response.properties)
                }
                )
                .catch(err => console.error(err));
        }

        TampilApi()
    }, [])

    const Hasil = card.map((a, i) => {
        return ShowCard(a, i)
        // return <h1>ok</h1>
    })

    const TampilLoading = () => {

        return (
            <h1 className="loading">Please wait... <br /> <span>Populer page is loading..</span></h1>
        )
    }

    const Load = () => {
        if (loading === true) {
            return Hasil
        }
        else {
            return <TampilLoading />
        }
    }

    function ShowCard(a) {
        function handleClickDet() {
            console.log("click-Ok")
        }

        return (<div onClick={handleClickDet} className="isiCard" key={a.id}>
            <img className="imgCard" src={a.propertyImage.image.url} alt="imageC" />
            <h1 className="judul">{a.name}</h1>
            <h1 className="harga"><span>US </span>{a.price.lead.formatted}</h1>

            {star(a.star)}

        </div>
        )
    }

    return Load()

}