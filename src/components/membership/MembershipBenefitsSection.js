"use client";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MembershipBenefitsSection() {
    return (
        <section className="section-join py-12 py-md-15 py-lg-20 py-xl-25">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <h2 className="text-center mb-6 mb-md-8 mb-xl-12">Why join NADOI?</h2>
                        <Row className="g-6 g-md-8">
                            <Col md={4}>
                                <div className="text-center">
                                    <h4 className="fw-semibold mb-3">1) Learn from the best!</h4>
                                    <p>
                                        If you want to be a dog trainer, joining NADOI is a great way to 
                                        start. There is no better place to learn than from the folks that have 
                                        been training and instructing for decades.
                                    </p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="text-center">
                                    <h4 className="fw-semibold mb-3">2) Become a better trainer!</h4>
                                    <p>
                                        If you are already an up-and-coming dog trainer, Associate 
                                        Membership gets you started on the path to becoming a Certified 
                                        Dog Trainer. Earning NADOI Certified Membership is challenging, 
                                        but your Associate Membership will help you to enhance your 
                                        existing skills and expand your knowledge base, both critical 
                                        aspects to Certification.
                                    </p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="text-center">
                                    <h4 className="fw-semibold mb-3">3) Join the elite.</h4>
                                    <p>
                                        NADOI has been the premier organization for dog trainers for 
                                        almost sixty years, and our Certified Members are all highly skilled 
                                        and knowledgeable. We are eager to share our excitement with the 
                                        profession with others.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
