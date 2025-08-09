"use client";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function EthicsStandardsSection() {
    return (
        <section className="section-standards py-12 py-md-15 py-lg-20 py-xl-25 bg-light">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <h2 className="text-center mb-6 mb-md-8 mb-xl-12">The Gold Standard for Dog Trainers</h2>
                        
                        <Row className="g-6 g-lg-8">
                            <Col md={6} lg={4}>
                                <div className="standard-card bg-white p-6 rounded shadow-sm text-center h-100">
                                    <div className="standard-icon mb-4">
                                        <i className="fas fa-award text-primary" style={{fontSize: '3rem'}}></i>
                                    </div>
                                    <h4 className="text-primary mb-3">Code of Ethics</h4>
                                    <p className="mb-4">
                                        Text about this content here with link to 
                                        detail page that include more info. Text 
                                        about this content here with link to detail 
                                        page that include more info.
                                    </p>
                                    <Button variant="outline-primary" href="#ethics">LEARN MORE</Button>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className="standard-card bg-white p-6 rounded shadow-sm text-center h-100">
                                    <div className="standard-icon mb-4">
                                        <i className="fas fa-chart-line text-primary" style={{fontSize: '3rem'}}></i>
                                    </div>
                                    <h4 className="text-primary mb-3">Continuing Education</h4>
                                    <p className="mb-4">
                                        Text about this content here with link to detail 
                                        page that include more info. Text about this 
                                        content here with link to detail page that 
                                        include more info.
                                    </p>
                                    <Button variant="outline-primary" href="/education">LEARN MORE</Button>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className="standard-card bg-white p-6 rounded shadow-sm text-center h-100">
                                    <div className="standard-icon mb-4">
                                        <i className="fas fa-hands-helping text-primary" style={{fontSize: '3rem'}}></i>
                                    </div>
                                    <h4 className="text-primary mb-3">Mentoring</h4>
                                    <p className="mb-4">
                                        Text about this content here with link to 
                                        detail page that include more info. Text 
                                        about this content here with link to detail 
                                        page that include more info.
                                    </p>
                                    <Button variant="outline-primary" href="#mentoring">LEARN MORE</Button>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className="standard-card bg-white p-6 rounded shadow-sm text-center h-100">
                                    <div className="standard-icon mb-4">
                                        <i className="fas fa-shield-alt text-primary" style={{fontSize: '3rem'}}></i>
                                    </div>
                                    <h4 className="text-primary mb-3">Positions</h4>
                                    <p className="mb-4">
                                        Text about this content here with link to 
                                        detail page that include more info. Text 
                                        about this content here with link to detail 
                                        page that include more info.
                                    </p>
                                    <Button variant="outline-primary" href="#positions">LEARN MORE</Button>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className="standard-card bg-white p-6 rounded shadow-sm text-center h-100">
                                    <div className="standard-icon mb-4">
                                        <i className="fas fa-users text-primary" style={{fontSize: '3rem'}}></i>
                                    </div>
                                    <h4 className="text-primary mb-3">Leadership</h4>
                                    <p className="mb-4">
                                        Text about this content here with link to 
                                        detail page that include more info. Text 
                                        about this content here with link to detail 
                                        page that include more info.
                                    </p>
                                    <Button variant="outline-primary" href="#leadership">LEARN MORE</Button>
                                </div>
                            </Col>
                            <Col md={6} lg={4}>
                                <div className="standard-card bg-white p-6 rounded shadow-sm text-center h-100">
                                    <div className="standard-icon mb-4">
                                        <i className="fas fa-cogs text-primary" style={{fontSize: '3rem'}}></i>
                                    </div>
                                    <h4 className="text-primary mb-3">Committees</h4>
                                    <p className="mb-4">
                                        Text about this content here with link to 
                                        detail page that include more info. Text 
                                        about this content here with link to detail 
                                        page that include more info.
                                    </p>
                                    <Button variant="outline-primary" href="#committees">LEARN MORE</Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
