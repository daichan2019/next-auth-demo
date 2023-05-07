'use client';

import { signOut } from 'next-auth/react';

export type LogoutButtonProps = {
  children: JSX.Element | string;
};

export default function LogoutButton({ children }: LogoutButtonProps) {
  return <button onClick={() => signOut()}>{children}</button>;
}
