import React, { Suspense } from 'react';
import Membership from './Membership';

export default function MembershipPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Membership />
      </Suspense>
    </>
  );
}