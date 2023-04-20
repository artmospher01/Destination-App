import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { Search } from "../element/search.jsx";
import { NavbarON } from "../element/navbar.jsx"
import { star } from "../element/rating.jsx";


export default function SearchResult() {
    const query = useParams().query
    const id = useParams().id

    const [loading, setloading] = useState(false)
    const [resultApi, setresultApi] = useState([])



    const checkIn = (a) => {
        let today = new Date();
        const dd = String(today.getDate() + a).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;

        return today
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        setloading(false)

        function ApiSearch() {
            const options = {
                method: 'GET',
                headers: {
                    // 'X-RapidAPI-Key': '18d40e799cmshcc863d0d55b8f87p166ee5jsn76a7d8490a7f',
                    'X-RapidAPI-Key': '482ee3cb81msh0df3f32a6672d94p1e5d68jsn03f8996aaa42',
                    'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
                }
            };
            fetch(`https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?domain=AE&sort_order=RECOMMENDED&locale=en_GB&checkout_date=${checkIn(+10)}&region_id=${id}&adults_number=1&checkin_date=${checkIn(+3)}&available_filter=SHOW_AVAILABLE_ONLY&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&star_rating_ids=3%2C4%2C5`, options)
                .then(response => response.json())
                .then(response => {

                    setloading(true)
                    setresultApi(response.properties)
                })
                .catch(err => console.error(err));
        }

        ApiSearch()
    }, [id])



    const ResultCard = () => {
        if (loading === true) {
            return resultApi.map((a, i) => {
                if (i < 150) {
                    return (ShowCard(a, i)
                    )
                }
                return null

            })
        }
        else {
            return <h1>Please wait..</h1>
        }

    }


    function ShowCard(a, i) {
        function handleClickDet() {
            console.log("okok")
        }

        return (<div onClick={handleClickDet} className="isiCard" key={a.id + i}>
            <img className="imgCard" src={a.propertyImage.image.url} alt="imageHotel" />
            <h1 className="judul">{a.name}</h1>
            <h1 className="harga"><span>US </span>{a.price.lead.formatted}</h1>

            {star(a.star)}

        </div>
        )
    }

    console.log(resultApi)



    return (
        <div className="container">
            <NavbarON page="home" />

            <div className="welcome">

                <h1> Welcome.</h1>
                <h2>Choose Your Destination</h2>

            </div>

            <Search />
            <div className="conten">


                <div className="querySearch">
                    <h1>Showing search results:  <span> {query}</span> </h1>
                </div>

                <div className="cardSearch">
                    {ResultCard()}
                </div>
            </div>
        </div>
    )
}
