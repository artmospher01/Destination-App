import React, { useState } from 'react';
import "../style/imageDetailSwap.css"
import arrowImageWhite from "../img/arrowImageWhite.png";

function ImageSwap(props) {
    const images = props.img;
    const [currentImage, setCurrentImage] = useState(0);
    const [currentImageNumber, setCurrentImageNumber] = useState(1);
    let startX = null;

    const totalImages = images.length;


    const handleTouchStart = (e) => {
        startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        const currentX = e.touches[0].clientX;
        if (startX && currentX - startX > 50) {
            handlePrevious();
        } else if (startX && currentX - startX < -50) {
            handleNext();
        }
    };

    const handleTouchEnd = () => {
        startX = null;
    };

    const handleNext = () => {
        const nextImage = currentImage + 1;
        if (nextImage === images.length) {
            setCurrentImage(0);
            setCurrentImageNumber(1);
        } else {
            setCurrentImage(nextImage);
            setCurrentImageNumber(nextImage + 1);
        }
    };

    const handlePrevious = () => {
        const prevImage = currentImage - 1;
        if (prevImage < 0) {
            setCurrentImage(images.length - 1);
            setCurrentImageNumber(totalImages);
        } else {
            setCurrentImage(prevImage);
            setCurrentImageNumber(prevImage + 1);

        }
    };

    function handleNextClick() {
        const nextImage = currentImage + 1;
        if (nextImage === images.length) {
            setCurrentImage(0);
            setCurrentImageNumber(1);
        } else {
            setCurrentImage(nextImage);
            setCurrentImageNumber(nextImage + 1);
        }

    }


    function handlePrevClick() {
        const prevImage = currentImage - 1;
        if (prevImage < 0) {
            setCurrentImage(images.length - 1);
            setCurrentImageNumber(totalImages);
        } else {
            setCurrentImage(prevImage);
            setCurrentImageNumber(prevImage + 1);

        }

    }

    function subImageCurrent(e) {
        let subIndex = currentImage + e
        // console.log("curent awal = ", +currentImage);
        // console.log("inx = ", +subIndex);
        if (subIndex > (totalImages - 1)) {

            subIndex = subIndex - (totalImages - 1)

            return subIndex
        }
        return subIndex
    }


    function handleSubChange(e) {
        const noImage = parseInt(e.target.dataset.id)
        setCurrentImage(noImage)
        setCurrentImageNumber(noImage + 1)

    }


    return (
        <div className="image-swap"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <img className='imgDetail' src={images[currentImage]} alt="Slide" />
            <div className="conSubImageDetail">
                <img onClick={handleSubChange} data-id={subImageCurrent(10)} className='subImageDetail1' src={images[subImageCurrent(10)]} alt="Slide" />
                <img onClick={handleSubChange} data-id={subImageCurrent(20)} className='subImageDetail2' src={images[subImageCurrent(20)]} alt="Slide" />
            </div>


            <div className='detailNext' onClick={handleNextClick}>
                <img src={arrowImageWhite} alt="next" />
            </div>
            <div className='detailPrev' onClick={handlePrevClick} >
                <img src={arrowImageWhite} alt="prev" />
            </div>

            <div className="image-number">{currentImageNumber}/{totalImages}</div>
        </div>
    );
}

export default ImageSwap;