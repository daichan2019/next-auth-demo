import GoogleLoginButton from '@/components/google-login-button';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  return (
    <div>
      <GoogleLoginButton>Googleでログインする</GoogleLoginButton>
    </div>
  );
}
