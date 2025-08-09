"use client";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';

export default function MembershipTypesSection() {
    return (
        <section className="section-membership-types py-12 py-md-15 py-lg-20 py-xl-25 bg-light">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <h2 className="text-center mb-6 mb-md-8 mb-xl-12">Who is eligible to join NADOI?</h2>
                        <Row className="g-6 g-lg-8">
                            <Col lg={6}>
                                <div className="membership-card bg-white p-6 p-lg-8 rounded shadow-sm h-100">
                                    <h3 className="text-primary mb-4">Associate Membership</h3>
                                    <p className="mb-4">
                                        NADOI has opened the Associate Membership to a broad group of 
                                        interested people. Requirements are simple:
                                    </p>
                                    <ul className="list-unstyled mb-6">
                                        <li className="mb-2">• Be at least 13 years old</li>
                                        <li className="mb-2">• Have an interest in dog training and behavior</li>
                                        <li className="mb-2">• Agree to abide by our Code of Ethics</li>
                                        <li className="mb-2">• NO CERTIFICATION EXAM</li>
                                        <li className="mb-2">• Pay the $35 annual fee</li>
                                    </ul>
                                    <div className="text-center">
                                        <div className="membership-badge mb-4">
                                            <Image
                                                src="/images/associate-badge.png"
                                                alt="Associate Member Badge"
                                                width={100}
                                                height={100}
                                                className="mx-auto"
                                            />
                                        </div>
                                        <Button variant="primary" href="/associate-application" className="px-6">
                                            BECOME AN ASSOCIATE MEMBER
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="membership-card bg-white p-6 p-lg-8 rounded shadow-sm h-100">
                                    <h3 className="text-primary mb-4">Certified Membership</h3>
                                    <p className="mb-4">
                                        Certification is offered to those deemed highly qualified, effective 
                                        dog trainers by their peers:
                                    </p>
                                    <ul className="list-unstyled mb-6">
                                        <li className="mb-2">• Have at least five years experience in dog training</li>
                                        <li className="mb-2">• Worked with a minimum of 100 dog/handler teams</li>
                                        <li className="mb-2">• Private instructors must have taught at least 288 hours</li>
                                        <li className="mb-2">• Agree to abide by our Code of Ethics</li>
                                        <li className="mb-2">• Pay the $150 registration fee and $75 annual fee</li>
                                        <li className="mb-2">• Pass the certification exam</li>
                                    </ul>
                                    <div className="text-center">
                                        <div className="membership-badge mb-4">
                                            <Image
                                                src="/images/certified-badge.png"
                                                alt="Certified Member Badge"
                                                width={100}
                                                height={100}
                                                className="mx-auto"
                                            />
                                        </div>
                                        <Button variant="primary" href="/application-certified-member" className="px-6">
                                            BECOME A CERTIFIED MEMBER
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
