import React, { Suspense } from 'react';
import Profile from './Profile';

export default function ProfilePage() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Profile />
            </Suspense>
        </>
    );
}