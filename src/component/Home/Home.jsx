import React, { useEffect, useState } from 'react';
import image1 from "../../../public/images/Rectangle 26.png"
import image2 from "../../../public/images/Rectangle 27.png"
import image3 from "../../../public/images/Rectangle 28.png"
import image4 from "../../../public/images/Sajek.png"
import image5 from "../../../public/images/Sreemongol.png"
import image6 from "../../../public/images/sundorbon.png"
import image7 from "../../../public/images/Rectangle 1.png"
import { NavLink } from 'react-router';

const Home = () => {
    const destinations = [
        {
            id: 1,
            name: "Cox's Bazar",
            desc: "Embark on a journey to the world’s longest natural sandy sea beach, stretching over 120 kilometers along the Bay of Bengal. Cox’s Bazar offers a unique blend of towering cliffs, colorful pagodas, and surfing waves. Whether you are watching the golden sunset at Inani Beach or exploring the bustling local fish markets, the salty breeze and serene atmosphere provide an unforgettable coastal escape.",
            img: image1
        },
        {
            id: 2,
            name: "Rangamati",
            desc: "Nestled among the lush green hills of the Chittagong Hill Tracts, Rangamati is a sanctuary of peace centered around the magnificent Kaptai Lake. Traverse the iconic Hanging Bridge, visit ancient Buddhist monasteries, and experience the rich cultural tapestry of the indigenous communities. The emerald waters and mist-covered mountains make it a paradise for nature lovers and photographers seeking tranquility away from the city.",
            img: image2
        },
        {
            id: 3,
            name: "Bandarban",
            desc: "Experience the majestic 'Roof of Bangladesh,' where the peaks of Nilgiri and Thanchi touch the clouds. Bandarban is home to the country's highest peaks and breathtaking waterfalls like Amiakhum. The winding roads through deep valleys and the golden architecture of the Buddha Dhatu Jadi temple offer a spiritual and adventurous retreat into the most ruggedly beautiful landscape the country has to offer.",
            img: image3
        },
        {
            id: 4,
            name: "Sajek Valley",
            desc: "Known as the Queen of Hills, Sajek Valley is located deep within the Verdant Hills of the Kasalong range. Rising 1,800 feet above sea level, it offers a literal walk above the clouds. The sunrise here is legendary, painting the valley in hues of orange and pink as the mist clears to reveal the lush valley below, while the vibrant culture of the local Lusai people adds warmth to the cool mountain air.",
            img: image4
        },
        {
            id: 5,
            name: "Sreemangal",
            desc: "Step into the tea capital of Bangladesh, a land covered in an endless carpet of vibrant green tea gardens. Sreemangal is a haven for biodiversity, featuring the Lawachara National Park where rare hoolock gibbons swing through the canopy. Savor the world-famous seven-layered tea while cycling through hilly trails, exploring pineapple plantations, and discovering the hidden wetlands of the Baikka Beel bird sanctuary.",
            img: image5
        },
        {
            id: 6,
            name: "Sundarbans",
            desc: "Venture into the mysterious depths of the world’s largest mangrove forest and a UNESCO World Heritage site. The Sundarbans is a labyrinth of tidal waterways and mudflats where the Royal Bengal Tiger roams freely. As you cruise through the narrow creeks of Kotka and Hiron Point, you will encounter spotted deer, saltwater crocodiles, and a symphony of exotic birds in this wild, untamed coastal frontier.",
            img: image6
        },
        {
            id: 7,
            name: "Sylhet",
            desc: "Sylhet is a land of spiritual heritage and natural wonders, characterized by the holy shrines of Sufi saints and the crystal-clear waters of Lalakhal. From the turquoise swamp forests of Ratargul to the cascading waterfalls of Jaflong at the Indian border, Sylhet offers a diverse landscape. The rolling hills of the Jafflong tea estates and the rain-washed greenery create a refreshing and soul-soothing travel experience.",
            img: image7
        }
    ];

    
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
    };
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
    };
    useEffect(() => {
        const timer = setInterval(nextSlide, 3000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const visibleThumbnails = destinations.slice(currentIndex, currentIndex + 3);

    if (visibleThumbnails.length < 3) {
        visibleThumbnails.push(...destinations.slice(0, 3 - visibleThumbnails.length));
    }

    return (
        <div
            className="hero min-h-screen transition-all duration-1000"
            style={{
                backgroundImage: `url(${destinations[currentIndex].img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>

            <div className="hero-content flex-col lg:flex-row gap-12 w-full max-w-7xl">
                {/* LEFT SIDE: Text Details */}
                <div className="text-white lg:w-2/5">
                    <h1 className="text-3xl font-bold uppercase drop-shadow-lg">
                        {destinations[currentIndex].name}
                    </h1>
                    <p className="py-6 text-xs opacity-90 leading-relaxed">
                        {destinations[currentIndex].desc}
                    </p>
                    <NavLink to={`/booking/${destinations[currentIndex].id}`}>
                        <button className="btn btn-warning px-10 rounded-md font-bold">
                            Booking Now →
                        </button>
                    </NavLink>
                </div>

                <div className="lg:w-3/5 flex flex-col items-center lg:items-start gap-8">
                    <div className="flex gap-5 transition-all duration-500 ease-in-out">
                        {visibleThumbnails.map((place) => (
                            <div
                                key={place.id}
                                onClick={() => setCurrentIndex(destinations.findIndex(d => d.id === place.id))}
                                className={`relative w-40 h-56 rounded-2xl overflow-hidden cursor-pointer border-4 transition-all duration-500 transform ${destinations[currentIndex].id === place.id
                                    ? "border-warning scale-105"
                                    : "border-transparent opacity-80"
                                    }`}
                            >
                                <img src={place.img} alt={place.name} className="w-full h-full object-cover" />
                                <div className="absolute bottom-4 left-4 font-bold text-white text-sm uppercase">
                                    {place.name}
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <button onClick={prevSlide} className="btn btn-circle btn-outline border-white text-white hover:bg-white hover:text-black">
                            ❮
                        </button>
                        <button onClick={nextSlide} className="btn btn-circle btn-outline border-white text-white hover:bg-white hover:text-black">
                            ❯
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;