"use client";

import React, { useState } from 'react';

import BannerSection from "@/components/common/BannerSection";
import CTASection from "@/components/common/CTASection";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

import Image from 'next/image';

const steps = [
    "Account/Contact<br/> Information",
    "Professional<br/> Experience",
    "Payment<br/> Information",
    "Membership<br/> Examination",
];

export default function ApplicationCertifiedMemberPage() {
    const type = "checkbox";

    const formatId = (label) =>
        label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const options = [
        "Professional Dog Trainer",
        "Behavior Consultant",
        "Specialized Trainer",
        "Experienced Dog Trainer",
        "Service Dog/Therapy Dog trainer",
        "Volunteer Trainer",
        "Veterinary Professional",
        "Animal Shelter and Rescue Worker",
        "Boarding Facility Manager",
    ];

    const options2 = [
        "Another Member",
        "Internet search",
        "NADOI meeting",
        "Publication",
        "Industry",
        "Other (Please enter below)",
        "IAABC",
        "IACP",
        "AKC",
        "UKC",
        "Penn Foster",
    ];

    const options3 = [
        "APDT",
        "PPG",
        "CGC Evaluator",
        "IACP",
        "IAABC",
        "All-breed kennel club",
        "Training club",
        "Breed-specific club",
        "Other (Please enter below)",
    ];

    const options4 = [
        "Agility",
        "Barn Hunt",
        "Basic Obedience",
        "Carting or Draft Dog",
        "Competition Obedience",
        "Conformation",
        "Disc Dog",
        "Dock Diving",
        "Earthdog",
        "Flyball",
        "Herding",
        "Hunting/Retrieving/Field Training",
        "Nose Work/Scent Work",
        "Rally",
        "Schutzhund/IPO",
        "Service dog",
        "Therapy Dog",
        "Tricks",
        "Weight Pulling",
        "Other (Please enter below)",
    ];

    const options5 = [
        "Self-taught",
        "Trade Publications/Books",
        "YouTube",
        "Websites",
        "Worked at Animal Facility",
        "Assisted Another Trainer",
        "Apprenticed with a Trainer",
        "Other (Please enter below)",
    ];

    const [currentStep, setCurrentStep] = useState(0);

    const handleStepClick = (index) => {
        if (index <= currentStep) {
            setCurrentStep(index);
        }
    };

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    return (
        <>
            <BannerSection
                imageSrc="/images/banner-home.jpg"
                heading="Share your<br/>experience."
                subHeading="Please provide some information about the dogs you’ve trained and the methods you’ve used."
                buttonText="CONTINUE BELOW"
                buttonLink="/membership"
            />

            <section className="py-12 py-md-15 py-lg-20 py-xl-25">
                <Container>
                    <h2 className='text-center mb-4'>Certified Member Application</h2>
                    <h5 className='text-center fw-medium mb-8 mb-lg-12 mb-xl-15'>Note that you can save your application between sections once you have created a user id and password.</h5>

                    <Row className="g-2 g-xl-6 text-center">
                        {steps.map((label, index) => (
                            <Col
                                key={index}
                            >
                                <div
                                    className={`step-item ${index === currentStep
                                        ? 'active'
                                        : index <= currentStep
                                            ? 'active'
                                            : ''
                                        } ${index <= currentStep ? 'cursor-pointer' : 'disabled'}`}
                                    onClick={() => handleStepClick(index)}
                                >
                                    <span className='mb-md-3'>{index + 1}</span>
                                    <h6 className='d-none d-md-block' dangerouslySetInnerHTML={{ __html: label }} />

                                </div>

                            </Col>
                        ))}
                    </Row>

                    <div className='py-10 py-md-15 step-data'>
                        {currentStep === 0 && (
                            <>
                                <h3 className='d-md-none step-title mb-6' dangerouslySetInnerHTML={{ __html: steps[0] }} />

                                <Form>
                                    <h5 className="fw-bold mb-4 mb-xl-6">Account Information</h5>
                                    <Row className="g-4 g-lg-6">
                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="FIRST NAME *"
                                            />
                                        </Col>
                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="EMAIL/USERNAME *"
                                            />
                                        </Col>
                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="password"
                                                placeholder="PASSWORD *"
                                            />
                                        </Col>
                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="LAST NAME *"
                                            />
                                        </Col>
                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="CONFIRM EMAIL/USERNAME *"
                                            />
                                        </Col>
                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="CONFIRM PASSWORD *"
                                            />
                                        </Col>
                                    </Row>

                                    <h5 className="fw-bold mb-4 mb-xl-6 mt-6 mt-xl-12">
                                        Contact Information
                                    </h5>
                                    <Row className="g-4 g-lg-6">
                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="ADDRESS *"
                                            />
                                            <span className="fw-medium text-primary mt-1">
                                                (Not visible to public)
                                            </span>
                                        </Col>
                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="COUNTRY *"
                                            />
                                        </Col>
                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="STATE *"
                                            />
                                        </Col>
                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="ADDRESS CONTINUED *"
                                            />
                                        </Col>
                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="CITY *"
                                            />
                                        </Col>
                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="POSTAL CODE *"
                                            />
                                        </Col>

                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="HOME PHONE"
                                            />
                                        </Col>
                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="MOBILE PHONE"
                                            />
                                            <span className="fw-medium text-primary mt-1">
                                                (Not visible to public)
                                            </span>
                                        </Col>
                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="YEAR OF BIRTH"
                                            />
                                            <span className="fw-medium text-primary mt-1">
                                                (Not visible to public)
                                            </span>
                                        </Col>
                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="BUSINESS PHONE *"
                                            />
                                        </Col>
                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="BUSINESS NAME *"
                                            />
                                        </Col>
                                        <Col sm={6} md={4}>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                placeholder="BUSINESS WEBSITE *"
                                            />
                                        </Col>
                                    </Row>
                                </Form>
                            </>
                        )}

                        {currentStep === 1 && (
                            <>
                                <h3 className='d-md-none step-title mb-6' dangerouslySetInnerHTML={{ __html: steps[1] }} />

                                <Form>
                                    <h5 className="fw-bold mb-4 mb-xl-6">
                                        Professional Experience{" "}
                                        <span className="h6 fw-bold">(Select all that apply)</span>
                                    </h5>
                                    <Row className="g-4 g-lg-6">
                                        <Col lg={4}>
                                            <div className="d-flex flex-column gap-4 gap-lg-6">
                                                <div className="flex-fill">
                                                    <Form.Select size="sm" className="form-control">
                                                        <option value="">Select Breed Experience *</option>
                                                        <option value="labrador">Labrador</option>
                                                        <option value="german-shepherd">German Shepherd</option>
                                                        <option value="poodle">Poodle</option>
                                                        <option value="bulldog">Bulldog</option>
                                                        {/* Add more options as needed */}
                                                    </Form.Select>
                                                </div>
                                                <div className="flex-fill">
                                                    <Form.Select size="sm" className="form-control">
                                                        <option value="">Select Specialties *</option>
                                                        <option value="training">Training</option>
                                                        <option value="grooming">Grooming</option>
                                                        <option value="rescue">Rescue</option>
                                                        <option value="therapy">Therapy</option>
                                                        {/* Add more options as needed */}
                                                    </Form.Select>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={8}>
                                            <Row className="gx-6 gy-1">
                                                {options.map((label) => {
                                                    const id = formatId(label);
                                                    return (
                                                        <Col xs={12} md={6} key={id}>
                                                            <Form.Check
                                                                type="checkbox"
                                                                id={id}
                                                                label={label}
                                                            />
                                                        </Col>
                                                    );
                                                })}
                                            </Row>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Select size="sm" className="form-control">
                                                <option value="">YEAR YOU BEGAN TRAINING DOGS *</option>
                                            </Form.Select>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Select size="sm" className="form-control">
                                                <option value="">YEAR YOU BEGAN PRIVATE LESSONS *</option>
                                            </Form.Select>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Select size="sm" className="form-control">
                                                <option value="">YEAR YOU BEGAN GROUP LESSONS *</option>
                                            </Form.Select>
                                        </Col>


                                        <Col lg={4}>
                                            <Row className="g-4 g-lg-6">
                                                <Col xs={12}>
                                                    <Form.Select size="sm" className="form-control">
                                                        <option value="">HOW MANY DOGS DO YOU TRAIN A YEAR? *</option>
                                                        <option value="1-10">1–10</option>
                                                        <option value="11-25">11–25</option>
                                                        <option value="26-50">26–50</option>
                                                        <option value="51-100">51–100</option>
                                                        <option value="101+">101+</option>
                                                    </Form.Select>
                                                </Col>
                                                <Col xs={12}>
                                                    <h6 className="fw-bold">
                                                        Do you know any NADOI members?*
                                                    </h6>

                                                    <div className='d-flex align-items-center gap-15 py-3'>
                                                        <Form.Check
                                                            type="checkbox"
                                                            label="Yes"
                                                            id="member-yes"
                                                        />
                                                        <Form.Check
                                                            type="checkbox"
                                                            label="No"
                                                            id="member-no"
                                                        />
                                                    </div>
                                                    <div className="w-100">
                                                        <Form.Control size="lg" placeholder="MEMBER NAME *" />
                                                    </div>
                                                </Col>

                                                <Col xs={12}>
                                                    <h6 className="fw-bold">
                                                        Have you ever applied before? **
                                                    </h6>

                                                    <div className='d-flex align-items-center gap-15 py-3'>
                                                        <Form.Check
                                                            type="checkbox"
                                                            label="Yes"
                                                            id="applied-yes"
                                                        />
                                                        <Form.Check
                                                            type="checkbox"
                                                            label="No"
                                                            id="applied-no"
                                                        />
                                                    </div>
                                                    <div className="w-100">
                                                        <Form.Control size="lg" placeholder="APPROXIMATE YEAR *" />
                                                    </div>
                                                </Col>

                                                <Col xs={12}>
                                                    <h6 className="fw-bold">
                                                        Tell us about your dogs:
                                                    </h6>
                                                    <div className="w-100 py-3">
                                                        <Form.Select size="lg" className="form-control">
                                                            <option>BREEDS YOU HAVE OWNED *</option>
                                                            <option>Labrador</option>
                                                            <option>German Shepherd</option>
                                                            <option>Golden Retriever</option>
                                                            <option>Poodle</option>
                                                            <option>Other</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className="w-100">
                                                        <Form.Control
                                                            size="lg"
                                                            placeholder="TRAINING TECHNIQUES YOU HAVE USED*"
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>


                                        <Col lg={8}>
                                            <Row className="g-4 g-lg-6">
                                                <Col xs={12}>
                                                    <h6 className="fw-bold mb-3">
                                                        How did you hear about NADOI? (Select all that apply)
                                                    </h6>
                                                    <Row className="gx-6 gy-1">
                                                        {options2.map((label) => {
                                                            const id = `about-nadoi-${formatId(label)}`;
                                                            return (
                                                                <Col xs={12} md={6} key={id}>
                                                                    <Form.Check
                                                                        type="checkbox"
                                                                        id={id}
                                                                        label={label}
                                                                    />
                                                                </Col>
                                                            );
                                                        })}
                                                    </Row>
                                                    <div className='w-100 mt-4'>
                                                        <Form.Control
                                                            size="lg"
                                                            placeholder="OTHER SOURCE"
                                                        />
                                                    </div>
                                                </Col>
                                                <Col xs={12}>
                                                    <h6 className="fw-bold mb-3">
                                                        Have you ever been a member of any other
                                                        professional organizations?<br /> (Select all that
                                                        apply)
                                                    </h6>
                                                    <Row className="gx-6 gy-1">
                                                        {options3.map((label) => {
                                                            const id = `professional-organizations-${formatId(label)}`;
                                                            return (
                                                                <Col xs={12} md={6} key={id}>
                                                                    <Form.Check
                                                                        type="checkbox"
                                                                        label={label}
                                                                        id={id}
                                                                    />
                                                                </Col>
                                                            );
                                                        })}
                                                    </Row>
                                                    <div className='w-100 mt-4'>
                                                        <Form.Control
                                                            size="lg"
                                                            placeholder="OTHER CLUB OR ORGANIZATION"
                                                        />
                                                    </div>

                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col xs={12}>
                                            <h6 className="fw-bold mb-3">
                                                What types of training have you done? (Select all that
                                                apply)
                                            </h6>



                                            <Row className="gx-6 gy-1">
                                                {options4.map((label) => {
                                                    const id = `training-${formatId(label)}`;
                                                    return (
                                                        <Col md={4} sm={6} key={id}>
                                                            <Form.Check
                                                                type="checkbox"
                                                                id={id}
                                                                label={label}
                                                            />
                                                        </Col>
                                                    );
                                                })}
                                            </Row>
                                        </Col>

                                        <Col xs={12}>
                                            <div className='pt-6 pt-md-9'>

                                                <Form.Check
                                                    type="checkbox"
                                                    id="associate-membership"
                                                    label={
                                                        <>
                                                            I agree to apply to become a Certified member of
                                                            NADOI for the annual cost of $150.00, to complete
                                                            the Membership Examination questions, and to abide
                                                            by the{" "}
                                                            <Link
                                                                href="/"
                                                                className="fw-bold link-underline text-black"
                                                            >
                                                                NADOI Code of Ethics.
                                                            </Link>
                                                        </>
                                                    }
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </>
                        )}

                        {currentStep === 2 && (
                            <>
                                <h3 className='d-md-none step-title mb-6' dangerouslySetInnerHTML={{ __html: steps[2] }} />

                                <h5 className="fw-bold mb-3">Membership Examination</h5>
                                <h6 className='fw-semibold mb-4 mb-xl-6'>Please note that ALL answers are required unless otherwise noted. This applications does not have to completed in one
                                    session. You can save your answers and return to complete unfinished questions later by logging in. Please visit our <Link className='link-underline' href={''}>FAQ
                                        section</Link> for answers to common questions.</h6>

                                <Row className='g-8 g-md-10'>
                                    <Col xs={12}>
                                        <h6 className='fw-bold mb-3'>1) What type of training do you do? (Okay to select both if applicable)</h6>

                                        <Row className='g-6'>
                                            <Col md={6}>
                                                <Form.Check
                                                    type="checkbox"
                                                    label="Group Classes"
                                                    id="group-classes"
                                                />


                                                <div className='d-flex gap-4 flex-column mt-4'>
                                                    <div className='w-100'>
                                                        <Form.Label className='h6 fw-semibold mb-1 text-dark'>How many minutes/hours is each class?</Form.Label>
                                                        <Form.Control size='sm' placeholder="TIME PER CLASS" />
                                                    </div>

                                                    <div className='w-100'>
                                                        <Form.Label className='h6 fw-semibold mb-1 text-dark'>How many weeks are in your basic course?</Form.Label>
                                                        <Form.Control size='sm' placeholder="WEEKS IN BASIC COURSE" />
                                                    </div>

                                                    <div className='w-100'>
                                                        <Form.Label className='h6 fw-semibold mb-1 text-dark'>How many students do you have per class?</Form.Label>
                                                        <Form.Control size='sm' placeholder="NUMBER OF STUDENTS PER CLASS" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Check
                                                    type="checkbox"
                                                    label="Private Lessons"
                                                    id="private-lessons"
                                                />

                                                <div className='d-flex gap-4 flex-column mt-4'>
                                                    <div className='w-100'>
                                                        <Form.Label className='h6 fw-semibold mb-1 text-dark'>How many minutes/hours is each lesson?</Form.Label>
                                                        <Form.Control size='sm' placeholder="TIME PER CLASS" />
                                                    </div>

                                                    <div className='w-100'>
                                                        <Form.Label className='h6 fw-semibold mb-1 text-dark'>How many lessons do you recommend?</Form.Label>
                                                        <Form.Control size='sm' placeholder="NUMBER OF LESSONS" />
                                                    </div>

                                                    <div className='w-100'>
                                                        <Form.Label className='h6 fw-semibold mb-1 text-dark'>How do you determine the number of lessons?</Form.Label>
                                                        <Form.Control size='sm' />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                    </Col>
                                    <Col xs={12}>
                                        <h6 className='fw-bold mb-3'>2) How did you get your instructing experience? (Please select all that apply)</h6>

                                        <Row className="gx-6 gy-4">
                                            {options.map((label) => {
                                                const id = formatId(label);
                                                return (
                                                    <Col sm={6} lg={4} key={id}>
                                                        <Form.Check
                                                            type="checkbox"
                                                            label={label}
                                                            id={id}
                                                        />
                                                    </Col>
                                                );
                                            })}
                                        </Row>

                                        <div className='d-flex gap-2 flex-column mt-6'>
                                            <div className='w-100'>
                                                <Form.Control
                                                    size='lg'
                                                    placeholder="OTHER INSTRUCTION SOURCE"
                                                />
                                            </div>
                                            <div className='w-100'>
                                                <Form.Control
                                                    size='lg'
                                                    placeholder="PLEASE PROVIDE NAME, CONTACT AND DATE OF TRAINER YOU INTERNED WITH/ASSISTED"
                                                />
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xs={12}>
                                        <h6 className='fw-bold mb-3'>3) Where have you taught dog obedience in the last ten 10 years? (If different than current training business</h6>

                                        <div className='d-flex gap-2 flex-column'>
                                            <div className='w-100'>
                                                <Form.Control
                                                    size='lg'
                                                    placeholder="FACILITY ONE (Please include addresses, phone numbers and email addresses)"
                                                />
                                            </div>
                                            <div className='w-100'>
                                                <Form.Control
                                                    size='lg'
                                                    placeholder="FACILITY TWO (Please include addresses, phone numbers and email addresses)"
                                                />
                                            </div>
                                            <div className='w-100'>
                                                <Form.Control
                                                    size='lg'
                                                    placeholder="FACILITY THREE (Please include addresses, phone numbers and email addresses)"
                                                />
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xs={12}>
                                        <h6 className='fw-bold mb-3'>4) Tell us about the three most important things that influenced your approach to training. What were they and how did they impact you? Please list authors, books, seminars, videos, etc.</h6>

                                        <div className='d-flex gap-2 flex-column'>
                                            <div className='w-100'>
                                                <Form.Control
                                                    size='lg'
                                                    placeholder="REFERENCE ONE (Please include addresses, phone numbers and email addresses)"
                                                />
                                            </div>
                                            <div className='w-100'>
                                                <Form.Control
                                                    size='lg'
                                                    placeholder="REFERENCE TWO (Please include addresses, phone numbers and email addresses)"
                                                />
                                            </div>
                                            <div className='w-100'>
                                                <Form.Control
                                                    size='lg'
                                                    placeholder="REFERENCE THREE (Please include addresses, phone numbers and email addresses)"
                                                />
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xs={12}>
                                        <h6 className='fw-bold mb-3'>5) Please list three people (past customers, pet professionals, or veterinarians) we may contact as references. What were they and how did they impact you? Please list authors, books, seminars, videos, etc.</h6>

                                        <div className='d-flex gap-2 flex-column'>
                                            <div className='w-100'>
                                                <Form.Control size='lg' placeholder="INFLUENCE ONE" />
                                            </div>
                                            <div className='w-100'>
                                                <Form.Control size='lg' placeholder="INFLUENCE TWO" />
                                            </div>
                                            <div className='w-100'>
                                                <Form.Control size='lg' placeholder="INFLUENCE THREE" />
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xs={12}>
                                        <h6 className='fw-bold mb-3'>6) What information do you get from your students? Please describe in detail or upload your background form.</h6>

                                        <Form.Check
                                            type="checkbox"
                                            label="Upload my registration form"
                                            id='registration-form'
                                            className="mb-3"
                                        />

                                        <Form.Control size='lg' placeholder="BACKGROUND INFO" />
                                    </Col>


                                    <Col xs={12}>
                                        <h6 className='fw-bold mb-3'>7) List three collar, leashes or other training tools you typically recommend for a beginning student.</h6>

                                        <div className='d-flex gap-2 flex-column'>
                                            <div className='w-100'>
                                                <Form.Control size='lg' placeholder="TOOL ONE" />
                                            </div>
                                            <div className='w-100'>
                                                <Form.Control size='lg' placeholder="TOOL TWO" />
                                            </div>
                                            <div className='w-100'>
                                                <Form.Control size='lg' placeholder="TOOL THREE" />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12}>
                                        <h6 className='fw-bold mb-3'> 8) Where do you hold your lessons? (Please select all that apply)</h6>

                                        <Form.Select size='lg' className='form-control'>
                                            <option>LESSON LOCATIONS</option>
                                            <option>Home</option>
                                            <option>Training Center</option>
                                            <option>Outdoor Park</option>
                                            <option>Virtual/Online</option>
                                        </Form.Select>

                                    </Col>
                                </Row>
                            </>
                        )}

                        {currentStep === 3 && (
                            <>
                                <h3 className='d-md-none step-title mb-6' dangerouslySetInnerHTML={{ __html: steps[3] }} />

                                <h5 className="fw-bold mb-4 mb-xl-6">Payment Information</h5>

                                <div className='d-flex gap-4 flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-6'>
                                    <div className='flex-fill'>
                                        <figure className='image-paypal mb-4'>
                                            <Image
                                                src="/images/image-paypal.png"
                                                alt="PayPal"
                                                width={200}
                                                height={80}
                                            />
                                        </figure>
                                        <h4 className='text-body fw-medium mb-1 opacity-50'>Pay with a debit or credit card.</h4>
                                        <h6 className='text-body opacity-50'>
                                            We don’t share your financial details with the merchant.
                                        </h6>
                                    </div>

                                    <h6 className='text-dark fw-bold w-auto text-nowrap'>$150.00 USD</h6>
                                </div>

                                <Form>
                                    {/* Card Info */}
                                    <Row className='gx-0 gy-4 gy-sm-6'>
                                        <Col xs={6}>
                                            <Form.Control size="sm" type="text" className="px-3 rounded-end-0" placeholder="CARD NUMBER *" />
                                        </Col>
                                        <Col xs={3}>
                                            <Form.Control size="sm" type="text" className="px-3 rounded-0" placeholder="MM/YY " />
                                        </Col>
                                        <Col xs={3}>
                                            <Form.Control size="sm" type="text" className="px-3 rounded-start-0" placeholder="CVV" />
                                        </Col>
                                        <Col xs={6}>
                                            <Form.Control size="sm" type="text" className="px-3 rounded-end-0" placeholder="FIRST NAME" />
                                        </Col>
                                        <Col xs={6}>
                                            <Form.Control size="sm" type="text" className="px-3 rounded-start-0" placeholder="LAST NAME" />
                                        </Col>
                                    </Row>

                                    <h5 className="fw-bold mb-4 mb-xl-6 mt-6 mt-xl-12">Billing Address</h5>


                                    <Row className='g-4 g-sm-6'>
                                        <Col md={6} lg={4}>
                                            <Form.Control size="sm" type='text' placeholder="ADDRESS 1 *" />
                                        </Col>
                                        <Col md={6} lg={4}>
                                            <Form.Control size="sm" type='text' placeholder="COUNTRY *" />
                                        </Col>
                                        <Col md={6} lg={4}>
                                            <Form.Control size="sm" type='text' placeholder="STATE *" />
                                        </Col>
                                        <Col md={6} lg={4}>
                                            <Form.Control size="sm" type='text' placeholder="ADDRESS 2 *" />
                                        </Col>
                                        <Col md={6} lg={4}>
                                            <Form.Control size="sm" type='text' placeholder="CITY *" />
                                        </Col>
                                        <Col md={6} lg={4}>
                                            <Form.Control size="sm" type='text' placeholder="POSTAL CODE *" />
                                        </Col>
                                        <Col md={6} lg={4}>
                                            <Form.Control size="sm" type='text' placeholder="PHONE *" />
                                        </Col>
                                        <Col md={6} lg={4}>
                                            <Form.Control size="sm" type='text' placeholder="EMAIL ADDRESS" />
                                        </Col>
                                        <Col md={6} lg={4}>
                                            <Button size="sm" variant="secondary" className="w-100">
                                                PAY NOW
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="d-flex flex-column gap-2 flex-sm-row justify-content-between">
                        <Button
                            size='lg'
                            className='px-6 px-md-10'
                            variant="secondary"
                            onClick={handlePrevious}
                            disabled={currentStep === 0}
                        >
                            BACK TO PREVIOUS SECTION
                        </Button>

                        <Button
                            size='lg'
                            className='px-6 px-md-10'
                            variant="secondary"
                            onClick={handleNext}
                            disabled={currentStep === steps.length - 1}
                        >
                            SAVE AND CONTINUE
                        </Button>
                    </div>
                </Container>
            </section>

            <CTASection />
        </>
    );
}