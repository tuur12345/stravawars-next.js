'use client'; // needed at top of file for client-side code

import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-[var(--foreground)] p-5 flex flex justify-between items-center w-full">
      <img src="/map_icon.png"
        className="w-25 h-25 cursor-pointer"
        onClick={() => router.push('/map')}
      />
      <img src="/stravawars_icon.png"
        className="w-50 h-25 cursor-pointer"
        onClick={() => router.push('/')}
      />
      <div>
        <p className='w-25'>sigma</p>
      </div>
    </header>
  );
}
