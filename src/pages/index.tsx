import {
  signOut, useSession
} from 'next-auth/react';
import LoginForm from '@/components/features/login-form/login-form';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index: React.FC = () => {
  const { data: session } = useSession();

  console.log(session, 'seesion');

  return (
    <main className="">
      <h2>Página protegida!!!! INIT</h2>
      Signed in as {session?.user?.email} <br />
      <button onClick={() => signOut()} >Close session</button>
    </main>
  );
};

export default Index;
