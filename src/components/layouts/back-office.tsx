import { Header } from '../features/header/header';

interface BackOfficeLayoutProps {
  children: React.ReactNode
}

const BackOfficeLayout:React.FC<BackOfficeLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default BackOfficeLayout;
