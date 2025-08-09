import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';

export default function ServiceSection({ title, subtitle, services = [] }) {
    return (
        <section className="bg-light py-12 py-md-15 py-lg-20 py-xl-25 text-center">
            <Container>
                {title && (
                    <h2 className='mb-8 mb-lg-12 mb-xl-15' dangerouslySetInnerHTML={{ __html: title }}></h2>
                )}

                <Row className='g-8 g-md-12 justify-content-center'>
                    {services.map((item, index) => (
                        <Col sm={6} lg={4} xl={3} key={index}>
                            <i className='icon pt-15 pe-15 pt-xl-25 pe-xl-25 mb-1 mb-md-2'>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={600}
                                    height={600}
                                />
                            </i>
                            <h6 className='fw-semibold mb-2 mb-md-4'>{item.title}</h6>
                            <p>{item.description}</p>
                            <span className='fw-bold link link-primary cursor-pointer'>LEARN MORE</span>
                        </Col>
                    ))}
                </Row>

                {subtitle && (
                    <h3 className='mt-8 mt-lg-12' dangerouslySetInnerHTML={{ __html: subtitle }}></h3>
                )}
            </Container>
        </section>
    );
}
