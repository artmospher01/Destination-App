import "../style/home.css"
import starActive from "../img/star-active.png"
import starOff from "../img/star-off.png"

export function star(rating) {
    function staA() {
        return (
            <img src={starActive} alt="sta" />
        )
    }
    function staO() {
        return (
            <img src={starOff} alt="sta" />
        )
    }

    if (rating === 0) {
        return (<div className="iStar">
            {staO()}
            {staO()}
            {staO()}
            {staO()}
            {staO()}
        </div>)
    }
    if (rating <= 1) {
        return (
            <div className="iStar">
                {staA()}
                {staO()}
                {staO()}
                {staO()}
                {staO()}
            </div>
        )
    }

    if (rating <= 2) {
        return (
            <div className="iStar">
                {staA()}
                {staA()}
                {staO()}
                {staO()}
                {staO()}
            </div>
        )
    }

    if (rating <= 3) {
        return (
            <div className="iStar">
                {staA()}
                {staA()}
                {staA()}
                {staO()}
                {staO()}
            </div>
        )
    }

    if (rating <= 4) {
        return (
            <div className="iStar">
                {staA()}
                {staA()}
                {staA()}
                {staA()}
                {staO()}
            </div>
        )
    }
    if (rating <= 5) {
        return (
            <div className="iStar">
                {staA()}
                {staA()}
                {staA()}
                {staA()}
                {staA()}
            </div>
        )
    }
};


