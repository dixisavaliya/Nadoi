import React, { Suspense } from 'react';
import Donate from './Donate';

export default function DonatePage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Donate />
      </Suspense>
    </>
  );
}