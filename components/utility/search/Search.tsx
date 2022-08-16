import { useRouter } from 'next/router';
import { useState } from 'react';

export type TSearch = {};

const Search: React.FC<TSearch> = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/results?search=${searchTerm}`);
      }}
    >
      <input
        type="text"
        className="rounded-full border-2 w-5/6 sm:w-96 h-12 px-3"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <div className="space-x-3">
        <button type="submit" className="btn-primary">
          Google Search
        </button>
        <button
          onClick={() => alert('FEATURE COMING SOON!')}
          type="submit"
          className="btn-primary"
        >
          I&apos;m Feeling lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
