import React, { Suspense } from 'react';
import AssociateApplication from './AssociateApplication';

export default function AssociateApplicationPage() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <AssociateApplication />
            </Suspense>
        </>
    );
}