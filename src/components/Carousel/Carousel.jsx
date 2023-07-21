import { useEffect, useState } from "react";
import CarouselSlide from "./CarouselSlide";

const Carousel = ({data}) => {

    const [currentlyDisplayed, setCurrentlyDisplayed] = useState(0);

    const handleNextClick = () => {
        if (currentlyDisplayed === data.length - 1) {
            setCurrentlyDisplayed(0);
            return;
        }
        setCurrentlyDisplayed(currentlyDisplayed + 1);
    };

    const handlePreviousCLick = () => {
        if (currentlyDisplayed === 0) {
            setCurrentlyDisplayed(data.length - 1);
            return;
        }
        setCurrentlyDisplayed(currentlyDisplayed - 1);
    };

    return (
        <div>
            <button onClick={handlePreviousCLick}>Prev</button>
            {data.map((data, i) => {
                return (
                    <>
                        {i === currentlyDisplayed && (
                            <CarouselSlide data={data} key={data.id}/>
                        )}
                    </>
                );
            })}
            <button onClick={handleNextClick}>Next</button>
        </div>
    );
};

export default Carousel;