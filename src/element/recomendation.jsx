import { useState } from "react";
import { useEffect } from "react";
import { star } from "./rating";
import { useNavigate } from "react-router-dom";
import { clickToDetail } from "./nvigateToDetail";



export function RecomendationApi() {
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
        const region = [2734, 2011, 1222, 1639]

        function getRandom(list) {
            return list[Math.floor((Math.random() * list.length))];
        }

        return getRandom(region)
    }

    useEffect(() => {
        setloading(false)
        function TampilApi() {
            const options = {
                method: 'GET',
                headers: {

                    // 'X-RapidAPI-Key': '1b5573d43fmsh4ee0b51f2380e1cp1cd79bjsn1ff96e0eafd7',
                    // 'X-RapidAPI-Key': '18d40e799cmshcc863d0d55b8f87p166ee5jsn76a7d8490a7f',
                    'X-RapidAPI-Key': 'b3f598b316mshe4d0836ad763917p11d649jsn5c55c216a0e7',
                    'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
                }
            };

            return fetch(`https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?domain=AE&sort_order=RECOMMENDED&locale=en_GB&checkout_date=${checkIn(+28)}&region_id=${regionId()}&adults_number=1&checkin_date=${checkIn(+20)}&available_filter=SHOW_AVAILABLE_ONLY&meal_plan=FREE_BREAKFAST&guest_rating_min=8&page_number=1&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&payment_type=PAY_LATER%2CFREE_CANCELLATION&star_rating_ids=3%2C4%2C5`, options)
                .then(response => response.json())
                .then(response => {
                    setloading(true)
                    setcard(response.properties)

                }
                )

                .catch(err => console.error(err));
        }

        TampilApi()

    }, [])


    const Hasil = card.map((a, i) => {

        return ShowCard(a, i)
    })


    const TampilLoading = () => {
        return (
            <h1 className="loading">Please wait... <br /> <span>Recomendation is loading..</span></h1>
        )
    }

    const Load = () => {
        if (loading) {
            const clikScrol = document.querySelector(".conRecomended")
            clikScrol.classList.add("hoverRecome")
            return Hasil
        }
        else {

            return <TampilLoading />
        }
    }


    const navigate = useNavigate()

    function ShowCard(a, i) {

        function handleClickDet() {
            clickToDetail(a, navigate)
        }

        return (
            <div onClick={handleClickDet} className="isiCard" key={i + a.id}>
                <img className="imgCard" src={a.propertyImage.image.url} alt="imageC" />
                <h1 className="judul">{a.name}</h1>
                <h1 className="harga"><span>US </span>{a.price.lead.formatted}</h1>
                {star(a.star)}

            </div>

        )

    }

    return Load()

}