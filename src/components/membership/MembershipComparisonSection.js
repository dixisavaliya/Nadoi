"use client";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

export default function MembershipComparisonSection() {
    return (
        <section className="section-comparison py-12 py-md-15 py-lg-20 py-xl-25">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <h2 className="text-center mb-6 mb-md-8 mb-xl-12">Member Benefit Comparison</h2>
                        <div className="table-responsive">
                            <Table striped bordered hover className="comparison-table">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th>Membership Benefit</th>
                                        <th className="text-center">Associate Members<br />$35 Annual Fee<br />No Exam</th>
                                        <th className="text-center">Certified Members<br />$150 Registration<br />$75 Annual Fee<br />One-time Exam</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Listing in Find an Instructor section on NADOI website</td>
                                        <td className="text-center">X<br /><small>Secondary listing</small></td>
                                        <td className="text-center">X<br /><small>Preferred Position</small></td>
                                    </tr>
                                    <tr>
                                        <td>Use of NADOI logo in advertising</td>
                                        <td className="text-center">Associate logo</td>
                                        <td className="text-center">Certified logo</td>
                                    </tr>
                                    <tr>
                                        <td>Discount on liability insurance</td>
                                        <td className="text-center">X</td>
                                        <td className="text-center">X</td>
                                    </tr>
                                    <tr>
                                        <td>Discount for NADOI-sponsored event fees</td>
                                        <td className="text-center">25%</td>
                                        <td className="text-center">50%</td>
                                    </tr>
                                    <tr>
                                        <td>Vendor discounts, including Dogwise.com and e-trainingfordogs.com</td>
                                        <td className="text-center">X</td>
                                        <td className="text-center">X</td>
                                    </tr>
                                    <tr>
                                        <td>Free access to Career Center to view and post work opportunities</td>
                                        <td className="text-center">X</td>
                                        <td className="text-center">X</td>
                                    </tr>
                                    <tr>
                                        <td>Ability to create and post blog articles and videos</td>
                                        <td className="text-center">X</td>
                                        <td className="text-center">X</td>
                                    </tr>
                                    <tr>
                                        <td>NADOI News email newsletter</td>
                                        <td className="text-center">X</td>
                                        <td className="text-center">X</td>
                                    </tr>
                                    <tr>
                                        <td>Links to your books, webinars and other training materials for sale</td>
                                        <td className="text-center">X</td>
                                        <td className="text-center">X</td>
                                    </tr>
                                    <tr>
                                        <td>Processing of CEU credits</td>
                                        <td className="text-center">X</td>
                                        <td className="text-center">X</td>
                                    </tr>
                                    <tr>
                                        <td>Free small business marketing tools and tips</td>
                                        <td className="text-center">X</td>
                                        <td className="text-center">X</td>
                                    </tr>
                                    <tr>
                                        <td>Access to Members Only Facebook group</td>
                                        <td className="text-center">X</td>
                                        <td className="text-center">X</td>
                                    </tr>
                                    <tr>
                                        <td>Promotion on NADOI social media pages</td>
                                        <td className="text-center">-</td>
                                        <td className="text-center">X</td>
                                    </tr>
                                    <tr>
                                        <td>Ability to earn additional Certifications</td>
                                        <td className="text-center">-</td>
                                        <td className="text-center">X</td>
                                    </tr>
                                    <tr>
                                        <td>Ability to Vote on NADOI policies</td>
                                        <td className="text-center">-</td>
                                        <td className="text-center">X</td>
                                    </tr>
                                    <tr>
                                        <td>Eligible to serve on NADOI committees</td>
                                        <td className="text-center">-</td>
                                        <td className="text-center">X</td>
                                    </tr>
                                    <tr>
                                        <td>Eligible to serve on NADOI board of directors</td>
                                        <td className="text-center">-</td>
                                        <td className="text-center">X</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="text-center mt-6">
                            <p>For questions, please visit our <a href="#faq">FAQ page</a>.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
