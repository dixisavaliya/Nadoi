"use client";
import { useState, useEffect } from 'react';
import TrainerCard from '@/components/common/TrainerCard';
import Image from 'next/image';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Link from 'next/link';
import { getData } from "@/utils/api";
import { Typeahead } from 'react-bootstrap-typeahead';


export default function FindInstructors() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const [formData, setFormData] = useState({
        countries: [],
        selectedCountry: [],
        isCountriesLoaded: false,

        venueExperiences: [],
        selectedVenue: [],
        isVenueExperienceLoaded: false,

        breedExperiences: [],
        selectedBreed: [],
        isBreedExperienceLoaded: false,

        instructors: [],
        selectedInstructor: '',
        isInstructorsLoaded: false,

        certifiedInstructors: [],
        isCertifiedInstructorsLoaded: false,
        totalCertifiedCount: 0,

        postalCodes: [],
        selectedPostalCode: [],
    });


    const [associatePage, setAssociatePage] = useState(1);
    const associateItemsPerPage = 8;

    const [associateData, setAssociateData] = useState({
        associateInstructors: [],
        isAssociateInstructorsLoaded: false,
        totalAssociateCount: 0
    });
    const [isBreedFocused, setBreedFocused] = useState(false);
    const [isVenueFocused, setVenueFocused] = useState(false);


    const totalPages = Math.ceil(formData.totalCertifiedCount / itemsPerPage);
    const currentTrainers = formData.certifiedInstructors || [];

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
    };

    const fetchCountries = async () => {
        if (formData.isCountriesLoaded) return;

        try {
            const response = await getData('countries');
            if (response.success) {
                const countryNames = response.data.map(country => country.name);
                setFormData(prev => ({
                    ...prev,
                    countries: countryNames,
                    isCountriesLoaded: true
                }));
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.error('Error fetching countries:', error);
            toast.error(error.response?.message);
        }
    };


    const fetchVenueExperiences = async () => {
        if (formData.isVenueExperienceLoaded) return;

        try {
            const response = await getData('specialities');
            if (response.success) {
                const venues = response.data.map(item => item.name);
                setFormData(prev => ({
                    ...prev,
                    venueExperiences: venues,
                    isVenueExperienceLoaded: true
                }));
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.error('Error fetching specialities:', error);
            toast.error(error.response?.message);
        }
    };

    const fetchBreedExperiences = async () => {
        if (formData.isBreedExperienceLoaded) return;

        try {
            const response = await getData('breed-experience');
            if (response.success) {
                const breeds = response.data.map(item => item.name);
                setFormData(prev => ({
                    ...prev,
                    breedExperiences: breeds,
                    isBreedExperienceLoaded: true
                }));
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.error('Error fetching breed experiences:', error);
            toast.error(error.response?.message);
        }
    };

    const fetchInstructors = async () => {
        if (formData.isInstructorsLoaded) return;

        try {
            const response = await getData('search/instructor?all=true');

            if (response.success) {
                const instructors = response.data.users.map(item => ({
                    id: item.id,
                    name: `${item.first_name} ${item.last_name}`,
                    member_type: item.member_type,
                    postal_code: item.postal_code || ''
                }));

                const postalCodeList = instructors
                    .map(inst => inst.postal_code)
                    .filter(code => !!code);

                const uniquePostalCodes = [...new Set(postalCodeList)];

                instructors.sort((a, b) => {
                    const priority = {
                        'certified_members': 0,
                        'associate_members': 1
                    };
                    return (priority[a.member_type] ?? 2) - (priority[b.member_type] ?? 2);
                });

                setFormData(prev => ({
                    ...prev,
                    instructors,
                    isInstructorsLoaded: true,
                    postalCodes: uniquePostalCodes
                }));
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.error('Error fetching instructors:', error);
            toast.error(error.response?.message || 'Error fetching instructors');
        }
    };

    const fetchCertifiedInstructors = async (page = 1, limit = 8) => {
        try {
            const memberType = 'certified_members';
            const response = await getData(
                `search/instructor?member_type=${memberType}&page=${page}&limit=${limit}`
            );

            if (response.success) {
                const certifiedUsers = response.data.users;

                const instructors = certifiedUsers.map(user => ({
                    name: `${user.first_name} ${user.last_name}`,
                    city: user.city,
                    zip: user.postal_code || '',
                    distance: '125 miles away', //Hard coded now
                    website: user.personal_website || '',
                    email: user.email,
                    phone: user.phone || ''
                }));

                setFormData(prev => ({
                    ...prev,
                    certifiedInstructors: instructors,
                    totalCertifiedCount: response.data.total || certifiedUsers.length,
                    isCertifiedInstructorsLoaded: true
                }));

            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.error('Error fetching certified instructors:', error);
            toast.error(error.response?.message || 'Something went wrong');
        }
    };

    const fetchAssociateInstructors = async (page = 1, limit = 8) => {
        try {
            const memberType = 'associate_members';

            const response = await getData(
                `search/instructor?member_type=${memberType}&page=${page}&limit=${limit}`
            );

            if (response.success) {
                const associates = response.data.users.map(user => ({
                    name: `${user.first_name} ${user.last_name}`,
                    location: `${user.city}, ${user.postal_code}`,
                    distance: '125 miles away' //Hard coded now
                }));

                setAssociateData({
                    associateInstructors: associates,
                    isAssociateInstructorsLoaded: true,
                    totalAssociateCount: response.data.total || associates.length
                });
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.error('Error fetching associate instructors:', error);
            toast.error(error.response?.message || 'Something went wrong');
        }
    };

    const handleSearch = async () => {
        const buildQueryParams = () => {
            const queryParams = {};

            if (formData.selectedInstructor) {
                const selected = formData.instructors.find(i => i.id === formData.selectedInstructor);
                if (selected) {
                    const [first_name, ...lastParts] = selected.name.split(' ');
                    queryParams.first_name = first_name;
                    queryParams.last_name = lastParts.join(' ');
                }
            }

            if (formData.selectedPostalCode?.length) {
                queryParams.postal_code = formData.selectedPostalCode[0];
            }

            if (formData.selectedCountry?.length) {
                queryParams.country = formData.selectedCountry[0];
            }

            if (formData.selectedBreed?.length) {
                queryParams.breed_experience = formData.selectedBreed[0];
            }

            if (formData.selectedVenue?.length) {
                queryParams.speciality = formData.selectedVenue[0];
            }

            return queryParams;
        };

        const queryParams = buildQueryParams();

        const memberTypes = ['certified_members', 'associate_members'];

        try {
            const [certifiedRes, associateRes] = await Promise.all(
                memberTypes.map(type =>
                    getData(`search/instructor?${new URLSearchParams({ ...queryParams, member_type: type })}`)
                )
            );

            if (certifiedRes.success) {
                const certifiedUsers = certifiedRes.data.users.map(user => ({
                    name: `${user.first_name} ${user.last_name}`,
                    city: user.city,
                    zip: user.postal_code || '',
                    distance: '125 miles away',
                    website: 'https://trainerwebsitehere.com',
                    email: user.email,
                    phone: user.phone || ''
                }));

                setFormData(prev => ({
                    ...prev,
                    certifiedInstructors: certifiedUsers,
                    totalCertifiedCount: certifiedRes.data.total || certifiedUsers.length,
                    isCertifiedInstructorsLoaded: true
                }));
            } else {
                toast.error(certifiedRes.message);
            }

            if (associateRes.success) {
                const associateUsers = associateRes.data.users.map(user => ({
                    name: `${user.first_name} ${user.last_name}`,
                    location: `${user.city}, ${user.postal_code}`,
                    distance: '125 miles away'
                }));

                setAssociateData({
                    associateInstructors: associateUsers,
                    isAssociateInstructorsLoaded: true,
                    totalAssociateCount: associateRes.data.total || associateUsers.length
                });
            } else {
                toast.error(associateRes.message);
            }

        } catch (error) {
            console.error('Error during instructor search:', error);
            toast.error(error.response?.message || 'Search failed');
        }
    };


    useEffect(() => {
        fetchAssociateInstructors(associatePage, associateItemsPerPage);
    }, [associatePage]);

    useEffect(() => {
        fetchCertifiedInstructors(currentPage, itemsPerPage);
    }, [currentPage]);


    return (
        <>
            <section className="section-banner section-banner-small text-center text-md-start py-12 py-md-15 d-flex align-items-end align-items-md-center justify-content-center">
                <figure className="picture absolute-div">
                    <Image
                        src="/images/banner-instructor.jpg"
                        alt="Find an Instructor"
                        fill
                        priority
                    />
                </figure>

                <Container className="position-relative">
                    <h1 className="text-white fw-semibold">Find an Instructor</h1>
                    <h4 className="text-white fw-semibold mb-6 mb-md-8">Is Your Dog Driving You Crazy?</h4>
                    <h5 className="text-white fw-normal mb-6 mb-md-8 mx-md-0 mx-auto">
                        Find a certified dog trainer in your area using the
                        search form below.
                    </h5>

                    <Button
                        href="/"
                        variant="secondary"
                        size="sm"
                    >
                        HOW TO CHOOSE A DOG TRAINER
                    </Button>

                </Container>
            </section>

            <section className='bg-primary py-10 py-xl-15 ps-4 ps-xl-25'>
                <Container>
                    <h3 className='text-white mb-6 mb-xl-10'>Find an Instructor</h3>

                    <Row className='gx-2 gx-xl-4 gy-4 gy-xl-8'>
                        <Col md={4}>
                            <Form.Group controlId="formCountry">
                                <Form.Label className='h6 fw-semibold mb-2 text-white'>Country</Form.Label>
                                <Typeahead
                                    id="country-typeahead"
                                    labelKey="country"
                                    onChange={(selected) => {
                                        setFormData(prev => ({ ...prev, selectedCountry: selected }));
                                    }}
                                    onFocus={fetchCountries}
                                    options={formData.countries}
                                    placeholder="country"
                                    selected={formData.selectedCountry}
                                    className="typeahead-country"
                                />
                            </Form.Group>
                        </Col>

                        <Col md={4} lg={3}>
                            <Form.Group controlId="formPostalCode">
                                <Form.Label className='h6 fw-semibold mb-2 text-white'>Postal Code</Form.Label>
                                <Typeahead
                                    inputProps={{ style: { color: '#253c78' } }}
                                    id="postal-code-typeahead"
                                    labelKey={(option) => option}
                                    onFocus={fetchInstructors}
                                    onChange={(selected) => {
                                        setFormData(prev => ({ ...prev, selectedPostalCode: selected }));
                                    }}
                                    options={formData.postalCodes}
                                    placeholder="postal code"
                                    selected={formData.selectedPostalCode}
                                    multiple={false}
                                />
                            </Form.Group>
                        </Col>

                        <Col md={4} lg={3} className="d-flex align-items-end">
                            <Button
                                variant="warning"
                                className="w-100 fw-bold text-uppercase"
                                onClick={handleSearch}
                            >
                                Search
                            </Button>

                        </Col>
                        <Col md={2}>
                        </Col>
                        <Col xs={12} lg={1} className="d-flex align-items-center">
                            <span className='d-flex align-items-center gap-1 gap-xl-2 text-ehite w-auto text-white fw-semibold margin-child'>
                                <i className="icon p-3 p-xl-4">
                                    <Image
                                        src="/images/icon-filter.png"
                                        alt="Filter"
                                        fill
                                        priority
                                    />
                                </i>
                                <span>Filters</span>
                            </span>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <Typeahead
                                inputProps={{ style: { color: '#253c78' } }}
                                id="breed-experience-typeahead"
                                onFocus={fetchBreedExperiences}
                                onChange={(selected) => {
                                    setFormData(prev => ({ ...prev, selectedBreed: selected }));
                                }}
                                options={formData.breedExperiences}
                                placeholder="Breed Experience"
                                selected={formData.selectedBreed}
                                multiple={false}
                                isLoading={isBreedFocused && !formData.isBreedExperienceLoaded}
                                minLength={1}
                            />
                        </Col>

                        <Col xs={12} sm={6} md={3}>
                            <Typeahead
                                inputProps={{ style: { color: '#253c78' } }}
                                id="venue-experience-typeahead"
                                onFocus={fetchVenueExperiences}
                                onChange={(selected) => {
                                    setFormData(prev => ({ ...prev, selectedVenue: selected }));
                                }}
                                options={formData.venueExperiences}
                                placeholder="Venue Experience"
                                selected={formData.selectedVenue}
                                multiple={false}
                                isLoading={isVenueFocused && !formData.isVenueExperienceLoaded}
                                minLength={1}
                            />
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <Typeahead
                                inputProps={{ style: { color: '#002b71' } }}
                                id="instructor-typeahead"
                                labelKey="name"
                                options={formData.instructors}
                                onFocus={fetchInstructors}
                                placeholder="Select Instructor"
                                onChange={(selected) => {
                                    setFormData(prev => ({
                                        ...prev,
                                        selectedInstructor: selected.length > 0 ? selected[0].id : ''
                                    }));
                                }}
                                selected={formData.instructors.filter(
                                    (i) => i.id === formData.selectedInstructor
                                )}
                                renderMenuItemChildren={(option) => (
                                    <div
                                        style={{
                                            backgroundColor: 'white',
                                            padding: '6px 10px',
                                            borderRadius: '4px',
                                            color: option.member_type === 'certified_members' ? '#002b71' : '#000'
                                        }}
                                    >
                                        <div>{option.name}</div>
                                        {option.member_type && (
                                            <small style={{ fontSize: '0.75rem', color: '#555' }}>
                                                {option.member_type}
                                            </small>
                                        )}
                                    </div>
                                )}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="d-flex flex-column bg-gray-200">
                <div className='w-100 py-4'>
                    <Container>
                        <div className='d-flex flex-column flex-lg-row align-items-center justify-content-between gap-2 gap-lg-5'>
                            <div className='d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-5'>
                                <h5 className='fw-bold text-black w-auto'>{formData.totalCertifiedCount} Results</h5>
                                <div className='d-flex flex-wrap gap-1 gap-lg-5 align-items-center'>
                                    <Dropdown>
                                        <Dropdown.Toggle className='text-capitalize d-flex align-items-center gap-1 gap-sm-2 px-2 px-sm-4' variant="outline-light">
                                            <strong>Sort By:</strong> Distance
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Distance</Dropdown.Item>
                                            <Dropdown.Item>Name</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button variant="outline-light" className='text-capitalize px-2 px-sm-4'>Show on Map</Button>
                                </div>
                            </div>

                            <div className="pagination d-flex justify-content-center align-items-center py-2 h6 w-auto fw-medium gap-3 gap-xl-5 text-black">
                                <span className='icon' onClick={() => handlePageChange(1)}>&laquo;</span>
                                <span className='icon' onClick={() => handlePageChange(currentPage - 1)}>&lsaquo;</span>
                                {Array.from({ length: Math.min(7, totalPages) }, (_, i) => (
                                    <span
                                        key={i + 1}
                                        onClick={() => handlePageChange(i + 1)}
                                        className={currentPage === i + 1 ? 'text-primary' : ''}
                                    >
                                        {i + 1}
                                    </span>
                                ))}
                                {totalPages > 7 && <span>...</span>}
                                <span className='icon' onClick={() => handlePageChange(currentPage + 1)}>&rsaquo;</span>
                                <span className='icon' onClick={() => handlePageChange(totalPages)}>&raquo;</span>
                            </div>
                        </div>

                        <div className='py-8 py-xl-12'>
                            <h3 className='mb-8 mb-xl-12'>NADOI Certified Members:</h3>
                            <Row xs={1} sm={2} md={3} lg={3} xl={4} className="g-8 g-xl-12">
                                {currentTrainers.map((trainer, index) => (
                                    <Col key={index}>
                                        <TrainerCard
                                            name={trainer.name}
                                            city={trainer.city}
                                            zip={trainer.zip}
                                            distance={trainer.distance}
                                            website={trainer.website}
                                            email={trainer.email}
                                            phone={trainer.phone}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Container>
                </div>
                <div className='w-100 py-8 py-xl-16 bg-white'>
                    <Container>
                        <h5 className="mb-6 mb-xl-8 text-primary fw-bold">
                            Associate Members:
                            <span className="fw-medium ms-1">
                                Please note that Associate Members and their skills have not been evaluated by NADOI.
                            </span>
                        </h5>
                        <Row className="g-6 g-sm-8 g-xl-12">
                            {associateData.associateInstructors.map((member, index) => (
                                <Col key={index} xs={12} sm={6} md={3}>
                                    <h6 className="text-black fw-bold">{member.name}</h6>
                                    <p className="fw-medium mb-1">{member.location}</p>
                                    <Link href="#" className="link-underline text-black fw-medium">
                                        {member.distance}
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
                <div className='w-100 py-4'>
                    <Container>
                        <div className='d-flex flex-column flex-lg-row align-items-center justify-content-between gap-2  gap-lg-5'>
                            <div className='d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-5'>
                                <h5 className='fw-bold text-black w-auto'>{associateData.totalAssociateCount} Results</h5>
                                <div className='d-flex flex-wrap gap-1 gap-lg-5 align-items-center'>
                                    <span className='d-none d-lg-inline-block'>|</span>
                                    <Dropdown>
                                        <Dropdown.Toggle className='text-capitalize d-flex align-items-center gap-1 gap-sm-2 px-2 px-sm-4' variant="outline-light">
                                            <strong>Sort By:</strong> Distance
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Distance</Dropdown.Item>
                                            <Dropdown.Item>Name</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button variant="outline-light" className='text-capitalize px-2 px-sm-4'>Show on Map</Button>
                                </div>
                            </div>

                            <div className="pagination d-flex justify-content-center align-items-center py-2 h6 w-auto fw-medium gap-3 gap-xl-5 text-black">
                                <span className='icon pt-5 pe-5 pt-xl-6 pe-xl-6' onClick={() => setAssociatePage(1)} aria-disabled={associatePage === 1}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M18 17L13 12L18 7M11 17L6 12L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className='icon pt-5 pe-5 pt-xl-6 pe-xl-6' onClick={() => setAssociatePage(prev => Math.max(prev - 1, 1))} aria-disabled={associatePage === 1}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>

                                <div className='d-none d-sm-inline-block'>Page</div>
                                {Array.from({ length: Math.min(7, Math.ceil(associateData.totalAssociateCount / associateItemsPerPage)) }, (_, i) => (
                                    <span
                                        key={i}
                                        onClick={() => setAssociatePage(i + 1)}
                                        className={associatePage === i + 1 ? 'text-primary' : ''}
                                    >
                                        {i + 1}
                                    </span>
                                ))}
                                {Math.ceil(associateData.totalAssociateCount / associateItemsPerPage) > 7 && <div className='d-none d-sm-inline-block'>more</div>}

                                <span className='icon pt-5 pe-5 pt-xl-6 pe-xl-6' onClick={() => setAssociatePage(prev => Math.min(prev + 1, Math.ceil(associateData.totalAssociateCount / associateItemsPerPage)))} aria-disabled={associatePage === Math.ceil(associateData.totalAssociateCount / associateItemsPerPage)}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className='icon pt-5 pe-5 pt-xl-6 pe-xl-6' onClick={() => setAssociatePage(Math.ceil(associateData.totalAssociateCount / associateItemsPerPage))} aria-disabled={associatePage === Math.ceil(associateData.totalAssociateCount / associateItemsPerPage)}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 17L11 12L6 7M13 17L18 12L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
};