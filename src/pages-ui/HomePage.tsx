'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <div className="text-4xl font-bold">제목 + 캘리그라피</div>
      <button
        onClick={() => router.push('/name')}
        className="px-6 py-3 bg-gray-200 rounded-md"
      >
        시작하기
      </button>
    </div>
  );
}
