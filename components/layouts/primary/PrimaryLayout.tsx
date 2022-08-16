import Head from 'next/head';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';

export type TPrimaryLayout = {
  children: React.ReactNode;
};

const PrimaryLayout: React.FC<TPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextJS Fullstack App Template</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center">
        <Header />
        <main>{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
