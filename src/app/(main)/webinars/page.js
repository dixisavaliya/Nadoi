import React, { Suspense } from 'react';
import Webinars from './Webinars';

export default function WebinarsPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Webinars />
      </Suspense>
    </>
  );
}