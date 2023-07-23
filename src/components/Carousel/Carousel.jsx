import { useEffect, useState } from "react";
import CarouselSlide from "./CarouselSlide";
import styles from "./Carousel.module.scss";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const Carousel = ({ data }) => {
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

	useEffect(() => {
		setInterval(() => handleNextClick(), 6000);
	}, []);

	return (
		<section className={`${styles.wrapper}`}>
			<button
				onClick={handlePreviousCLick}
				className={`${styles.carouselAction} ${styles.actionPrev}`}
			>
				{<HiChevronLeft />}
			</button>
			{data.map(
				(data, i) =>
					i === currentlyDisplayed && (
						<CarouselSlide data={data} key={data.id} />
					)
			)}
			<button
				onClick={handleNextClick}
				className={`${styles.carouselAction} ${styles.actionNext}`}
			>
				{<HiChevronRight />}
			</button>
		</section>
	);
};

export default Carousel;
