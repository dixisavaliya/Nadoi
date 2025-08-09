"use client";
import React from "react";

import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Link from 'next/link';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const articles = [
    {
        image: "/images/image-article-1.jpg",
        category: "NADOI NOTES",
        title: "Blog Article Title Here In Initial Caps.",
        excerpt: "First few lines of the blog article here. First few lines of the blog article here. First few lines of the blog article here. First few lines of the blog article here. First few lines of the blog article...",
        link: "/"
    },
    {
        image: "/images/image-article-2.jpg",
        category: "LEGISLATIVE ISSUES",
        title: "Blog Article Title Here In Initial Caps.",
        excerpt: "First few lines of the blog article here. First few lines of the blog article here. First few lines of the blog article here. First few lines of the blog article here. First few lines of the blog article...",
        link: "/"
    },
    {
        image: "/images/image-article-3.jpg",
        category: "THIRD BLOG CATEGORY",
        title: "Blog Article Title Here In Initial Caps.",
        excerpt: "First few lines of the blog article here. First few lines of the blog article here. First few lines of the blog article here. First few lines of the blog article here. First few lines of the blog article...",
        link: "/"
    }
];

export default function ArticalSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="py-12 py-md-15 py-lg-20 py-xl-25">
            <Container>
                <h2 className='mb-8 mb-lg-12 mb-xl-15 text-center'>Latest News and Articles</h2>

                <div className='slider-article'>
                    <Slider {...settings}>
                        {articles.map((item, index) => (
                            <div className='slide-item' key={index}>
                                <figure className="picture bg-light mb-5">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                    />
                                </figure>
                                <h4 className='fw-semibold text-secondary mb-1'>{item.category}</h4>
                                <h4 className='fw-semibold text-primary mb-3'>{item.title}</h4>
                                <p>{item.excerpt}</p>
                                <Link href={item.link} className='fw-bold link link-primary'>
                                    READ MORE &gt;
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </section>
    );
};
