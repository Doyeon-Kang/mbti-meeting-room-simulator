'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function NamePage() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <p className="text-xl">나의 이름을 알려주세요.</p>
      <input
        className="border px-4 py-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름 입력"
      />
      <button
        onClick={() => router.push('/select-my-mbti')}
        className="px-6 py-3 bg-gray-200 rounded-md"
      >
        작성 완료
      </button>
    </div>
  );
}
