"use client";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';

export default function MembershipHeroSection() {
    return (
        <section className="section-banner text-center text-md-start py-12 py-md-15 py-lg-20 py-xl-25 d-flex align-items-end align-items-md-center justify-content-center">
            <figure className="picture absolute-div">
                <Image
                    src="/images/banner-join.jpg"
                    alt="Why Become a Member?"
                    fill
                />
            </figure>
            <Container className="position-relative">
                <Row>
                    <Col lg={8}>
                        <h1 className='text-white fw-semibold mb-4'>Why Become<br />a Member?</h1>
                        <h5 className='text-white fw-normal mb-6 mb-md-8 mb-xl-12'>
                            Text here about why becoming a member is a good<br />
                            idea. Text here about why becoming a member is a good.
                        </h5>
                        <Button href="/join-nadoi" variant="secondary" size="sm" className='px-6 px-xl-10'>
                            JOIN NADOI TODAY
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
