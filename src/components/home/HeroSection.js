"use client";
import React from "react";

import Image from 'next/image';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';

export default function HeroSection() {
    return (
        <section className="section-banner text-center text-md-start py-12 py-md-15 py-lg-20  py-xl-25 d-flex align-items-end align-items-md-center justify-content-center">
            <figure className="picture absolute-div">
                <Image
                    src="/images/banner-home.jpg"
                    alt="Transformational trainers for dogs"
                    fill
                />
            </figure>
            <Container className="position-relative">
                <h1 className='text-white fw-semibold'>Transformational<br />
                    trainers for dogs
                </h1>
                <h3 className='text-white mb-4 mb-md-6 mb-xl-8'>and their owners.</h3>

                <h5 className='text-white fw-normal mb-6 mb-md-8 mb-xl-12 mx-md-0 mx-auto'>NADOI promotes humane, diverse and effective
                    training menthods through deep knowledge, ongoing
                    expereince and continuing training excellence.</h5>

                <div className='d-flex flex-wrap justify-content-center justify-content-md-start align-items-center gap-2 gap-sm-6 gap-xl-10'>
                    <Button href="/find-instructor" variant="secondary" size="sm" className='px-3 px-sm-6 px-xl-10'>FIND AN INSTRUCTOR</Button>
                    <Button href="/join-nadoi" variant="primary" size="sm" className='px-3 px-sm-6 px-xl-10'>JOIN NADOI</Button>

                </div>
            </Container>
        </section>
    );
};
