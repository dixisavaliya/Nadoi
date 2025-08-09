import React, { Suspense } from 'react';
import FindInstructors from './FindInstructors';

export default function FindInstructorsPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <FindInstructors />
      </Suspense>
    </>
  );
}
