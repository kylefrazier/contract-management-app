'use server';

import { redirect } from 'next/navigation';
import PocketBase from 'pocketbase';
import { cookies } from 'next/headers';

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // TODO: server-side validation

  const pb = new PocketBase(process.env.POCKETBASE_URL);
  const data = await pb
    .collection('users')
    .authWithPassword(email, password);

  const cookie = data.token;

  cookies().set('pb_auth', cookie, {
    secure: true,
    path: '/',
    sameSite: 'strict',
    httpOnly: true,
  });

  redirect('/dashboard');
}

export async function logout() {
  cookies().delete('pb_auth');
  redirect('/');
}
