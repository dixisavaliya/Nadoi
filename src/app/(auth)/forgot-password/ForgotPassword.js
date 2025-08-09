'use client';

import { Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import LoginCTASection from '@/components/common/LoginCTASection';
import { useState } from 'react';
import { postData } from '@/utils/api';
import { toast } from 'react-toastify';

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setLoading(true);
        setValidated(true);
        try {
            let result = await postData(`auth/forgot-password`, { emailID: email })
            let responseJson = result.data;
            if (result.success) {
                toast.success(result.message);
            } else {
                toast.error(responseJson.message);
            }
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
            // const message = error.response.status === 401 ? error.response?.data?.message : "Invalid email or password, please try again.";
            console.log(error);
            // toast.error(message);
        }
    };

    return (
        <>
            <section className="section-auth d-flex flex-column flex-md-row">
                <LoginCTASection />
                <div className='auth-data-form flex-fill d-flex'>
                    <div className='auth-form py-10 px-4 px-sm-6 px-lg-10 m-auto margin-child'>
                        <div className='mb-6 mb-lg-8 mb-xl-12 text-center'>
                            <h1 className='h4 fw-bold mb-2'>Forgot Password?</h1>
                            <span className='d-inline-block w-100 fw-medium'>Enter your email and we&rsquo;ll send you instructions to reset your password.</span>
                        </div>
                        <Form className='d-flex flex-column gap-4' noValidate validated={validated} onSubmit={handleForgotPassword}>
                            <Form.Group controlId="email">
                                <Form.Control
                                    size='lg'
                                    type="email"
                                    placeholder="Enter your email"
                                    name='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            {/* <div className="d-flex justify-content-between align-items-center py-4">
                                <Form.Check
                                    type="checkbox"
                                    label="Remember"
                                    id="Remember"
                                />
                                <Link href="#" className='fw-bold link h6 w-auto'>
                                    Forgot password?
                                </Link>
                            </div> */}

                            <div className="d-grid">
                                <Button
                                    size='lg'
                                    variant="primary"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Loading...
                                        </>
                                    ) : "Submit"}
                                </Button>
                            </div>
                        </Form>

                        <div className="text-center d-flex justify-content-center w-100 mt-6 mt-md-8 mt-xl-10 fw-semibold">
                            Back to &nbsp;
                            <Link href="/login" className="d-flex fw-bold align-items-center gap-1">
                                <span className="link-underline link-primary">Login Page</span>
                                <i className="icon pt-5 pe-5">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.1665 10H15.8332" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path d="M10 4.16669L15.8333 10L10 15.8334" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}