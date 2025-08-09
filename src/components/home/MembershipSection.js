"use client";
import React from "react";

import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const membershipTypes = [
    {
        image: "/images/image-membership-1.png",
        alt: "Membership Type 1"
    },
    {
        image: "/images/image-membership-2.png",
        alt: "Membership Type 2"
    }
    // You can easily add more membership types here
];

export default function MembershipSection() {
    return (
        <section className="py-12 py-md-15 py-lg-20 py-xl-25 text-center">
            <Container>
                <h2 className='mb-8 mb-lg-12 mb-xl-15'>Choose Your Membership Type</h2>
                <Row className='g-8 g-md-12 justify-content-center'>
                    {membershipTypes.map((item, index) => (
                        <Col xs={6} md={4} lg={3} key={index}>
                            <i className='icon p-15 p-sm-25 d-inline-block'>
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    width={600}
                                    height={600}
                                />
                            </i>
                        </Col>
                    ))}
                </Row>
                <h3 className='mt-6 mt-lg-8 mt-xl-10'>Help me choose which is right for me</h3>
            </Container>
        </section>
    );
};
