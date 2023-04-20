import iconSearch from "../img/iconSearch.png"
import { useState } from "react";

import { useNavigate } from "react-router-dom";

// import { useEffect } from "react";





export function Search() {
    const [put, setput] = useState("")

    let apiValue = []
    let apiQuery = ""
    const navigate = useNavigate()

    async function click(e) {
        e.preventDefault()


        const options = {
            method: 'GET',
            headers: {

                'X-RapidAPI-Key': '482ee3cb81msh0df3f32a6672d94p1e5d68jsn03f8996aaa42',
                'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
            }
        };
        try {

            const response = await fetch(`https://hotels-com-provider.p.rapidapi.com/v2/regions?locale=en_GB&query=${put}&domain=AE`, options);

            const getApi = await response.json();
            setput("")
            apiValue = getApi.data
            apiQuery = getApi.query
            // setquerySearch(getApi.query)

        }
        catch (e) {
            console.log(e);
        }

        function getKey() {
            const getGaiaId = apiValue.find((a) => {
                return a.gaiaId !== undefined
            })
            return getGaiaId.gaiaId

        }

        navigate(`/search/${apiQuery}/${getKey()}`)

    }

    return (
        <>
            <form onSubmit={click} action="search" className="conSearch">
                <div className="iconSearch">
                    <img src={iconSearch} alt="icon" />
                </div>

                <input value={put} type="text" name="search" placeholder="Where do you want to go ?"
                    onChange={((e) => {
                        setput(e.target.value)
                    })}
                />
                <button type="submit">
                    <div className="trigerSearch">Search</div>
                </button>
            </form>
        </>
    )
}
