import { useParams } from "react-router-dom";
import { star } from "../element/rating";
import "../style/detail.css"
import iMapBluee from "../img/iMapBluee.png"
import { useState } from "react";
import { useEffect } from "react";
import ImageSwap from "../element/imageDetail";
import { SearchDeatail } from "../element/searchDetail";


export function PageDetail() {

    const [dataApi, setdataApi] = useState()
    const [loading, setloading] = useState(false)
    const [loadingRooms, setloadingRooms] = useState(false)
    const [dataRooms, setdataRooms] = useState()

    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
        setloading(false)

        function getApiDetail() {
            const options = {
                method: 'GET',
                headers: {

                    'X-RapidAPI-Key': 'b3f598b316mshe4d0836ad763917p11d649jsn5c55c216a0e7',
                    'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
                }
            };

            fetch(`https://hotels-com-provider.p.rapidapi.com/v2/hotels/details?domain=AE&locale=en_GB&hotel_id=${id}`, options)
                .then(response => response.json())
                .then(response => {
                    setloading(true);
                    setdataApi(response)
                })
                .catch(err => console.error(err));
        }

        function getApiRooms() {
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

            const options = {
                method: 'GET',
                headers: {

                    'X-RapidAPI-Key': 'b3f598b316mshe4d0836ad763917p11d649jsn5c55c216a0e7',
                    'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
                }
            };

            fetch(`https://hotels-com-provider.p.rapidapi.com/v2/hotels/offers?adults_number=1&checkout_date=${checkIn(19)}&domain=AE&locale=en_GB&hotel_id=${id}&checkin_date=${checkIn(12)}`, options)
                .then(response => response.json())
                .then(response => {
                    setloadingRooms(true)
                    setdataRooms(response)


                })
                .catch(err => console.error(err));

        }

        getApiDetail()
        getApiRooms()

    }, [id,])




    const result = () => {
        if (loading && loadingRooms) {
            return ShowDetail(dataApi, dataRooms)
            // return <h1>okokoko</h1>
        }
        else {

            return <h1>wait...</h1>
        }
    }
    return result()


    function ShowDetail(a, b) {
        // 22772 = property cant be booked for 7 night

        function SelectRoom(x) {
            function messageClick() {
                alert("Sorry, This feature is not available yet")
            }

            if (b.stickyBar == null) {
                return (
                    <div className="book conMessageRoom">
                        <div className="messageRoom">

                            <h2>{x.errorMessage.title.text}</h2>
                        </div>

                    </div>
                )
            }
            else {
                return <div className="book">
                    <div className="priceDetail">
                        <span>Price average / Night</span>
                        <h1>us{b.stickyBar.displayPrice}</h1>
                    </div>
                    <button type="submit" onClick={messageClick}>
                        Select Room</button>
                </div>
            }
        }

        // maps 
        const latitude = a.summary.location.coordinates.latitude
        const longtitude = a.summary.location.coordinates.longitude


        const handleMaps = () => {
            window.open(`https://www.google.com/maps/search/google+maps+${latitude}+,+${longtitude}?`, "_blank")
        }




        //  slide image
        const imagesDetail = () => {
            return dataApi.propertyGallery.images.map((a) => {
                return a.image.url
            })
        }


        function amenities(a) {
            return a.map((d, i) => {
                return <li className="topAminiti" key={i} >{d.text}</li>
            })
        }

        function anotherAminities(a) {
            return a.map((b, ind) => {
                function contentsHead() {
                    return b.contents.map((a, i, t) => {
                        return (<div key={i}>
                            <h4 className="subAminiti">{a.header.text}</h4>
                            <div className="conChildAmi">
                                {fin(a.items)}
                            </div>
                        </div>)
                    })
                }

                function fin(x) {
                    return x.map((a, i) => {
                        return <li className="childAminiti" key={i}>{a.text}</li>
                    })
                }

                return (<div key={ind}>
                    <h3 className="aminiti">{b.header.text} :</h3>
                    <ul className="conSubAmi">
                        {contentsHead()}
                    </ul>

                </div >)

            })
        }



        return (
            <div className="conDetail">

                <SearchDeatail />

                <ImageSwap img={imagesDetail()} />
                <div className="conDesk">

                    <h1 className="judulDetail">{a.summary.name}</h1>
                    {star(dataApi.summary.overview.propertyRating.rating)}


                    <div className="locationDetail">
                        <img src={iMapBluee} alt="pin-map" />
                        <h1 onClick={handleMaps}>
                            {a.summary.location.address.addressLine}, -{a.summary.location.address.city}</h1>
                    </div>

                    <div className="deskriptionDetail">
                        <h1>Description</h1>
                        <h1 className="taglineDetail">{dataApi.summary.tagline}</h1>


                        <h3 className="aminiti">Top aminities</h3>
                        <ul>
                            {amenities(dataApi.summary.amenities.topAmenities.items)}
                        </ul>

                        {anotherAminities(dataApi.summary.amenities.amenities)}

                        <div className="map">
                            <h1>Maps</h1>
                            <img onClick={handleMaps} src={dataApi.summary.location.staticImage.url} alt="map" />
                        </div>
                    </div>
                </div>
                {SelectRoom(b)}

            </div>
        )
    }



}