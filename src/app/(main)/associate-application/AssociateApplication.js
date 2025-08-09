"use client";
import BannerSection from "@/components/common/BannerSection";
import ContentSection from "@/components/common/ContentSection";
import CTASection from "@/components/common/CTASection";
import ServiceSection from "@/components/common/ServicesSection";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { useEffect, useRef, useState } from "react";
import { getData, postData } from "@/utils/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Typeahead } from "react-bootstrap-typeahead";

export default function AssociateApplication() {
    const [validated, setValidated] = useState(false);
    const [countries, setCountries] = useState([]);
    const [breedExperience, setBreedExperience] = useState([]);
    const [specialities, setSpecialities] = useState([]);
    const [emailMatchError, setEmailMatchError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [skill, setSkill] = useState([]);
    const skillsRef = useRef([]);
    const router = useRouter();
    const [userData, setUserData] = useState({
        selectedCountry: [],
        selectedBreedExperience: [],
        selectedspecialities: [],
    });
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        confirm_email: "",
        password: "",
        confirm_password: "",
        address: "",
        address_continued: "",
        country_id: [],
        state: "",
        city: "",
        postal_code: "",
        phone: "",
        mobile_phone: "",
        year_of_birth: "",
        breed_experience: [],
        specialities: [],
        skills: []
    });

    const type = "checkbox";

    // const options = [
    //     "Professional Dog Trainer",
    //     "Behavior Consultant",
    //     "Specialized Trainer",
    //     "Experienced Dog Trainer",
    //     "Service Dog/Therapy Dog trainer",
    //     "Aspiring Dog Trainer",
    //     "Volunteer Trainer",
    //     "Veterinary Professional",
    //     "Animal Shelter and Rescue Worker",
    //     "Boarding Facility Manager",
    //     "Dog Walker",
    //     "Dog Groomer"
    // ];

    const options = skill

    useEffect(() => {
        getskillData();
        getCountry();
        getBreedExperience();
        getSpecialities();
    }, [])

    const getskillData = async () => {
        try {
            const result = await getData('public/skills')
            const response = result.data
            setSkill(response);
        } catch (error) {
            console.log(error);
        }
    };

    const getCountry = async () => {
        try {
            const result = await getData('countries')
            const response = result.data
            setCountries(response);
        } catch (error) {
            console.log(error);
        }
    };

    const getBreedExperience = async () => {
        try {
            const result = await getData('breed-experience')
            const response = result.data
            setBreedExperience(response);
        } catch (error) {
            console.log(error);
        }
    };

    const getSpecialities = async () => {
        try {
            const result = await getData('specialities')
            const response = result.data
            setSpecialities(response);
        } catch (error) {
            console.log(error);
        }
    };

    // Split options into two columns
    const mid = Math.ceil(options.length / 2);
    const leftColumn = options.slice(0, mid);
    const rightColumn = options.slice(mid);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox" && name === "skills") {
            if (checked) {
                skillsRef.current = [...skillsRef.current, value];
            } else {
                skillsRef.current = skillsRef.current.filter(i => i !== value)
            }
            setFormData({
                ...formData,
                [name]: skillsRef.current
            })
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
            if (name === "confirm_email") {
                setEmailMatchError(false);
            }
        }


    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        setLoading(true);
        if (formData.email !== formData.confirm_email) {
            setEmailMatchError(true);
            setValidated(true);
            return;
        }
        try {
            const data = {
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                confirm_email: formData.confirm_email,
                password: formData.password,
                confirm_password: formData.confirm_password,
                address: formData.address,
                address_continued: formData.address_continued,
                country_id: userData.selectedCountry.map(data => data.id),
                state: formData.state,
                city: formData.city,
                postal_code: formData.postal_code,
                phone: formData.phone,
                mobile_phone: formData.mobile_phone,
                year_of_birth: formData.year_of_birth,
                breed_experience: userData.selectedBreedExperience.map(data => data.id),
                specialities: userData.selectedspecialities.map(data => data.id),
                skills: formData.skills
            }
            const response = await postData('auth/register/associate-member', data)
            const result = response.data;
            if (response.success == true) {
                localStorage.setItem("token", result.token);
                document.cookie = `token=${result.token}; path=/;`;
                window.location.href = "/profile";
                toast.success(response.message);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            setLoading(false);
            toast.error(error.response.message);
            console.log(error);
        }
    };

    return (
        <>
            <BannerSection
                imageSrc="/images/banner-home.jpg"
                heading="Become an <br/> Associate member."
                subHeading="Just fill out the application below, agree to our code of ethics, and pay your yearly member fee of $35.00."
                buttonText="APPLY BELOW NOW"
                buttonLink="/membership"
            />

            <ContentSection
                title="Why Become an Associate Member?"
                description="NADOI Associate Membership brings many benefits to people interested in dogs, dog
                training, and dog behavior. NADOI is a long established community of top-notch dog
                trainers, and Associate Membership offers a chance to join in our discussions, ask ques-
                tions, and get reduced prices on NADOI sponsored events. You will benefit from industry
                discounts that range from books to e-training to business insurance."
            />

            <ServiceSection
                title="Benefits for associate members include:"
                subtitle='Still have questions? Visit our <a href="/faq" class="fw-bold link-underline link-primary">FAQ page</a>.'
                services={[
                    {
                        image: "/images/icon-achievement.png",
                        title: "Recognition of Your Training Skills & Achievements",
                        description: "Only trainers with high levels of expertise and expereince can become NADOI-certified."
                    },
                    {
                        image: "/images/icon-idea.png",
                        title: "Marketing Tools and Business Support",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-gears.png",
                        title: "Access to Member Only Library",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-events.png",
                        title: "Exclusive Member Events and Webinars",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-professional.png",
                        title: "Professional Devlopment and Education",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-networking.png",
                        title: "Networking Opportunities",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-target.png",
                        title: "Advocacy and Resources",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-coupon.png",
                        title: "Offers and Discounts from NADOI partners",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    }
                ]}
            />

            <section className="py-12 py-md-15 py-lg-20 py-xl-25">
                <Container>
                    <h2 className='mb-8 mb-lg-12 mb-xl-15 text-center'>Associate Member Application</h2>

                    <Form noValidate validated={validated} onSubmit={handleRegister}>
                        <h5 className="fw-bold mb-4 mb-xl-6">Account Information</h5>
                        <Row className='g-4 g-lg-6'>
                            <Col sm={6} md={4}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="FIRST NAME *"
                                    id="first_name"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    First name is required.
                                </Form.Control.Feedback>
                            </Col>
                            <Col sm={6} md={4}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="EMAIL/USERNAME *"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Email or username is required.
                                </Form.Control.Feedback>
                            </Col>
                            <Col sm={6} md={4}>
                                <Form.Control
                                    size="sm"
                                    type="password"
                                    placeholder="PASSWORD *"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Password is required.
                                </Form.Control.Feedback>
                            </Col>
                            <Col sm={6} md={4}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="LAST NAME *"
                                    id="last_name"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Last name is required.
                                </Form.Control.Feedback>
                            </Col>
                            <Col sm={6} md={4}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="CONFIRM EMAIL/USERNAME *"
                                    id="confirm_email"
                                    name="confirm_email"
                                    value={formData.confirm_email}
                                    onChange={handleChange}
                                    isInvalid={emailMatchError || (validated && !formData.confirm_email)}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    {/* Please confirm your email. */}
                                    {emailMatchError
                                        ? "Email and Confirm Email must match."
                                        : "Please confirm your email."}
                                </Form.Control.Feedback>
                            </Col>
                            <Col sm={6} md={4}>
                                <Form.Control
                                    size="sm"
                                    type="password"
                                    placeholder="CONFIRM PASSWORD *"
                                    id="confirm_password"
                                    name="confirm_password"
                                    value={formData.confirm_password}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please confirm your password.
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                        <h5 className="fw-bold mb-4 mb-xl-6 mt-6 mt-xl-12">Contact Information</h5>
                        <Row className='g-4 g-lg-6'>
                            <Col sm={6} md={4}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="ADDRESS *"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Address is required.
                                </Form.Control.Feedback>
                                <span className="fw-medium text-primary mt-1">(Not visible to public)</span>
                            </Col>
                            <Col sm={6} md={4}>
                                <Typeahead
                                    id="country-typeahead"
                                    labelKey="name"
                                    onChange={(selected) => {
                                        setUserData(prev => ({ ...prev, selectedCountry: selected }));
                                    }}
                                    options={countries}
                                    placeholder="COUNTRY *"
                                    selected={userData.selectedCountry}
                                    className="typeahead-country"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Country is required.
                                </Form.Control.Feedback>
                            </Col>
                            <Col sm={6} md={4}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="STATE *"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    State is required.
                                </Form.Control.Feedback>
                            </Col>
                            <Col sm={6} md={4}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="ADDRESS CONTINUED *"
                                    id="address_continued"
                                    name="address_continued"
                                    value={formData.address_continued}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter continued address.
                                </Form.Control.Feedback>
                            </Col>
                            <Col sm={6} md={4}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="CITY *"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    City is required.
                                </Form.Control.Feedback>
                            </Col>
                            <Col sm={6} md={4}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="POSTAL CODE *"
                                    id="postal_code"
                                    name="postal_code"
                                    value={formData.postal_code}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Postal code is required.
                                </Form.Control.Feedback>
                            </Col>

                            <Col sm={6} md={4}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="PHONE *"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Phone number is required.
                                </Form.Control.Feedback>
                            </Col>
                            <Col sm={6} md={4}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="MOBILE PHONE"
                                    id="mobile_phone"
                                    name="mobile_phone"
                                    value={formData.mobile_phone}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="fw-medium text-primary mt-1">(Not visible to public)</span>
                                <Form.Control.Feedback type="invalid">
                                    Mobile number is required.
                                </Form.Control.Feedback>
                            </Col>
                            <Col sm={6} md={4}>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="YEAR OF BIRTH"
                                    id="year_of_birth"
                                    name="year_of_birth"
                                    value={formData.year_of_birth}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="fw-medium text-primary mt-1">(Not visible to public)</span>
                                <Form.Control.Feedback type="invalid">
                                    Year of birth is required.
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                        <h5 className="fw-bold mb-4 mb-xl-6 mt-6 mt-xl-12">Professional Experience <span className="h6 fw-bold">(Select all that apply)</span></h5>
                        <Row className='g-4 g-lg-6'>
                            <Col md={4}>
                                <div className="d-flex flex-column gap-4 gap-lg-6">
                                    <div className="flex-fill">
                                        <Typeahead
                                            inputProps={{ style: { color: '#253c78' } }}
                                            id="breed-experience-typeahead"
                                            labelKey="name"
                                            options={breedExperience}
                                            placeholder="Breed Experience"
                                            selected={userData.selectedBreedExperience || []}
                                            onChange={(selected) => {
                                                setUserData((prev) => ({
                                                    ...prev,
                                                    selectedBreedExperience: selected
                                                }));
                                            }}
                                            multiple={true}
                                            renderToken={(option, props, index) => (
                                                <span
                                                    key={index}
                                                    style={{
                                                        display: 'inline-block',
                                                        backgroundColor: '#e9ecef',
                                                        padding: '4px 8px',
                                                        marginRight: '5px',
                                                        borderRadius: '15px',
                                                        fontSize: '0.85rem'
                                                    }}
                                                >
                                                    {option.name}
                                                    <span
                                                        onClick={(e) => {
                                                            e.stopPropagation(); // prevent dropdown toggle
                                                            const updated = userData.selectedBreedExperience.filter(
                                                                (item) => item !== option
                                                            );
                                                            setUserData((prev) => ({
                                                                ...prev,
                                                                selectedBreedExperience: updated
                                                            }));
                                                        }}
                                                        style={{
                                                            marginLeft: '8px',
                                                            cursor: 'pointer',
                                                            color: 'red',
                                                            fontWeight: 'bold'
                                                        }}
                                                    >
                                                        ×
                                                    </span>
                                                </span>
                                            )}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter breed experience.
                                        </Form.Control.Feedback>
                                    </div>
                                    <div className="flex-fill">
                                        {/* <Form.Control
                                            size="sm"
                                            type="text"
                                            placeholder="VENUE EXPERIENCE *"
                                            id="venue_experience"
                                            name="venue_experience"
                                            value={formData.venue_experience}
                                            onChange={handleChange}
                                            required
                                        /> */}
                                        <Typeahead
                                            inputProps={{ style: { color: '#253c78' } }}
                                            id="specialities-typeahead"
                                            labelKey="name"
                                            options={specialities}
                                            placeholder="specialities"
                                            selected={userData.selectedspecialities || []}
                                            onChange={(selected) => {
                                                setUserData((prev) => ({
                                                    ...prev,
                                                    selectedspecialities: selected
                                                }));
                                            }}
                                            multiple={true}
                                            renderToken={(option, props, index) => (
                                                <span
                                                    key={index}
                                                    style={{
                                                        display: 'inline-block',
                                                        backgroundColor: '#e9ecef',
                                                        padding: '4px 8px',
                                                        marginRight: '5px',
                                                        borderRadius: '15px',
                                                        fontSize: '0.85rem'
                                                    }}
                                                >
                                                    {option.name}
                                                    <span
                                                        onClick={(e) => {
                                                            e.stopPropagation(); // prevent dropdown toggle
                                                            const updated = userData.selectedspecialities.filter(
                                                                (item) => item !== option
                                                            );
                                                            setUserData((prev) => ({
                                                                ...prev,
                                                                selectedspecialities: updated
                                                            }));
                                                        }}
                                                        style={{
                                                            marginLeft: '8px',
                                                            cursor: 'pointer',
                                                            color: 'red',
                                                            fontWeight: 'bold'
                                                        }}
                                                    >
                                                        ×
                                                    </span>
                                                </span>
                                            )}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter venue experience.
                                        </Form.Control.Feedback>
                                    </div >
                                </div >
                            </Col >
                            <Col sm={6} md={4} className="d-flex flex-column gap-2">
                                {leftColumn.map((label, index) => (
                                    <Form.Check
                                        key={index}
                                        type={type}
                                        id={`inline-${type}-left-${index}`}
                                        label={label.name}
                                        name="skills"
                                        value={label.id}
                                        onChange={handleChange}
                                    />
                                ))}
                            </Col>
                            <Col sm={6} md={4} className="d-flex flex-column gap-2">
                                {rightColumn.map((label, index) => (
                                    <Form.Check
                                        key={index}
                                        type={type}
                                        id={`inline-${type}-right-${index}`}
                                        label={label.name}
                                        name="skills"
                                        value={label.id}
                                        onChange={handleChange}
                                    />
                                ))}
                            </Col>
                        </Row >

                        {/* <h5 className="fw-bold mb-4 mb-xl-6 mt-6 mt-xl-12">Payment Information</h5> */}
                        < Row className='gx-0 gy-4 gy-sm-6 mt-5' >
                            {/* <Col xs={6}>
                                <Form.Control size="sm" type="text" className="px-3 rounded-end-0" placeholder="CARD NUMBER *" />
                            </Col>
                            <Col xs={3}>
                                <Form.Control size="sm" type="text" className="px-3 rounded-0" placeholder="MM/YY " />
                            </Col>
                            <Col xs={3}>
                                <Form.Control size="sm" type="text" className="px-3 rounded-start-0" placeholder="CVV" />
                            </Col> */}
                            < Col lg={12} >
                                <Form.Check
                                    type="checkbox"
                                    id="associate-membership"
                                    required
                                    // feedback="Agree to terms and conditions."
                                    feedbackType="invalid"
                                    label={
                                        <>
                                            I agree to join NADOI as an Associate Member for the annual cost of $35.00, and to abide by the <Link href="/" className='fw-bold link-underline text-black'>
                                                NADOI Code of Ethics.
                                            </Link>
                                        </>
                                    }
                                />
                            </Col >
                        </Row >
                        <div className="d-flex justify-content-end mt-10" >
                            <Button type="submit" variant="secondary" size="sm" disabled={loading}>
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </>
                                ) : "SUBMIT APPLICATION"}
                            </Button>
                        </div>
                    </Form >
                </Container >
            </section >

            <CTASection />
        </>
    );
}