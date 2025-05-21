import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Box, Image } from "@mantine/core";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

export default function SliderCarousel() {
    const slides = [slide1, slide2, slide3];

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop
            style={{
                width: "100%",
                maxWidth: "100%",
                margin: "0 auto",
                borderRadius: 8,
                overflow: "hidden",
                background: "#eee",
            }}
        >
            {slides.map((src, idx) => (
                <SwiperSlide key={idx}>
                    <Box
                        w="100%"
                        style={{
                            aspectRatio: "3 / 1", // Garantir 1200x400 (3:1) em qualquer tamanho
                            transition: "transform 0.5s",
                            "&:hover": {
                                transform: "scale(1.02)", // Pequeno zoom ao passar o mouse
                            },
                        }}
                    >
                        <Image
                            src={src}
                            alt={`Slide ${idx + 1}`}
                            fit="cover" // Cobre o espaço disponível mantendo dimensão
                            w="100%"
                            h="100%"
                        />
                    </Box>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
