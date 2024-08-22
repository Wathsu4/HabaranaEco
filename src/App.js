import React, { useState } from "react";
import logo from "../src/assets/HET_Icon_2.png";
import mainimg from "../src/assets/419427083_318627867824895_3522410460449317256_n.jpg";
import img1 from "../src/assets/gallary1.jpg";
import img2 from "../src/assets/gallary2.jpg";
import img3 from "../src/assets/gallary3.jpg";
import img4 from "../src/assets/gallary4.jpg";
import img5 from "../src/assets/gallary5.jpg";
import img6 from "../src/assets/gallary6.jpg";
import img7 from "../src/assets/gallary7.jpg";
import img8 from "../src/assets/gallary8.jpg";
import img9 from "../src/assets/gallary9.jpg";
import img10 from "../src/assets/gallary10.jpg";
import img11 from "../src/assets/gallary11.jpg";
import img12 from "../src/assets/gallary12.jpg";
import img13 from "../src/assets/gallary13.jpg";
import img14 from "../src/assets/gallary14.jpg";
import coolimg from "../src/assets/contactus.webp";
import about from "../src/assets/Group 2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const initialImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];
  const [displayedImages, setDisplayedImages] = useState(
    initialImages.slice(0, 6)
  );
  const [showMore, setShowMore] = useState(false);
  const [clickedImageIndex, setClickedImageIndex] = useState(null);

  const handleShowMore = () => {
    setDisplayedImages(initialImages);
    setShowMore(true);
  };

  const handleShowLess = () => {
    setDisplayedImages(initialImages.slice(0, 6));
    setShowMore(false);
  };

  const handleImageClick = (index) => {
    setClickedImageIndex(index);
  };

  const handleCloseClick = () => {
    setClickedImageIndex(null);
  };

  const handleNextClick = () => {
    setClickedImageIndex((prevIndex) =>
      prevIndex === initialImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousClick = () => {
    setClickedImageIndex((prevIndex) =>
      prevIndex === 0 ? initialImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-transparent py-4 px-32 flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <div className="flex items-center space-x-1">
          <img src={logo} alt="Logo" className="h-12 w-24" />
          <div className="text-white text-2xl font-bold font-serif">
            Habarana <span className="text-green-600">E</span>co
          </div>
        </div>
        <nav className="space-x-4  text-lg">
          <a
            href="#home"
            className="text-white hover:text-green-400 font-serif "
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-green-400 font-serif"
          >
            About Us
          </a>
          <a
            href="#gallery"
            className="text-white hover:text-green-400 font-serif"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-white hover:text-green-400 font-serif"
          >
            Contact Us
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-0">
        {/* Hero Section */}
        <section
          id="home"
          className="relative bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${mainimg})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
            <h1 className="text-white text-5xl font-extrabold tracking-wide leading-tight text-center shadow-lg px-4 font-serif py-4">
              Immerse Yourself in the Tranquility of Nature <br /> with Habarana
              Eco Tours
            </h1>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="px-8 bg-gray-300 py-12">
          <div className="flex w-full px-32">
            <div className="flex flex-col w-1/2">
              <h2 className="text-4xl font-bold mb-4 text-green-600 text-center font-serif pt-8">
                About Us
              </h2>
              <p className="text-lg px-8 text-justify font-serif">
                Habarana Eco offers an immersive experience into the heart of
                nature. We specialize in providing unique village tours that
                highlight the rich culture, traditions, and eco-friendly
                practices of Sri Lankan village life. Our tours are designed to
                connect you with nature, offering a serene escape from the
                hustle and bustle of city life.
              </p>
              <p className="text-lg mt-4 px-8 text-justify font-serif">
                Our mission is to promote sustainable tourism by educating our
                guests about the importance of preserving natural habitats and
                supporting local communities. Whether it's exploring lush
                greenery, participating in traditional farming activities, or
                simply enjoying a peaceful boat ride on the village lake,
                Habarana Eco ensures that each experience is authentic and
                enriching.
              </p>
              <p className="text-lg mt-4 px-8 text-justify font-serif">
                Join us at Habarana Eco for a journey that not only rejuvenates
                your soul but also fosters a deeper appreciation for the
                environment. We are committed to creating memorable experiences
                while maintaining a positive impact on the ecosystem and the
                local communities we engage with.
              </p>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <img src={about} alt="about" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section
          id="gallery"
          className="px-8 py-12 bg-white relative bg-cover bg-center flex flex-col items-center"
          style={{
            backgroundImage: `url(${coolimg})`,
            backgroundSize: "cover",
          }}
        >
          {/* Overlay with reduced opacity */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>

          {/* Content goes inside a relative container to overlay the opacity effect */}
          <div className="relative z-10 w-full flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-4 text-green-600 text-center font-serif pb-2 pt-4">
              Gallery
            </h2>
            <p className="text-m  text-white text-center font-serif  pb-8 ">
              Step into a world of vibrant moments and captivating visuals. Our
              gallery is a curated collection of snapshots that tell<br></br>
              the story of our journey, celebrate our milestones, and showcase
              the beauty around us. Each image is a window <br></br>into our
              experiences, capturing the essence of what makes us unique.
              <br></br>
              Explore and immerse yourself in the stories we share through our
              gallery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-32">
              {displayedImages.map((image, index) => (
                <div
                  key={index}
                  className="flex justify-center"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={image}
                    alt={`Gallery item ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg cursor-pointer"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              {showMore ? (
                <button
                  onClick={handleShowLess}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none font-serif"
                >
                  Show Less
                </button>
              ) : (
                <button
                  onClick={handleShowMore}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none font-serif"
                >
                  Show More
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Display Clicked Image */}
        {clickedImageIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="relative p-4 rounded-lg shadow-xl max-w-[520px] max-h-128 flex items-center">
              {/* Previous Button */}
              <button
                className="absolute left-[-60px] text-white p-4 rounded-full text-5xl z-10"
                onClick={handlePreviousClick}
              >
                &lt;
              </button>

              {/* Image */}
              <img
                src={initialImages[clickedImageIndex]}
                alt="Clicked"
                className="w-full h-full object-contain"
              />

              {/* Next Button */}
              <button
                className="absolute right-[-60px] text-white p-4 rounded-full text-5xl z-10"
                onClick={handleNextClick}
              >
                &gt;
              </button>

              {/* Close Button */}
              <button
                className="absolute top-0 right-0 text-[#D22B2B] text-5xl"
                onClick={handleCloseClick}
              >
                &times;
              </button>
            </div>
          </div>
        )}
        {/* Contact Us Section */}

        <section id="contact" className="px-8 bg-gray-300 py-12">
          {/* Overlay for better text readability */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-32">
            <div className="text-white md:w-1/2 p-4">
              <h2 className="text-4xl font-bold mb-4 text-green-600  font-serif border-b-2 border-[#C2B280] pb-2">
                Contact Us
              </h2>
              <p className="mb-2 text-lg font-serif text-black">
                <FontAwesomeIcon icon={faEnvelope} className="" />{" "}
                habaranaecotours@gmail.com
              </p>
              <p className="mb-2 text-lg font-serif text-black">
                <FontAwesomeIcon icon={faPhone} className="" /> +94 74 355 6966
              </p>
            </div>
            <div className="text-white md:w-1/2 p-4 flex flex-col items-center md:items-center">
              <p className="mb-4 text-2xl font-serif text-green-600">
                Follow us on social media
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://web.facebook.com/habaranaecotours"
                  className="text-blue-600 hover:underline transform transition-transform duration-300 hover:scale-110"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a
                  href="https://www.instagram.com"
                  className="text-pink-600 hover:underline transform transition-transform duration-300 hover:scale-110"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a
                  href="https://www.twitter.com"
                  className="text-blue-400 hover:underline transform transition-transform duration-300 hover:scale-110"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-4 bg-green-600 text-white text-center">
          &copy; 2023 Habarana Eco. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;
