'use client';

import { useState } from 'react';

import ArticalSection from "@/components/common/ArticalSection";
import CTASection from "@/components/common/CTASection";
import ServiceSection from "@/components/common/ServicesSection";

import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Link from 'next/link';
import Image from 'next/image';
import ProfileHeader from '@/components/ProfileHeader';

export default function Profile() {

    return (
        <>
            <ProfileHeader />
            <section className="bg-light py-8  py-xxl-12">
                <Container>
                    <Row className='g-4 g-lg-8 g-xxl-12 justify-content-center'>
                        <Col lg={5} xxl={4}>
                            <Card>
                                <CardBody>
                                    <h5 className="text-black mb-6 fw-medium"><strong>NADOI Number:</strong> 123</h5>

                                    <div className="d-inline-block w-100 text-center mb-8">
                                        <figure className="picture p-20 p-md-25 w-auto mx-auto bg-light">
                                            <Image
                                                src="/images/banner-home.jpg"
                                                alt="Lynellen"
                                                fill
                                            />
                                        </figure>
                                    </div>

                                    <h4 className="text-black fw-bold mb-6">Welcome, Lynellen</h4>

                                    <ul className="d-flex flex-column gap-3">
                                        <li className="d-flex align-items-start gap-2 gap-sm-3">
                                            <i className="icon p-3">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 22C13 17 20 16.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 16.4183 11 17 12 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </i>
                                            <div className="flex-fill">
                                                New Rochelle, NY<br />United States
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-start gap-2 gap-sm-3">
                                            <i className="icon p-3">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </i>
                                            <div className="flex-fill"><Link href="/">+1 (631) 428-4654</Link></div>
                                        </li>
                                        <li className="d-flex align-items-start gap-2 gap-sm-3">
                                            <i className="icon p-3">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </i>
                                            <div className="flex-fill text-break"><Link href="/">lynellen.nielsen@gmail.com</Link></div>
                                        </li>
                                    </ul>

                                    <div className="d-flex flex-column gap-2 my-8">
                                        <span className="h6 text-black fw-medium"><strong>Joined:</strong> 05/01/2025</span>
                                        <span className="h6 text-black fw-medium"><strong>Expires:</strong> 05/01/2026</span>
                                    </div>

                                    <ul className="d-flex flex-column gap-5">
                                        <li>
                                            <strong>Membership Class:</strong><br />
                                            Associate<br />
                                            <figure className="picture p-10 w-auto mt-2">
                                                <Image
                                                    src="/images/image-membership-1.png"
                                                    alt="Associate"
                                                    fill
                                                />
                                            </figure>
                                        </li>
                                        <li>
                                            <strong>Member Type: </strong>(do not display in phase 1)
                                            Dog Walker
                                        </li>
                                        <li>
                                            <strong>Certifications:</strong><br />
                                            None<br />
                                            <Link href="/">Learn About Earning Certifications</Link>
                                        </li>
                                        <li>
                                            <strong>CEU Credits:</strong><br />
                                            How do we tally these?
                                        </li>
                                        <li>
                                            <strong>Committees:</strong><br />
                                            Bylaws Committee/Work Group<br />
                                            Committee Chairs<br />
                                            Communications & Publications<br />
                                            Continuing Education<br />
                                            Finance Committee<br />
                                            Training and Education Committee,<br />
                                            Website Committee
                                        </li>
                                        <li>
                                            <strong>Notifications:</strong><br />
                                            Browser<br />
                                            Email<br />
                                            SMS
                                        </li>
                                    </ul>

                                    <ul className='link-social d-flex gap-3 w-100 justify-content-xl-center my-6 my-sm-8'>
                                        <li>
                                            <Link className='icon rounded-circle p-5 p-md-6' href="/">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.2392 16V8.70218H11.6878L12.0552 5.85725H9.2392V4.04118C9.2392 3.21776 9.46692 2.65661 10.649 2.65661L12.1543 2.65599V0.111384C11.894 0.0775563 11.0004 0 9.96041 0C7.78873 0 6.30196 1.32557 6.30196 3.75942V5.85725H3.84595V8.70218H6.30196V16H9.2392Z" fill="currentColor" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='icon rounded-circle p-5 p-md-6' href="/">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 0H4.00015C1.8004 0 0.000244141 1.80015 0.000244141 3.9999V12.0001C0.000244141 14.1993 1.8004 16 4.00015 16H12C14.1997 16 15.9999 14.1993 15.9999 12.0001V3.9999C15.9999 1.80015 14.1997 0 12 0ZM14.6665 12.0001C14.6665 13.4701 13.4707 14.6666 12 14.6666H4.00015C2.52999 14.6666 1.33361 13.4701 1.33361 12.0001V3.9999C1.33361 2.52955 2.52999 1.33337 4.00015 1.33337H12C13.4707 1.33337 14.6665 2.52955 14.6665 3.9999V12.0001Z" fill="currentColor" />
                                                    <path d="M12.3337 4.66649C12.886 4.66649 13.3337 4.21878 13.3337 3.66651C13.3337 3.11424 12.886 2.66653 12.3337 2.66653C11.7814 2.66653 11.3337 3.11424 11.3337 3.66651C11.3337 4.21878 11.7814 4.66649 12.3337 4.66649Z" fill="currentColor" />
                                                    <path d="M7.9999 3.99991C5.79035 3.99991 4 5.79045 4 7.99981C4 10.2084 5.79035 12.0001 7.9999 12.0001C10.2088 12.0001 11.9998 10.2084 11.9998 7.99981C11.9998 5.79045 10.2088 3.99991 7.9999 3.99991ZM7.9999 10.6667C6.52732 10.6667 5.33337 9.47278 5.33337 7.99981C5.33337 6.52684 6.52732 5.33327 7.9999 5.33327C9.47248 5.33327 10.6664 6.52684 10.6664 7.99981C10.6664 9.47278 9.47248 10.6667 7.9999 10.6667Z" fill="currentColor" />
                                                </svg>

                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='icon rounded-circle p-5 p-md-6' href="/">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.4001 14.4V9.71201C14.4001 7.40801 13.9041 5.64801 11.2161 5.64801C9.9201 5.64801 9.0561 6.35201 8.7041 7.02401H8.6721V5.85601H6.1281V14.4H8.7841V10.16C8.7841 9.04001 8.9921 7.96801 10.3681 7.96801C11.7281 7.96801 11.7441 9.23201 11.7441 10.224V14.384H14.4001V14.4ZM1.8081 5.85601H4.4641V14.4H1.8081V5.85601ZM3.1361 1.60001C2.2881 1.60001 1.6001 2.28801 1.6001 3.13601C1.6001 3.98401 2.2881 4.68801 3.1361 4.68801C3.9841 4.68801 4.6721 3.98401 4.6721 3.13601C4.6721 2.28801 3.9841 1.60001 3.1361 1.60001Z" fill="currentColor" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='icon rounded-circle p-5 p-md-6' href="/">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.01 4.01218C14.0969 4.01218 13.2544 3.70968 12.5778 3.19936C11.8019 2.61436 11.2444 1.75624 11.0475 0.767177C10.9981 0.518486 10.9722 0.265712 10.97 0.0121765H8.36154V7.13968L8.35841 11.0437C8.35841 12.0875 7.67873 12.9725 6.73654 13.2837C6.45432 13.377 6.15707 13.4165 5.86029 13.4C5.46779 13.3784 5.09997 13.26 4.78029 13.0687C4.09997 12.6619 3.63872 11.9237 3.62622 11.0794C3.60654 9.75968 4.67341 8.68374 5.99216 8.68374C6.25247 8.68374 6.50248 8.72624 6.73654 8.80343V6.15499C6.48966 6.11843 6.23841 6.09936 5.98435 6.09936C4.54091 6.09936 3.19091 6.69936 2.22591 7.7803C1.49654 8.59718 1.05904 9.63936 0.991537 10.7322C0.903099 12.1678 1.42841 13.5325 2.44716 14.5394C2.59685 14.6872 2.75404 14.8244 2.91841 14.9509C3.79185 15.6231 4.85966 15.9875 5.98435 15.9875C6.23841 15.9875 6.48966 15.9687 6.73654 15.9322C7.78716 15.7766 8.75654 15.2956 9.52154 14.5394C10.4615 13.6103 10.9809 12.3769 10.9865 11.0641L10.9731 5.23405C11.4226 5.58076 11.915 5.86793 12.4381 6.08843C13.2565 6.43374 14.1244 6.60874 15.0175 6.60843V4.01155C15.0181 4.01218 15.0106 4.01218 15.01 4.01218Z" fill="currentColor" />
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='icon rounded-circle p-5 p-md-6' href="/">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.1909 4.39337C15.0181 3.75076 14.5114 3.2442 13.8689 3.07116C12.6951 2.75 7.99981 2.75 7.99981 2.75C7.99981 2.75 3.30472 2.75 2.13092 3.059C1.50076 3.23185 0.981758 3.75087 0.808906 4.39337C0.5 5.56707 0.5 8.00122 0.5 8.00122C0.5 8.00122 0.5 10.4476 0.808906 11.609C0.981922 12.2515 1.48841 12.7581 2.13101 12.9311C3.31707 13.2524 8 13.2524 8 13.2524C8 13.2524 12.6951 13.2524 13.8689 12.9434C14.5115 12.7704 15.0181 12.2639 15.1911 11.6214C15.4999 10.4476 15.4999 8.01354 15.4999 8.01354C15.4999 8.01354 15.5123 5.56705 15.1909 4.39337ZM6.50492 10.2499V5.75244L10.4093 8.00117L6.50492 10.2499Z" fill="currentColor" />
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>

                                    <div className="d-inline-block text-center w-100">
                                        <Button variant="primary" size="lg" className="px-6 px-xl-10 mx-auto">GET CERTIFIED</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={7} xxl={8}>
                            <Card className="mb-4 mb-lg-8 mb-xxl-12">
                                <CardBody>
                                    <CardTitle>My Content :</CardTitle>

                                    <ul className="d-flex flex-column gap-5">
                                        <li>
                                            <strong>What’s New:</strong>{' '}
                                            <Link href="/news/associate-membership">1/1/2025 - Big News: Associate Membership</Link>
                                        </li>
                                        <li>
                                            <strong>Upcoming Events:</strong>{' '}
                                            <Link href="/events/eastern-regional-gathering">Eastern Regional Gathering, 9/14/2025, Carrollton, GA</Link>
                                        </li>
                                        <li>
                                            <strong>Take a Quick Survey:</strong>{' '}
                                            <Link href="/">Are You Certified?</Link>
                                        </li>
                                        <li>
                                            <strong>Pending CEU Credits:</strong>{' '}
                                            <Link href="/ceu/pending">Not sure how to describe these</Link>
                                        </li>
                                        <li>
                                            <strong>My Products:</strong>{' '}
                                            <Link href="/products/member">Link to member’s product page</Link>
                                        </li>
                                        <li>
                                            <strong>Articles:</strong>{' '}
                                            <Link href="/blog/recent">Link to member’s most recent blog post</Link>
                                        </li>
                                        <li>
                                            <strong>Videos:</strong>{' '}
                                            <Link href="/videos/recent">Link to member’s most recent video</Link>
                                        </li>
                                        <li>
                                            <strong>Job Opportunities:</strong>{' '}
                                            <Link href="/jobs/member">Link to member’s job opportunity posts</Link>
                                        </li>
                                        <li>
                                            <strong>Featured Members:</strong>{' '}
                                            <Link href="/members/michelle-shiraldi">Michelle Shiraldi, True Love dog Training</Link>
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>

                            <Card className="mb-4 mb-lg-8 mb-xxl-12">
                                <CardBody>
                                    <CardTitle>Professional Profile :</CardTitle>
                                    <ul className="d-flex flex-column gap-5">
                                        <li>
                                            <strong>Website:</strong>{' '}
                                            <a href="http://nielsenmarketingny.com" target="_blank" rel="noopener noreferrer">
                                                nielsenmarketingny.com
                                            </a>
                                        </li>

                                        <li>
                                            <strong>Breed Experience:</strong>{' '}
                                            <Link href="/breeds/akbash">Akbash Dog</Link>,{' '}
                                            <Link href="/breeds/german-shepherd">German Shepherd Dog</Link>,{' '}
                                            <Link href="/breeds/great-pyrenees">Great Pyrenees</Link>,{' '}
                                            <Link href="/breeds/mixed">Mixed Breed</Link>,{' '}
                                            <Link href="/breeds/samoyed">Samoyed</Link>,{' '}
                                            <Link href="/breeds/shetland-sheepdog">Shetland Sheepdog</Link>
                                        </li>

                                        <li>
                                            <strong>Venue Experience:</strong>{' '}
                                            <Link href="/venues/barn-hunt">Barn Hunt</Link>,{' '}
                                            <Link href="/venues/conformation">Conformation</Link>,{' '}
                                            <Link href="/venues/herding">Herding</Link>,{' '}
                                            <Link href="/venues/obedience">Obedience Competition</Link>,{' '}
                                            <Link href="/venues/pet-training">Pet Training</Link>,{' '}
                                            <Link href="/venues/puppy-social">Puppy Social/KPT</Link>,{' '}
                                            <Link href="/venues/tracking">Tracking</Link>
                                        </li>

                                        <li>
                                            <strong>Education:</strong><br />
                                            After competing in conformation and obedience classes since the mid-sixties, I became a vol-
                                            unteer instructor for the Snake River Canyon Kennel Club of Idaho. Through those activities, I
                                            was noticed by several vets in the area and became their go to trainer for dog behavior prob-
                                            lems, particularly aggression. My early influencers were Milo Pearsall a founding member of
                                            NADOI, Jack Volhard, and Job Michael Evans followed by the British influencers, Roy Hunter, Ian
                                            Dunbar, and John Rogerson.<br />
                                            <Link href="/education/more">More Information</Link>
                                        </li>

                                        <li>
                                            <strong>Experience:</strong><br />
                                            I taught competition and pet manners dog training classes in Twin Falls, Idaho, from 1977 to
                                            2006. Since retiring, I have remained active in administrative support activities, such as website
                                            and database development and serving as NADOI treasurer from 2019-2023.
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle>Personal Information :</CardTitle>
                                    <ul className="d-flex flex-column gap-5">
                                        <li>
                                            <strong>Address:</strong> 48 Burling Lane, Suite 317, New Rochelle, NY 10801
                                        </li>

                                        <li>
                                            <strong>Hobbies:</strong> Painting, Drawing, Photography, Reading, Hiking, Gardening, Animal Experiences
                                        </li>

                                        <li>
                                            <strong>Birthdate:</strong> 02/09/1964
                                        </li>

                                        <li>
                                            <strong>Additional Information:</strong><br />
                                            I have always been inspired by the colors and textures in the natural world around me - from a
                                            tiny weed in a field to the majestic mountains of Switzerland, to the light in a dog’s eyes. I tend
                                            to see interesting perspectives and shapes in everyday scenes, and love using saturated color,
                                            amplified contrast, and exaggerated movement to enhance unique natural patterns and com-
                                            position. The results are dramatically stylized scenes and portraits that evoke strong emotions
                                            to draw the viewer in.
                                        </li>
                                    </ul>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section >
            <ServiceSection
                title="Why become a Certified member?"
                services={[
                    {
                        image: "/images/icon-achievement.png",
                        title: "Recognition of Your Training Skills & Achievements",
                        description: "Only trainers with high levels of expertise and expereince can become NADOI-certified."
                    },
                    {
                        image: "/images/icon-idea.png",
                        title: "Marketing Tools and Business Support",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-gears.png",
                        title: "Access to Member Only Library",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-events.png",
                        title: "Exclusive Member Events and Webinars",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-professional.png",
                        title: "Professional Devlopment and Education",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-networking.png",
                        title: "Networking Opportunities",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-target.png",
                        title: "Advocacy and Resources",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-coupon.png",
                        title: "Offers and Discounts from NADOI partners",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    }
                ]}
            />
            <CTASection />
            <ArticalSection />
        </>
    );
}
