'use client';

import { useState } from 'react';

export default function ConcernPage() {
  const [text, setText] = useState('');

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <p className="text-xl">고민을 얘기해주세요 😊</p>
      <textarea
        className="border rounded w-80 h-40 p-4"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="나의 고민은 연애하고싶은거야."
      />
      <button className="mt-4 px-6 py-3 bg-black text-white rounded-md">
        ↑
      </button>
    </div>
  );
}
