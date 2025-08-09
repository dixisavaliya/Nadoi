'use client';

import { Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LoginCTASection from '@/components/common/LoginCTASection';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { postData } from '@/utils/api';
import Image from 'next/image';

export default function Login() {
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setLoading(true);
        setValidated(true);
        try {
            let result = await postData('auth/login', {
                email: email,
                password: password
            });
            const response = result.data;
            if (result.success) {
                localStorage.setItem("token", response.token);
                document.cookie = `token=${response.token}; path=/;`;
                router.push("/profile")
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
        }
        catch (error) {
            setLoading(false);
            const message = error.result.status === 401 ? error.result.message : "Invalid email or password, please try again.";
            console.log(error);
            toast.error(message);
        }

    };

    const handleemailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    return (
        <>
            <section className="section-auth d-flex flex-column flex-md-row">
                <LoginCTASection />
                <div className='auth-data-form flex-fill d-flex'>
                    <div className='auth-form py-10 px-4 px-sm-6 px-lg-10 m-auto margin-child'>
                        <div className='mb-6 mb-lg-8 mb-xl-12 text-center'>
                            <Link href="/" className='brand-logo mb-3'>
                                <Image
                                    src="/images/image-membership-2.png"
                                    alt="NADOI"
                                    width={125}
                                    height={100}
                                />
                            </Link>
                            <h1 className='h4 fw-bold mb-2'>Login</h1>
                            <span className='d-inline-block w-100 fw-medium'>Please enter details to login to your NADOI account.</span>
                        </div>
                        <Form className='d-flex flex-column gap-4' noValidate validated={validated} onSubmit={handleLogin}>
                            <Form.Group controlId="email">
                                <Form.Control
                                    size='lg'
                                    type="text"
                                    placeholder="email"
                                    value={email}
                                    onChange={handleemailChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Control
                                    size='lg'
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your password.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div className="d-flex justify-content-between align-items-center py-4">
                                <Form.Check
                                    type="checkbox"
                                    label="Remember"
                                    id="Remember"
                                    name="Remember"
                                />
                                {/* <Link href="/forgot-password" className='fw-bold link h6 w-auto'>
                                    Forgot password?
                                </Link> */}
                                <div className="d-flex flex-column align-items-end gap-1">
                                    <Link href="/forgot-password" className='fw-bold link h6 w-auto'>
                                        Forgot password?
                                    </Link>
                                    {/* <Link href="/reset-password" className="fw-bold link h6 w-auto">
                                        Reset Password
                                    </Link> */}
                                </div>
                            </div>

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
                                    ) : "LOGIN"}
                                </Button>
                            </div>
                        </Form>

                        <div className="text-center d-flex justify-content-center w-100 mt-6 mt-md-8 mt-xl-10 fw-semibold">
                            Back to &nbsp;
                            <Link href="/" className="d-flex fw-bold align-items-center gap-1">
                                <span className="link-underline link-primary">Home Page</span>
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
