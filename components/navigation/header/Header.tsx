import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthButton from '../../buttons/auth/AuthButton';
import Search from '../../utility/search/Search';

export type THeader = {} & React.ComponentPropsWithoutRef<'header'>;

const Header: React.FC<THeader> = ({ className, ...headerProps }) => {
  const router = useRouter();

  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className="space-x-5 m-5">
        {router.pathname === '/results' ? (
          <div className="flex items-center gap-11">
            <Link href="/">
              <div style={{ width: 92, height: 30 }} className="cursor-pointer">
                <Image
                  src="/Google.png"
                  alt="Google Logo"
                  width={544}
                  height={184}
                  priority
                />
              </div>
            </Link>
            <Search />
          </div>
        ) : (
          <>
            <Link href="/">
              <a className="hover:underline">Home</a>
            </Link>
            <Link href="/">
              <a className="hover:underline">Store</a>
            </Link>
          </>
        )}
      </div>
      <div className="space-x-5 m-5">
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Gmail</a>
        </Link>
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Images</a>
        </Link>
        <AuthButton />
      </div>
    </header>
  );
};

export default Header;
