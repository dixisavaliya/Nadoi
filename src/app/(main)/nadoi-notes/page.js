import React, { Suspense } from 'react';
import NadoiNotes from './NadoiNotes';

export default function NadoiNotesPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NadoiNotes />
      </Suspense>
    </>
  );
}