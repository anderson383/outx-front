// import type {
//   GetServerSidePropsContext, InferGetServerSidePropsType
// } from 'next';
// import {authOptions} from '../api/auth/[...nextauth]';
// import {getProviders} from 'next-auth/react';
// import { getServerSession } from 'next-auth/next';
// import LoginForm from '@/components/features/login-form/login-form';

// export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   return (
//     <>
//       {Object.values(providers).map((provider:any) => (
//         <LoginForm name={provider.name} id={provider.id} key={provider.id} />
//       ))}
//     </>
//   );
// }

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const session = await getServerSession(context.req, context.res, authOptions);

//   if (session) {
//     return { redirect: { destination: '/' } };
//   }

//   const providers = await getProviders();

//   return {props: { providers: providers ?? {}}};
// }

import type {
  GetServerSidePropsContext, InferGetServerSidePropsType
} from 'next';
import {authOptions} from './api/auth/[...nextauth]';
import { getCsrfToken } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import Head from 'next/head';
import LoginForm from '@/components/features/login-form/login-form';

export default function SignIn({ csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>
            Login | Outx
        </title>
      </Head>
      <LoginForm id='log' name='login' csrfToken={csrfToken || ''} />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: '/' } };
  }

  return {props: {csrfToken: await getCsrfToken(context)}};
}
