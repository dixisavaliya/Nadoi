'use client';

import { Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import LoginCTASection from '@/components/common/LoginCTASection';
import { useEffect, useState } from 'react';
import { getData, postData } from '@/utils/api';
import { toast } from 'react-toastify';

export default function ResetPassword() {
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMatch, setErrorMatch] = useState(false);
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    });
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");


    useEffect(() => {
        try {
            const tokenVerify = async () => {
                const result = await getData(`auth/forgot-verify-token?token=${token}`)
                if (result.success != true) {
                    router.push("/login")
                    toast.success(result.message);
                };
            };
            tokenVerify();
        } catch (error) {
            console.log(error);
        };
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === "confirmPassword") {
            setErrorMatch(false);
        };
    };

    const handleReset = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        };

        if (formData.password !== formData.confirmPassword) {
            setErrorMatch(true);
            setValidated(true);
            return;
        };
        setLoading(true);
        setValidated(true);
        try {
            const data = {
                token: token,
                password: formData.password,
                confirm_password: formData.confirmPassword
            };
            let result = await postData(`auth/reset-password`, data)
            let response = result.data;
            console.log(response);
            if (result.success) {
                router.push("/login")
                toast.success(result.message);
            } else {
                toast.error(result.message);
            };
        }
        catch (error) {
            setLoading(false);
            const message = error.response.status === 422 ? "Passwords do not match" : error.response?.message;
            console.log(error);
            toast.error(message);
        };

    };

    return (
        <>
            <section className="section-auth d-flex flex-column flex-md-row">
                <LoginCTASection />
                <div className='auth-data-form flex-fill d-flex'>
                    <div className='auth-form py-10 px-4 px-sm-6 px-lg-10 m-auto margin-child'>
                        <div className='mb-6 mb-lg-8 mb-xl-12 text-center'>
                            <h1 className='h4 fw-bold mb-2'>Reset Password</h1>
                            <span className='d-inline-block w-100 fw-medium'>  Enter new password for your account.</span>
                        </div>
                        <Form className='d-flex flex-column gap-4' noValidate validated={validated} onSubmit={handleReset}>

                            {/* <Form.Group controlId="formEmail">
                                <Form.Control
                                    size='lg'
                                    type="email"
                                    placeholder="Email"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your email.
                                </Form.Control.Feedback>
                            </Form.Group> */}

                            <Form.Group controlId="formNewPassword">
                                <Form.Control
                                    name="password"
                                    size='lg'
                                    type="password"
                                    placeholder="New Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter new password.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formConfirmPassword">
                                <Form.Control
                                    size='lg'
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    isInvalid={errorMatch || (validated && !formData.confirmPassword)}
                                    validate={{
                                        match: { value: 'password', errorMessage: "Password and Confirm Password must be the same." }
                                    }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {/* {errorMatch ? "Password and Confirm Password must match." : "Please confirm your password."} */}
                                    {errorMatch ? "Password and Confirm Password must be the same." : "Please confirm your password."}
                                </Form.Control.Feedback>
                            </Form.Group>

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
                </div >
            </section >
        </>
    );
};