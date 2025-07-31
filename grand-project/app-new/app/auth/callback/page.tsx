'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      // Handle the URL fragment after Supabase redirect
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error('Error retrieving session:', error.message);
        return;
      }

      if (data.session) {
        // Successfully authenticated
        router.push('/dashboard');
      } else {
        console.log('No session found. Staying on callback page.');
      }
    };

    handleAuth();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Authenticating...</p>
    </div>
  );
}
