'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const mbtiList = [
  'ENFP', 'ENFJ', 'ENTP', 'ENTJ',
  'ESFP', 'ESFJ', 'ESTP', 'ESTJ',
  'INFP', 'INFJ', 'INTP', 'INTJ',
  'ISFP', 'ISFJ', 'ISTP', 'ISTJ',
];

export default function MbtiMyPage() {
  const router = useRouter();
  const [selectedMbti, setSelectedMbti] = useState<string | null>(null);

  const handleSelect = (mbti: string) => {
    setSelectedMbti(mbti);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-xl mb-4">나의 MBTI를 선택해주세요.</p>
      <div className="mbti-grid">
        {mbtiList.map((mbti) => (
          <div
            key={mbti}
            className={`mbti-button ${selectedMbti === mbti ? 'selected' : ''}`}
            onClick={() => handleSelect(mbti)}
          >
            {mbti}
          </div>
        ))}
      </div>
      <button
        onClick={() => selectedMbti && router.push('/select-target-mbti')}
        className="mt-6 px-6 py-3 bg-gray-200 rounded-md"
      >
        다음
      </button>
    </div>
  );
}
