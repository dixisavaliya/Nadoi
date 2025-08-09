'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function JoinNadoiSection() {
    return (
        <>
            {/* Eligibility Section */}
            <section className="bg-secondary-light py-12 py-md-15 py-lg-20 py-xl-25">
                <Container>
                    <h2 className="mb-8 mb-lg-12 mb-xl-15 fw-semibold text-center">
                        Who is eligible to join NADOI?
                    </h2>
                    <Row className="g-8 g-md-12">
                        {/* Associate Membership */}
                        <Col md={6} className="d-flex flex-column">
                            <h5 className="fw-bold mb-2">Associate Membership</h5>
                            <p className="fw-medium h6 text-black mb-6 mb-xl-8">
                                NADOI has opened the Associate Membership to a broad group of
                                interested people. Requirements are simple:
                            </p>
                            <ul className="list fw-semibold h6 text-black">
                                <li>Be at least 13 years old</li>
                                <li>Have an interest in dog training and behavior</li>
                                <li>Agree to abide by our Code of Ethics</li>
                                <li>Pay the $35 annual fee</li>
                            </ul>

                            <div className="d-flex flex-column gap-4 gap-md-6 gap-xl-8 pt-4 pt-md-6 pt-xl-8 mt-auto">
                                <i className="icon p-15 p-sm-25 d-inline-block rounded-circle overflow-hidden mx-auto">
                                    <Image
                                        src="/images/image-membership-1.png"
                                        alt="Associate Membership"
                                        width={600}
                                        height={600}
                                    />
                                </i>

                                <Link href='/associate-application' className="btn btn-primary btn-sm px-3 px-sm-6 px-xl-10 mx-auto">
                                    BECOME AN ASSOCIATE MEMBER
                                </Link>
                            </div>
                        </Col>

                        {/* Certified Membership */}
                        <Col md={6} className="d-flex flex-column">
                            <h5 className="fw-bold mb-2">Certified Membership</h5>
                            <p className="fw-medium h6 text-black mb-6 mb-xl-8">
                                Certification is offered to those deemed highly qualified, effective
                                dog trainers by their peers:
                            </p>
                            <ul className="list fw-semibold h6 text-black">
                                <li>Have at least five years experience in dog training</li>
                                <li>Worked with a minimum of 100 dog/handler teams</li>
                                <li>Private instructors must have taught at least 288 hours</li>
                                <li>Agree to abide by our Code of Ethics</li>
                                <li>Pay the $150 annual fee</li>
                                <li>Pass the certification exam</li>
                            </ul>

                            <div className="d-flex flex-column gap-4 gap-md-6 gap-xl-8 pt-4 pt-md-6 pt-xl-8 mt-auto">
                                <i className="icon p-15 p-sm-25 d-inline-block rounded-circle overflow-hidden mx-auto">
                                    <Image
                                        src="/images/image-membership-2.png"
                                        alt="Certified Membership"
                                        width={225}
                                        height={225}
                                    />
                                </i>

                                <Link href='/application-certified-member' className="btn btn-primary btn-sm px-3 px-sm-6 px-xl-10 mx-auto text-secondary">

                                    BECOME A CERTIFIED MEMBER
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Why Join Section */}
            <section className="bg-light pt-12 pt-md-15 pt-lg-20 pt-xl-25">
                <Container>
                    <h2 className="mb-8 mb-lg-12 mb-xl-15 text-center">
                        Why should I join NADOI?
                    </h2>

                    <Row className="g-3">
                        <Col md={6}>
                            <p className="fw-medium h6 text-black mb-6 mb-xl-8">
                                NADOI Associate Membership brings many benefits to people interested
                                in dogs, dog training, and dog behavior. NADOI is a long-established
                                community of top-notch dog trainers, and Associate Membership offers
                                a chance to join in our discussions, ask questions, and get reduced
                                prices on NADOI sponsored events. You will benefit from industry
                                discounts that range from books to e-training to business insurance.
                            </p>
                            <p className="fw-medium h6 text-black mb-6 mb-xl-8">
                                Learn from the best! If you want to be a dog trainer, joining NADOI
                                is a great way to start. There is no better place to learn than from
                                the folks that have been training and instructing for decades.
                            </p>
                        </Col>
                        <Col md={6}>
                            <p className="fw-medium h6 text-black mb-6 mb-xl-8">
                                NADOI has been the premier organization for dog trainers for almost
                                sixty years, and our Certified Members are all highly skilled and
                                knowledgeable. We are eager to share our excitement with the
                                profession with others.
                            </p>
                            <p className="fw-medium h6 text-black mb-6 mb-xl-8">
                                Become a better dog trainer! If you are already an up-and-coming dog
                                trainer, Associate Membership gets you started on the path to becoming
                                a Certified Dog Trainer. Earning NADOI Certified Membership is
                                challenging, but your Associate Membership will help you to enhance
                                your existing skills and expand your knowledge base, both critical
                                aspects to Certification.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
