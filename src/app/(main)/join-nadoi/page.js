import React, { Suspense } from 'react';
import JoinNadoi from './JoinNadoi';

export default function JoinNadoiPage() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <JoinNadoi />
            </Suspense>
        </>
    );
}