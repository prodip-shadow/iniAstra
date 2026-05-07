'use client';

import ErrorPage from '@/components/shared/ErrorPage/ErrorPage';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white">
        <ErrorPage error={error} reset={reset} scope="Global" />
      </body>
    </html>
  );
}
