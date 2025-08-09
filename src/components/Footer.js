import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from "react-bootstrap/Form";

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="app-footer bg-primary py-10 py-xl-15">
            <Container>
                <Row className='g-10 g-xl-4'>
                    <Col xl={4} xxl={5} className='text-xl-center'>
                        <Link className='logo-footer d-inline-block' href="/">
                            <Image
                                src="/images/logo-footer.png"
                                alt="NADOI"
                                width={"302"}
                                height={"323"}
                            />
                        </Link>
                        <ul className='link-social d-flex gap-4 w-100 justify-content-xl-center mt-4'>
                            <li>
                                <Link className='icon rounded-circle p-4' target="_blank" href="https://www.facebook.com/NADOI">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.2392 16V8.70218H11.6878L12.0552 5.85725H9.2392V4.04118C9.2392 3.21776 9.46692 2.65661 10.649 2.65661L12.1543 2.65599V0.111384C11.894 0.0775563 11.0004 0 9.96041 0C7.78873 0 6.30196 1.32557 6.30196 3.75942V5.85725H3.84595V8.70218H6.30196V16H9.2392Z" fill="currentColor" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link className='icon rounded-circle p-4' target="_blank" href="https://www.instagram.com/nadoiorg/">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0H4.00015C1.8004 0 0.000244141 1.80015 0.000244141 3.9999V12.0001C0.000244141 14.1993 1.8004 16 4.00015 16H12C14.1997 16 15.9999 14.1993 15.9999 12.0001V3.9999C15.9999 1.80015 14.1997 0 12 0ZM14.6665 12.0001C14.6665 13.4701 13.4707 14.6666 12 14.6666H4.00015C2.52999 14.6666 1.33361 13.4701 1.33361 12.0001V3.9999C1.33361 2.52955 2.52999 1.33337 4.00015 1.33337H12C13.4707 1.33337 14.6665 2.52955 14.6665 3.9999V12.0001Z" fill="currentColor" />
                                        <path d="M12.3337 4.66649C12.886 4.66649 13.3337 4.21878 13.3337 3.66651C13.3337 3.11424 12.886 2.66653 12.3337 2.66653C11.7814 2.66653 11.3337 3.11424 11.3337 3.66651C11.3337 4.21878 11.7814 4.66649 12.3337 4.66649Z" fill="currentColor" />
                                        <path d="M7.9999 3.99991C5.79035 3.99991 4 5.79045 4 7.99981C4 10.2084 5.79035 12.0001 7.9999 12.0001C10.2088 12.0001 11.9998 10.2084 11.9998 7.99981C11.9998 5.79045 10.2088 3.99991 7.9999 3.99991ZM7.9999 10.6667C6.52732 10.6667 5.33337 9.47278 5.33337 7.99981C5.33337 6.52684 6.52732 5.33327 7.9999 5.33327C9.47248 5.33327 10.6664 6.52684 10.6664 7.99981C10.6664 9.47278 9.47248 10.6667 7.9999 10.6667Z" fill="currentColor" />
                                    </svg>

                                </Link>
                            </li>
                            {/* <li>
                                <Link className='icon rounded-circle p-4' target="_blank" href="/">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4001 14.4V9.71201C14.4001 7.40801 13.9041 5.64801 11.2161 5.64801C9.9201 5.64801 9.0561 6.35201 8.7041 7.02401H8.6721V5.85601H6.1281V14.4H8.7841V10.16C8.7841 9.04001 8.9921 7.96801 10.3681 7.96801C11.7281 7.96801 11.7441 9.23201 11.7441 10.224V14.384H14.4001V14.4ZM1.8081 5.85601H4.4641V14.4H1.8081V5.85601ZM3.1361 1.60001C2.2881 1.60001 1.6001 2.28801 1.6001 3.13601C1.6001 3.98401 2.2881 4.68801 3.1361 4.68801C3.9841 4.68801 4.6721 3.98401 4.6721 3.13601C4.6721 2.28801 3.9841 1.60001 3.1361 1.60001Z" fill="currentColor" />
                                    </svg>
                                </Link>
                            </li> */}
                            <li>
                                <Link className='icon rounded-circle p-4' target="_blank" href="https://www.tiktok.com/@nadoi_official">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.01 4.01218C14.0969 4.01218 13.2544 3.70968 12.5778 3.19936C11.8019 2.61436 11.2444 1.75624 11.0475 0.767177C10.9981 0.518486 10.9722 0.265712 10.97 0.0121765H8.36154V7.13968L8.35841 11.0437C8.35841 12.0875 7.67873 12.9725 6.73654 13.2837C6.45432 13.377 6.15707 13.4165 5.86029 13.4C5.46779 13.3784 5.09997 13.26 4.78029 13.0687C4.09997 12.6619 3.63872 11.9237 3.62622 11.0794C3.60654 9.75968 4.67341 8.68374 5.99216 8.68374C6.25247 8.68374 6.50248 8.72624 6.73654 8.80343V6.15499C6.48966 6.11843 6.23841 6.09936 5.98435 6.09936C4.54091 6.09936 3.19091 6.69936 2.22591 7.7803C1.49654 8.59718 1.05904 9.63936 0.991537 10.7322C0.903099 12.1678 1.42841 13.5325 2.44716 14.5394C2.59685 14.6872 2.75404 14.8244 2.91841 14.9509C3.79185 15.6231 4.85966 15.9875 5.98435 15.9875C6.23841 15.9875 6.48966 15.9687 6.73654 15.9322C7.78716 15.7766 8.75654 15.2956 9.52154 14.5394C10.4615 13.6103 10.9809 12.3769 10.9865 11.0641L10.9731 5.23405C11.4226 5.58076 11.915 5.86793 12.4381 6.08843C13.2565 6.43374 14.1244 6.60874 15.0175 6.60843V4.01155C15.0181 4.01218 15.0106 4.01218 15.01 4.01218Z" fill="currentColor" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link className='icon rounded-circle p-4' target="_blank" href="https://www.youtube.com/channel/UC2lme4Hzjx2ff_RZtIC1mNQ">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.1909 4.39337C15.0181 3.75076 14.5114 3.2442 13.8689 3.07116C12.6951 2.75 7.99981 2.75 7.99981 2.75C7.99981 2.75 3.30472 2.75 2.13092 3.059C1.50076 3.23185 0.981758 3.75087 0.808906 4.39337C0.5 5.56707 0.5 8.00122 0.5 8.00122C0.5 8.00122 0.5 10.4476 0.808906 11.609C0.981922 12.2515 1.48841 12.7581 2.13101 12.9311C3.31707 13.2524 8 13.2524 8 13.2524C8 13.2524 12.6951 13.2524 13.8689 12.9434C14.5115 12.7704 15.0181 12.2639 15.1911 11.6214C15.4999 10.4476 15.4999 8.01354 15.4999 8.01354C15.4999 8.01354 15.5123 5.56705 15.1909 4.39337ZM6.50492 10.2499V5.75244L10.4093 8.00117L6.50492 10.2499Z" fill="currentColor" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link className='icon rounded-circle p-4' target="_blank" href="https://www.pinterest.com/dogobedience/">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.01 1.79 5.61 4.37 6.85-.06-.58-.11-1.47.02-2.1.12-.58.78-3.67.78-3.67s-.2-.41-.2-1.01c0-.94.55-1.64 1.23-1.64.58 0 .86.43.86.95 0 .58-.37 1.44-.56 2.24-.16.68.34 1.24 1.01 1.24 1.21 0 2.14-1.28 2.14-3.13 0-1.64-1.18-2.79-2.87-2.79-1.96 0-3.12 1.47-3.12 2.99 0 .58.22 1.2.5 1.54.05.06.05.12.04.18-.04.2-.13.63-.15.72-.02.09-.1.12-.23.07-.85-.39-1.38-1.6-1.38-2.58 0-2.1 1.52-4.03 4.4-4.03 2.31 0 4.1 1.65 4.1 3.86 0 2.29-1.44 4.13-3.44 4.13-.67 0-1.3-.35-1.51-.76l-.41 1.55c-.15.56-.55 1.26-.82 1.69.61.19 1.26.29 1.94.29 4.42 0 8-3.58 8-8s-3.58-8-8-8Z" fill="currentColor" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link className='icon rounded-circle p-4' target="_blank" href="https://bsky.app/profile/nadoi.bsky.social">
                                    <svg width="16" height="16" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M59.7 0C45.3 25.4 20.5 33.6 0 32.4c0 24.3 11.3 45.8 28.7 59.4C15 92.5 5.5 100.2 0 109.2c19.4-4.4 36.3-14.7 48.5-28.7 2.5 13.7 2.4 27.3-.5 39.5 3.7-.7 7.4-1.7 11-2.9 3.6 1.2 7.3 2.1 11 2.9-3-12.2-3-25.8-.5-39.5 12.2 14 29.1 24.3 48.5 28.7-5.5-9-15-16.7-28.7-17.4 17.4-13.6 28.7-35.1 28.7-59.4-20.5 1.2-45.3-7-59.7-32.4Z" fill="currentColor" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xl={8} xxl={7}>
                        <Row className='g-10 g-md-4'>
                            <Col sm={6} md={4}>
                                <h6 className='text-white mb-3 fw-semibold'>ABOUT NADOI</h6>
                                <ul className='d-flex flex-column gap-2'>
                                    <li>
                                        <Link className='link' href="/">
                                            History
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='link' href="/">
                                            Standards
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='link' href="/">
                                            Board
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='link' href="/">
                                            Committees
                                        </Link>
                                    </li>
                                </ul>
                                <h6 className='text-white mb-3 fw-semibold mt-10 mt-md-4'>MEMBERSHIP</h6>
                                <ul className='d-flex flex-column gap-2'>
                                    <li>
                                        <Link className='link' href="/join-nadoi">
                                            Why Join NADOI?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='link' href="/">
                                            Become a Member
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col sm={6} md={4}>
                                <h6 className='text-white mb-3 fw-semibold'>EDUCATION</h6>
                                <ul className='d-flex flex-column gap-2'>
                                    <li>
                                        <Link className='link' href="/">
                                            Webinars
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='link' href="/">
                                            Blogs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='link' href="/">
                                            NADOI Notes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='link' href="/">
                                            Member Products
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className='link' href="/">
                                            Trainers’ Tips
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='link' href="/">
                                            Request CEUs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='link' href="/">
                                            e-trainingfordogs.com
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col sm={6} md={4}>
                                <div className='d-flex flex-column gap-2'>
                                    <Link className='link h6 text-white w-auto me-auto fw-semibold' href="/">
                                        EVENTS
                                    </Link>
                                    <Link className='link h6 text-white w-auto me-auto fw-semibold' href="/">
                                        RESOURCES
                                    </Link>
                                    <Link className='link h6 text-white w-auto me-auto fw-semibold' href="/">
                                        CONTACT US
                                    </Link>
                                    <Link className='link h6 text-white w-auto me-auto fw-semibold' href="/find-instructor">
                                        LOCATE AN INSTRUCTOR
                                    </Link>
                                </div>
                                <h6 className='text-white mb-2 mt-8 fw-semibold'>STAY CONNECTED:</h6>

                                <Form>
                                    <div className="d-flex flex-column gap-3">
                                        <Form.Control type="email" placeholder="Enter Email Address" />
                                        <Form.Control type="text" placeholder="Enter Mobile" />
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>




                <div className='d-inline-block py-10 py-xl-15 w-100'>
                    <p className='text-gray-100'>Search engine friendly text about NADOI to be placed here. Search engine friendly text about NADOI to be placed here. Search engine friendly text about
                        NADOI to be placed here. Search engine friendly text about NADOI to be placed here. Search engine friendly text about NADOI to be placed here. Search
                        engine friendly text about NADOI to be placed here. Search engine friendly text about NADOI to be placed here. Search engine friendly text about NADOI to
                        be placed here. Search engine friendly text about NADOI to be placed here. Search engine friendly text about NADOI to be placed here. Search engine friendly
                        text about NADOI to be placed here. </p>
                </div>
                <span className='d-inline-block text-white fw-semibold text-center w-100'>Copyright 2025 NADOI - National Association of Dog obedience Instructors. All rights reserved.</span>
            </Container>
        </footer>
    );
}
