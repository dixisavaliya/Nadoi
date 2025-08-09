import Link from 'next/link';
import Image from 'next/image';

const TrainerCard = ({ name, city, zip, distance, website, email, phone }) => {
    return (
        <>
            <h5 className='fw-bold text-black mb-2'>{name}</h5>

            <ul className='d-flex flex-column gap-1 h6 fw-medium text-black'>

                <li>
                    <address>{city || ''}{zip ? `, ${zip}` : ''}</address>
                </li>

                {distance && (
                    <li>
                        <Link href="#" className='link-underline text-black'>
                            {distance}
                        </Link>
                    </li>
                )}

                {website && (
                    <li>
                        <Link target="_blank" href={`http://${website}`} className='link text-black'>
                            {website}
                        </Link>
                    </li>
                )}

                {email && (
                    <li>
                        <Link href={`mailto:${email}`} className='link text-black fw-semibold'>
                            {email}
                        </Link>
                    </li>
                )}

                {phone && (
                    <li>
                        <Link href={`tel:${phone}`} className='link text-black fw-semibold'>
                            {phone}
                        </Link>
                    </li>
                )}
            </ul>

            <figure className='picture p-8 p-lg-12 w-auto mt-4 mt-lg-6'>
                <Image
                    src="/images/image-membership-2.png"
                    alt="NADOI"
                    fill
                    priority
                />
            </figure>

        </>
    );
};

export default TrainerCard;
