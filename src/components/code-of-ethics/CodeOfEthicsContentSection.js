"use client";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CodeOfEthicsContentSection() {
    return (
        <section id="ethics" className="section-ethics-content py-12 py-md-15 py-lg-20 py-xl-25">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <h2 className="text-center mb-6 mb-md-8 mb-xl-12">Our Code of Ethics</h2>
                        
                        <div className="ethics-content">
                            <div className="mb-8">
                                <h3 className="text-primary mb-4">Preamble</h3>
                                <p>
                                    This Code of Ethics is a dynamic set of principles guiding the organization and its members in the practice of dog obedience training and instruction. It is intended to foster a high level of trust, 
                                    integrity, and professionalism among members while ensuring the 
                                    well-being of both dogs and their owners.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-primary mb-4">Core Principles</h3>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <h5 className="fw-semibold">Trust and Integrity:</h5>
                                        <p>Members are committed to maintaining a high level of trust and integrity in their conduct while dog training.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="fw-semibold">Continuous Improvement:</h5>
                                        <p>Members will actively seek to improve their skills and knowledge through ongoing education and open exchange of ideas with peers.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="fw-semibold">Humane Methods:</h5>
                                        <p>Members will use humane methods and will always advocate for training practices that prioritize effective training and the best interests of both the dog and the owner. Members acknowledge that the humaneness of equipment and training methods is dependent upon the skill and knowledge of the individual trainer.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="fw-semibold">Minimal Compulsion:</h5>
                                        <p>Members will use the least amount of force necessary to achieve the desired results, recognizing that individual circumstances may require varying degrees of guidance. The degree of force necessary to achieve the desired result in one dog may not necessarily be the same in another dog.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="fw-semibold">Limitations on Tools and Techniques:</h5>
                                        <p>Members recognize that NADOI does not support guidelines or standards that seek to limit or prohibit the use of specific equipment or training methods.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="fw-semibold">Public Image:</h5>
                                        <p>Members will consider the public image of obedience training and act in a manner that promotes the safety and well-being of all involved, keeping in mind the desired goal of a happy, willing, and responsive dog.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="fw-semibold">Animal Welfare:</h5>
                                        <p>Conviction of any charge of inhumane treatment or animal cruelty will result in the immediate revocation of all certifications and expulsion from the organization.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="fw-semibold">Ethical Standards:</h5>
                                        <p>Violation of any part of this Code of Ethics may result in disciplinary action, up to and including expulsion from the organization.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-primary mb-4">Member Responsibilities</h3>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <h5 className="fw-semibold">Association Representation:</h5>
                                        <p>All members will follow established guidelines for promoting their association with the organization and will support its goals in word and in action. They will represent NADOI in a positive and professional manner, upholding its principles.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="fw-semibold">Knowledge Sharing:</h5>
                                        <p>All members will share knowledge and experience with others and seek help from others when needed.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="fw-semibold">Respect for Colleagues:</h5>
                                        <p>All members will refrain from publicly criticizing other instructors or their training methods.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-primary mb-4">Additional Responsibilities of Certified Members</h3>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <h5 className="fw-semibold">Professional Demeanor:</h5>
                                        <p>Certified Members will conduct themselves with tact and courtesy, both in speech and appearance.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="fw-semibold">Client Focus:</h5>
                                        <p>Certified members will prioritize the needs of their clients and their dogs, tailoring their training methods to each individual case.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="fw-semibold">Professional Limitations:</h5>
                                        <p>Certified members will recognize their own limitations and seek help from others when necessary.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="fw-semibold">Breed Awareness:</h5>
                                        <p>Certified members will make every effort to familiarize themselves with breed characteristics and trainability to better serve the needs of their clients.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center p-6 bg-light rounded">
                                <p className="mb-4 fw-semibold">
                                    By adhering to this Code of Ethics, members pledge to uphold the highest standards of professionalism and ethical conduct in the field of dog obedience training and instruction.
                                </p>
                                <p className="text-muted mb-0">
                                    <small>Updated and approved by the Board of Directors<br />November 26, 2024</small>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
