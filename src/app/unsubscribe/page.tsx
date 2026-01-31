'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const error = searchParams.get('error');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        {status === 'success' && (
          <>
            <div className="text-5xl mb-4">👋</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">You&apos;re unsubscribed</h1>
            <p className="text-gray-600 mb-6">
              No hard feelings. If you change your mind, you can always sign up again.
            </p>
          </>
        )}

        {status === 'not-found' && (
          <>
            <div className="text-5xl mb-4">🤔</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Email not found</h1>
            <p className="text-gray-600 mb-6">
              Looks like you&apos;re already unsubscribed, or this email was never on our list.
            </p>
          </>
        )}

        {error && (
          <>
            <div className="text-5xl mb-4">😕</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              We couldn&apos;t process your request. Try again or email michael@cdmxartweek.com.
            </p>
          </>
        )}

        {!status && !error && (
          <>
            <div className="text-5xl mb-4">📧</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Unsubscribe</h1>
            <p className="text-gray-600 mb-6">
              Click the unsubscribe link in any email to remove yourself from the list.
            </p>
          </>
        )}

        <Link
          href="/"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Back to CDMX Art Week
        </Link>
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <UnsubscribeContent />
    </Suspense>
  );
}
