import {
  signOut, useSession
} from 'next-auth/react';
import styles from './header.module.scss';
export const Header = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.header}>
      <p>Header backoffice</p>

      <div className="">
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()} >Close session</button>
      </div>
    </div>
  );
};
