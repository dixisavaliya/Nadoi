"use client";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function MembershipTestimonialsSection() {
    return (
        <section className="section-testimonials py-12 py-md-15 py-lg-20 py-xl-25 bg-light">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <h2 className="text-center mb-6 mb-md-8 mb-xl-12">What our members say:</h2>
                        <Row className="g-6">
                            <Col md={6} lg={3}>
                                <div className="testimonial-card text-center p-4">
                                    <div className="quote-icon mb-3">
                                        <i className="fas fa-quote-left text-primary fa-2x"></i>
                                    </div>
                                    <blockquote className="mb-4">
                                        "Why I like being a member of NADOI. I like NADOI because 
                                        I feel a sense of community that I don't get anywhere 
                                        else. I also learn a lot from the blogs, videos and webinars."
                                    </blockquote>
                                    <cite className="text-muted">Associate Member<br />MA</cite>
                                </div>
                            </Col>
                            <Col md={6} lg={3}>
                                <div className="testimonial-card text-center p-4">
                                    <div className="quote-icon mb-3">
                                        <i className="fas fa-quote-left text-primary fa-2x"></i>
                                    </div>
                                    <blockquote className="mb-4">
                                        "Why I like being a member of NADOI. I like NADOI because 
                                        I feel a sense of community that I don't get anywhere 
                                        else. I also learn a lot from the blogs, videos and webinars."
                                    </blockquote>
                                    <cite className="text-muted">Associate Member<br />MA</cite>
                                </div>
                            </Col>
                            <Col md={6} lg={3}>
                                <div className="testimonial-card text-center p-4">
                                    <div className="quote-icon mb-3">
                                        <i className="fas fa-quote-left text-primary fa-2x"></i>
                                    </div>
                                    <blockquote className="mb-4">
                                        "Why I like being a member of NADOI. I like NADOI because 
                                        I feel a sense of community that I don't get anywhere 
                                        else. I also learn a lot from the blogs, videos and webinars."
                                    </blockquote>
                                    <cite className="text-muted">Associate Member<br />MA</cite>
                                </div>
                            </Col>
                            <Col md={6} lg={3}>
                                <div className="testimonial-card text-center p-4">
                                    <div className="quote-icon mb-3">
                                        <i className="fas fa-quote-left text-primary fa-2x"></i>
                                    </div>
                                    <blockquote className="mb-4">
                                        "Why I like being a member of NADOI. I like NADOI because 
                                        I feel a sense of community that I don't get anywhere 
                                        else. I also learn a lot from the blogs, videos and webinars."
                                    </blockquote>
                                    <cite className="text-muted">Associate Member<br />MA</cite>
                                </div>
                            </Col>
                        </Row>
                        
                        <div className="mt-8 mt-lg-12">
                            <Row className="g-6">
                                <Col md={6}>
                                    <div className="membership-cta bg-white p-6 rounded shadow-sm text-center">
                                        <h3 className="text-primary mb-4">Why become an Associate?</h3>
                                        <p className="mb-4">
                                            Are you ready to becoming a NADOI 
                                            member? Are you ready to learn from the experts? 
                                            Are you ready to become the best trainer you can be?
                                        </p>
                                        <Button variant="primary" href="/associate-application" className="px-6">
                                            APPLY NOW
                                        </Button>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="membership-cta bg-white p-6 rounded shadow-sm text-center">
                                        <h3 className="text-primary mb-4">Why become Certified?</h3>
                                        <p className="mb-4">
                                            Are you ready to experience the 
                                            challenge? Are you ready to be the best? Are you ready 
                                            to take the certification examination?
                                        </p>
                                        <Button variant="primary" href="/application-certified-member" className="px-6">
                                            APPLY NOW
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="mt-8 mt-lg-12 text-center">
                            <div className="bg-primary text-white p-6 p-lg-8 rounded">
                                <h3 className="mb-4">Become an Associate member today!</h3>
                                <p className="mb-4">
                                    If you're at least 13 years old, have an interest in dog training, agree to abide by our Code of Ethics, and pay the $35 fee
                                </p>
                                <h4 className="mb-4">YOU CAN JOIN NADOI NOW</h4>
                                <Button variant="light" href="/associate-application" className="px-8">
                                    APPLY NOW
                                </Button>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <h4>Want to Become a Certified Member?</h4>
                            <p className="mb-4">
                                If you're an experienced trainer, agree to abide by our Code of Ethics, pay the $150 registration fee,<br />
                                and pass our membership examination, we'd love to welcome you as a Certified Member.
                            </p>
                            <Button variant="primary" href="/application-certified-member" className="px-8">
                                BECOME A CERTIFIED MEMBER
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
