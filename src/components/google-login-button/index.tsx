'use client';

import { signIn } from 'next-auth/react';

export type GoogleLoginButtonProps = {
  children: JSX.Element | string;
};

export default function GoogleLoginButton({
  children,
}: GoogleLoginButtonProps) {
  return <button onClick={() => signIn('google')}>{children}</button>;
}
