'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const mbtiList = [
  'ENFP', 'ENFJ', 'ENTP', 'ENTJ',
  'ESFP', 'ESFJ', 'ESTP', 'ESTJ',
  'INFP', 'INFJ', 'INTP', 'INTJ',
  'ISFP', 'ISFJ', 'ISTP', 'ISTJ',
];

export default function MbtiTargetPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleMbti = (mbti: string) => {
    if (selected.includes(mbti)) {
      // 이미 선택된 경우 → 제거
      setSelected(selected.filter((item) => item !== mbti));
    } else {
      // 최대 5개까지 선택 가능
      if (selected.length < 5) {
        setSelected([...selected, mbti]);
      } else {
        alert('최대 5개까지 선택할 수 있습니다.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <p className="text-xl">대화하고 싶은 MBTI를 선택해주세요 (최대 5개)</p>

      <div className="mbti-grid">
        {mbtiList.map((mbti) => (
          <div
            key={mbti}
            className={`mbti-button ${selected.includes(mbti) ? 'selected' : ''}`}
            onClick={() => toggleMbti(mbti)}
          >
            {mbti}
          </div>
        ))}
        <button className="col-span-4 bg-gray-100 rounded px-4 py-2">
          RANDOM
        </button>
      </div>

      <button
        onClick={() => router.push('/concern')}
        className="mt-6 px-6 py-3 bg-gray-200 rounded-md"
      >
        상담 시작하기
      </button>
    </div>
  );
}
