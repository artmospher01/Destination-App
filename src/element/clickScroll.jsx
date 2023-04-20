import { useState } from "react";
import arrowImageWhite from "../img/arrowImageWhite.png";

export function ClickScroll(props) {
    const resultRef = props.refScroll
    const [scrollLeft, setScrollLeft] = useState();

    const handleMouseDownRight = () => {
        setScrollLeft(setInterval(() => {
            resultRef.current.scrollLeft += 5;
        }), 50)
    }
    const handleMouseDownLeft = () => {
        setScrollLeft(setInterval(() => {
            resultRef.current.scrollLeft -= 5;
        }), 50)
    }

    const handleMouseUp = () => {
        clearInterval(scrollLeft);
    };


    return (
        <div className="conClickScroll">

            <div className='detailNext' onMouseDown={handleMouseDownRight} onMouseUp={handleMouseUp}>
                <img src={arrowImageWhite} alt="next" />
            </div>
            <div className='detailPrev' onMouseDown={handleMouseDownLeft} onMouseUp={handleMouseUp}>
                <img src={arrowImageWhite} alt="prev" />
            </div>

        </div >
    )
}