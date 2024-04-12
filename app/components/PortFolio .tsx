import React, { useState } from 'react';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
interface PortfolioProps {
    images: StaticImageData[];
}

const Portfolio: React.FC<PortfolioProps> = ({ images }) => {
    const [showAllImages, setShowAllImages] = useState(false);
    const router = useRouter();

    // Function to handle "Show More" button click
    const handleShowMoreClick = () => {
        // setShowAllImages(true);
        router.push('/portfolio');
    };

    // Decide which set of images to display based on the state
    const imagesToShow = showAllImages ? images : images.slice(0, 6);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 gap-2 pr-2 sm:gap-2 sm:pr-2 md:pr-0 md:gap-6 text-center">
            {imagesToShow.map((image: StaticImageData, index: number) => (
                <div key={index}>
                    <img src={image.src} alt={`Portfolio Image ${index + 1}`} className="w-full h-full object-cover hover:scale-105 hover:shadow-2xl" />
                </div>
            ))}
            {/* Show more button */}
            {!showAllImages && (
                // <div className="col-span-3">
                //     <button onClick={handleShowMoreClick} className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                //         Show More
                //     </button>
                // </div>
                <div className="col-span-3 mt-2 sm:mt-0">
                    <button onClick={handleShowMoreClick} className="bg-blue hover:bg-blue-700 text-white font-bold px-2 py-1 sm:py-2 sm:px-4 rounded hover:bg-white hover:text-blue transition duration-300 hover:shadow-xl">
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Portfolio;




