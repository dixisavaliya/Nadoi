import React, { Suspense } from 'react';
import ContactUs from './ContactUs';

export default function ContactUsPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactUs />
      </Suspense>
    </>
  );
}