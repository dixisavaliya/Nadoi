'use client';

import { Container } from 'react-bootstrap';

export default function ContentSection({
    title,
    description,
    className = '',
}) {
    return (
        <section className={`py-12 py-md-15 py-lg-20 py-xl-25 ${className}`}>
            <Container>
                {title && <h2 className="mb-6 mb-lg-8 text-center">{title}</h2>}
                {description && (
                    <h4 className="fw-medium mb-6 mb-md-8 mx-md-0 mx-auto fst-italic">
                        {description}
                    </h4>
                )}
            </Container>
        </section>
    );
}
