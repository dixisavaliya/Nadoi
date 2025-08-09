'use client';

import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import Image from 'next/image';
import { postData } from '@/utils/api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';


export default function ProfileHeader() {
    const [navActive, setNavActive] = useState(false);
    const router = useRouter();
    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const handleLogout = async () => {
        try {
            let result = await postData(`auth/logout`)
            localStorage.removeItem("token");
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            toast.success(result.message);
            router.push("/login");
        } catch (error) {
            console.error(error);
            toast.error(error.result.message);
        }
    };

    return (
        <nav className="bg-secondary position-relative">
            <Container className="d-flex align-items-center gap-10">
                <span className="d-flex d-lg-none align-items-center gap-2 py-4 flex-fill fw-semibold" onClick={toggleNav}>
                    <i className="icon p-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H15M3 6H21M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </i>
                    Menu
                </span>

                <span className={navActive ? 'nav-backdrop d-lg-none active' : 'nav-backdrop d-lg-none'} onClick={toggleNav}></span>
                <div className={navActive ? 'nav nav-account flex-fill active transition' : 'nav nav-account flex-fill transition'}>
                    <ul>
                        <li>
                            <Link href="/" className='active'>
                                FIND A MEMBER
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                PHOTOS
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                VIDEOS
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                EVENTS
                            </Link>

                        </li>
                        <li>
                            <Link href="/">
                                ARTICLES
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                JOBS
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                MARKETING TOOLS
                            </Link>
                        </li>
                        <li className='nav-sub'>
                            <Link href="/">
                                Profile
                            </Link>
                            <ul>
                                <li>
                                    <Link href="/">
                                        MEMBERSHIP
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        CERTIFICATIONS
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        COMMITTEES
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        CEU CREDITS
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        EDIT PROFILE
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="" onClick={handleLogout}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
                <i className="icon pt-5 pe-5 pt-xl-6 pe-xl-6">
                    <Image
                        src="/images/icon-notification.png"
                        alt="Notification"
                        fill
                    />
                </i>
            </Container>
        </nav>
    );
}
