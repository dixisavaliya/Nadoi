"use client";
import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getData } from "@/utils/api";

import Image from 'next/image';

const members = [
    {
        name: 'Featured Member One',
        description: 'Name of dog training business or specialty here',
        image: '/images/image-member.jpg'
    },
    {
        name: 'Featured Member Two',
        description: 'Name of dog training business or specialty here',
        image: '/images/image-member.jpg'
    },
    {
        name: 'Featured Member Three',
        description: 'Name of dog training business or specialty here',
        image: '/images/image-member.jpg'
    }
];

export default function FeatureSection() {
    const [homepageVideo, setHomepageVideo] = useState('');
    const [isHomepageVideoLoaded, setIsHomepageVideoLoaded] = useState(false);
    const [featuredMembers, setFeaturedMembers] = useState([]);
    const [imageErrors, setImageErrors] = useState({});
    useEffect(() => {
        fetchHomepageVideo();
        fetchFeaturedMembers();
    }, []);

    const fetchHomepageVideo = async () => {
        if (isHomepageVideoLoaded) return;

        try {
            const response = await getData("config");
            if (response.success) {
                const videoConfig = response.data.find(item => item.title === "youtube_url");
                if (videoConfig?.value) {
                    setHomepageVideo(videoConfig.value);
                }
                setIsHomepageVideoLoaded(true);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.error("Error fetching homepage video:", error);
            toast.error(error.response?.message || "Something went wrong");
        }
    };

    const fetchFeaturedMembers = async () => {
        try {
            const response = await getData("config/featured-members");
            if (response.success) {
                setFeaturedMembers(response.data || []);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.error("Error fetching featured members:", error);
            toast.error(error.response?.message || "Failed to load featured members");
        }
    };

    const cleanImageUrl = (url) => {
        try {
            const parsedUrl = new URL(url);
            const actualImageUrl = parsedUrl.searchParams.get("imgurl");
            return actualImageUrl || url;
        } catch {
            return url;
        }
    };

    const handleImageError = (index) => {
        setImageErrors((prev) => ({
            ...prev,
            [index]: true,
        }));
    };

    const extractVideoId = (url) => {
        const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
        return match ? match[1] : null;
    };

    const videoId = extractVideoId(homepageVideo);
    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

    return (
        <section className="section-watch py-12 py-md-15 py-lg-20 py-xl-25">
            <Container>
                <Row className='g-8 justify-content-center'>
                    <Col lg={7} xl={8}>
                        <h3 className='mb-4 mb-md-6 mb-xxl-10'>Watch us on YouTube</h3>

                        <div className="ratio ratio-16x9 bg-primary">
                            {embedUrl ? (
                                <iframe
                                    width="560"
                                    height="315"
                                    src={embedUrl}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <p className="text-white p-4">Video not available</p>
                            )}
                        </div>
                    </Col>
                    <Col lg={5} xl={4}>
                        <h3 className='mb-4 mb-md-6 mb-xxl-10'>Featured Members</h3>

                        <ul className='d-flex flex-column gap-4 gap-xl-6 gap-xxl-10'>
                            {featuredMembers.length > 0 ? (
                                featuredMembers.map((member, index) => {
                                    const profilePhoto = member.profile_photo
                                        ? cleanImageUrl(member.profile_photo)
                                        : null;
                                    const showFallback = imageErrors[index] || !profilePhoto;
                                    return (
                                        <li key={index} className='d-flex align-items-center gap-4 gap-xl-5'>
                                            <figure className="picture ratio ratio-1x1 w-auto p-10 p-xl-15 d-flex align-items-center justify-content-center  rounded">
                                                {!showFallback ? (
                                                    <img
                                                        src={profilePhoto}
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                        onError={() => handleImageError(index)}
                                                    />
                                                ) : (
                                                    <i
                                                        className="fa-solid fa-user-graduate text-muted important-style"
                                                    // style={{
                                                    //     color: 'rgb(37, 60, 120)',
                                                    //     fontSize: "5.5rem",
                                                    //     width: "100%",
                                                    //     height: "100%",
                                                    //     display: "flex",
                                                    //     alignItems: "center",
                                                    //     justifyContent: "center",
                                                    // }}
                                                    ></i>

                                                )}
                                            </figure>
                                            <div className='flex-fill'>
                                                <h5 className='text-black fw-semibold mb-1'>
                                                    {member.first_name} {member.last_name}
                                                </h5>
                                                <p className="fw-medium">{member.additional_info || 'No description provided'}</p>
                                            </div>
                                        </li>
                                    );
                                })
                            ) : (
                                <li>No featured members found.</li>
                            )}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
