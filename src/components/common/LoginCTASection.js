"use client";
import React from "react";

import Image from 'next/image';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Link from "next/link";

export default function LoginCTASection() {
    return (
        <div className="auth-data">
            <figure className="picture position-absolute start-0 end-0 bottom-0 top-0 bg-black">
                <Image
                    className='opacity-50'
                    src="/images/banner-cta.jpg"
                    alt="Eastern Regional Gathering"
                    fill
                />
            </figure>
            <div className='w-100 h-100 overflow-auto d-flex'>
                <div className='position-relative text-center w-100 py-10 px-4 px-sm-6 px-lg-10 m-auto margin-child'>
                    <h4 className='text-white mb-2 mb-xl-4'>2025 NADOI</h4>
                    <h2 className='text-white mb-4 mb-lg-6 mb-xl-8'>Eastern Regional Gathering</h2>
                    <h4 className='text-white'>September 12-14, 2025<br />
                        Carrollton, Georgia</h4>

                    <Link href='https://nadoi.org/event/easternregional' target="_blank" className='btn btn-primary btn-sm px-10 my-8 my-lg-12 my-xl-15'>REGISTER NOW!</Link>

                    <h6 className='text-white fw-semibold'>How Cross-Species Training Benefits Dog Trainers:<br />
                        A Hands-on Expereince Training Horses, Donkeys & Goats</h6>
                </div>
            </div>
        </div>
    );
};