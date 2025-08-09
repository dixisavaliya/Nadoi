"use client";
import React from "react";

import Image from 'next/image';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-12 py-md-15 py-lg-20  py-xl-25 position-relative text-center">
            <figure className="picture position-absolute start-0 end-0 bottom-0 top-0">
                <Image
                    src="/images/banner-cta.jpg"
                    alt="Eastern Regional Gathering"
                    fill
                />
            </figure>
            <Container className='position-relative '>
                <h3 className='text-white mb-2 mb-xl-4'>2025 NADOI</h3>
                <h1 className='text-white mb-4 mb-lg-6 mb-xl-8'>Eastern Regional Gathering</h1>
                <h3 className='text-white'>September 12-14, 2025<br />
                    Carrollton, Georgia</h3>

                <Link href='https://nadoi.org/event/easternregional' target="_blank" className='btn btn-primary btn-sm px-10 my-8 my-lg-12 my-xl-15'>REGISTER NOW!</Link>

                <h4 className='text-white fw-semibold'>How Cross-Species Training Benefits Dog Trainers:<br />
                    A Hands-on Expereince Training Horses, Donkeys & Goats</h4>
            </Container>
        </section>
    );
};