import Slider from "react-slick";
import Banner01 from "@public/banners/Banner01.png";
import Banner02 from "@public/banners/Banner02.png";
import Banner03 from "@public/banners/Banner03.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const banners = [
    { src: Banner01, color: "#ffd200" },
    { src: Banner02, color: "#8c52ff" },
    { src: Banner03, color: "#5ce1e6" },
];

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-60 hover:opacity-100 transition-opacity z-10 cursor-pointer shadow-lg"
            onClick={onClick}
        >
            <ArrowForwardIos fontSize="medium" />
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-80 hover:opacity-100 transition-opacity z-10 cursor-pointer shadow-lg"
            onClick={onClick}
        >
            <ArrowBackIos fontSize="medium" />
        </div>
    );
};

export default function BannerSlider() {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "ease-in-out",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                {banners.map((banner, index) => (
                    <div key={index}>
                        <img src={banner.src} alt={`Banner ${index + 1}`} className="w-full" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
