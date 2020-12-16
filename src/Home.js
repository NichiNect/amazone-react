import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                {/* <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB.CB428684220_.jpg"
                    alt=""
                /> */}
                {/* <img
                    alt="Holiday Deals"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
                ></img> */}
                <img
                    className="home_image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg"
                    alt="Shop gift guides"
                />

                <div className="home_row">
                    {/* Product */}
                    <Product
                        id="123123"
                        title="The Lean StartUp"
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price={25.99}
                        rating={3}
                    />
                    {/* Product */}
                    <Product
                        id="198123"
                        title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Silver"
                        image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
                        price={478.25}
                        rating={4}
                    />
                </div>
                <div className="home_row">
                    {/* Product */}
                    <Product
                        id="128123"
                        title="The Witcher RPG Core Rulebook"
                        image="https://m.media-amazon.com/images/I/61LQjcMQAQL._AC_UY218_.jpg"
                        price={42.48}
                        rating={4}
                    />
                    {/* Product */}
                    <Product
                        id="1128123"
                        title="Bose Noise Cancelling Wireless Bluetooth Headphones 700, with Alexa Voice"
                        image="https://m.media-amazon.com/images/I/51ntWa1Q0sL._AC_UY218_.jpg"
                        price={120.25}
                        rating={2}
                    />
                    {/* Product */}
                    <Product
                        id="119123"
                        title="MSI Gaming GeForce RTX 3060 Ti 8GB GDRR6 256-Bit HDMI/DP Tri-Frozr 2 TORX Fan 4.0 Ampere Architecture RGB OC Graphics Card"
                        image="https://m.media-amazon.com/images/I/813SQ6Zc6IL._AC_UY218_.jpg"
                        price={892.85}
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    {/* Product */}
                    <Product
                        id="19118123"
                        title="Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6`` Full HD 144Hz 3ms IPS Display, 16GB Dual-Channel DDR4, 512GB NVMe SSD, Wi-Fi 6, RGB Keyboard, PH315-53-72XD"
                        image="https://m.media-amazon.com/images/I/71k45hZkLmL._AC_UY218_.jpg"
                        price={1170.99}
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
