import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js 14 App Directory!</h1>
      <p>
        <Link href='/initial-data'>
          Prefetching Using initial data --- Good for SEO
        </Link>
      </p>
      <p>
        <Link href='/hydration'>
          Prefetching Using Hydration --- Good for SEO
        </Link>
      </p>
    </div>
  );
}
