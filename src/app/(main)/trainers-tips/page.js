import React, { Suspense } from 'react';
import TrainersTips from './TrainersTips';

export default function TrainersTipsPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TrainersTips />
      </Suspense>
    </>
  );
}