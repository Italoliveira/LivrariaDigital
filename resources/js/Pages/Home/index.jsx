import React from "react";
import BannerSlider from "@/Components/BannerSlider";
import Main from "@/Layouts/Main";
import Slider from "react-slick";
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 right-4 transform h-full bg-black"
            onClick={onClick}
            aria-label="Próximo"
        >
            <ArrowRight fontSize="medium" />
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full opacity-80 hover:opacity-100 transition-opacity z-10 cursor-pointer shadow-lg"
            
            aria-label="Anterior"
        >
            <ArrowLeft fontSize="medium" onClick={onClick}/>
        </div>
    );
};

const ProductCard = ({ product }) => {
    return (
        <div className="p-2">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="mt-2">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default function Home() {
    // Dados de exemplo de produtos em promoção
    const promoProducts = [
        {
            id: 1,
            name: "Produto 1",
            price: "R$ 99,90",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Produto 2",
            price: "R$ 149,90",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Produto 3",
            price: "R$ 199,90",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            name: "Produto 4",
            price: "R$ 249,90",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 5,
            name: "Produto 5",
            price: "R$ 299,90",
            image: "https://via.placeholder.com/150",
        },
    ];

    // Configuração do React Slick
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Main>
            <BannerSlider />

            <div className="py-4 px-2 space-y-4">
                <Slider {...settings}>
                    {promoProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </Slider>

                <div>{/* Outros componentes ou conteúdo */}</div>
            </div>
        </Main>
    );
}
