import Link from 'next/link';

export type TSearchResult = {
  url: string;
  title: string;
  text: string;
} & React.ComponentPropsWithoutRef<'div'>;

const SearchResult: React.FC<TSearchResult> = ({
  url,
  title,
  text,
  className,
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className={`flex flex-col w-5/6 max-w-screen-md space-y-1 ${className}`}
    >
      <Link href={url}>
        <a
          className="cursor:pointer hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{url}</p>
          <p className="text-blue-600 text-xl">{title}</p>
        </a>
      </Link>
      <p>{text}</p>
    </div>
  );
};

export default SearchResult;
