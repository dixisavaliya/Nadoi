'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import { getToken } from '@/utils/api';

export default function Header() {
    const [navActive, setNavActive] = useState(false);

    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        const token = getToken(); // this accesses localStorage/cookie
        setHasToken(!!token);
    }, []);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    return (
        <header className="app-header bg-white">
            <div className='app-header-top bg-primary d-none d-lg-flex justify-content-end align-items-center'>
                <ul className='d-flex align-items-center gap-8 gap-xl-10 me-10 gap-xxl-15 me-xxl-15 text-uppercase'>
                    <li>
                        <Link className='link' href="/donate">
                            donate
                        </Link>
                    </li>
                    <li>
                        <Link className='link' href="/join-nadoi">
                            join nadoi
                        </Link>
                    </li>
                    {hasToken ?
                        <i className="fa-solid fa-user-tie" style={{ color: '#ffffff' }}></i>
                        : <li>
                            <Link className='link' href="/login">
                                member login
                            </Link>
                        </li>}
                    <li>
                        <Link className='icon pt-5 pe-5' href="/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </li>
                </ul>
                <Button href="/find-instructor" variant="secondary" className='rounded-0 text-white'>find an instructor</Button>
            </div>
            <Container className='d-flex align-items-center justify-content-between py-2 py-xl-4'>
                <Link href="/" className='brand-logo'>
                    <Image
                        src="/images/brand-logo.png"
                        alt="NADOI"
                        width={830}
                        height={429}
                    />
                </Link>

                <span className={navActive ? 'nav-backdrop d-lg-none active' : 'nav-backdrop d-lg-none'} onClick={toggleNav}></span>
                <div className={navActive ? 'nav active transition' : 'nav transition'}>
                    <ul>
                        <li>
                            <Link href="/" className='active'>
                                home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                about
                            </Link>
                        </li>
                        <li>
                            <Link href="/membership">
                                membership
                            </Link>
                        </li>
                        <li className='nav-sub'>
                            <Link href="/">
                                education
                            </Link>

                            <ul>
                                <li>
                                    <Link href="/webinars">
                                        webinars
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/news-articles">
                                        news and articles
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/nadoi-notes">
                                        nadoi notes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/trainers-tips">
                                        trainers&rsquo; tips
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/request-ceus">
                                        request ceus
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/events">
                                events
                            </Link>
                        </li>
                        <li>
                            <Link href="/resources">
                                resources
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us">
                                contact
                            </Link>
                        </li>
                        <li className='d-lg-none'>
                            <Link href="/donate">
                                donate
                            </Link>
                        </li>
                    </ul>

                    <Button href="/find-instructor" variant="secondary" className='mt-auto d-lg-none'>find an instructor</Button>
                </div>

                <div className='d-flex align-items-center d-lg-none gap-3 gap-sm-6'>

                    <Link className='link link-primary fw-bold small' href="/login">
                        LOGIN / JOIN
                    </Link>

                    <Link className='icon pt-5 pe-5' href="/">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                    <span className='icon p-3' onClick={toggleNav} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21M3 6H21M9 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>
            </Container>
        </header >
    );
}
