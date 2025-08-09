'use client';

import Image from 'next/image';
import { Container, Button } from 'react-bootstrap';

export default function BannerSection({
    imageSrc,
    heading,
    subHeading,
    buttonText,
    buttonLink,
}) {
    return (
        <section className="section-banner section-banner-small text-center text-md-start py-12 py-md-15 d-flex align-items-center align-items-md-center justify-content-center">
            {imageSrc && (
                <figure className="picture absolute-div">
                    <Image
                        src={imageSrc}
                        alt={heading}
                        fill
                        priority
                    />
                </figure>
            )}

            <Container className="position-relative">
                {heading && (
                    <h1 className="text-white fw-semibold mb-6 mb-md-8" dangerouslySetInnerHTML={{ __html: heading }}></h1>
                )}

                {subHeading && (
                    <h5 className="text-white fw-normal mb-6 mb-md-8 mx-md-0 mx-auto">
                        {subHeading}
                    </h5>
                )}

                {buttonText && buttonLink && (
                    <Button
                        href={buttonLink}
                        variant="primary"
                        size="sm"
                        className="px-3 px-sm-6 px-xl-10"
                    >
                        {buttonText}
                    </Button>
                )}
            </Container>
        </section>
    );
}
