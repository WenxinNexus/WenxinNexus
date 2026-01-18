import ReadingEditor from "@/components/features/reading-engine/Editor";

// 這裡模擬從資料庫抓取的資料 (Server Component)
export default function ReadingPage({ params }: { params: { textId: string } }) {
  
  return (
    <div className="h-full flex flex-col items-center bg-stone-50/50 p-6">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold font-serif text-slate-800 mb-2">赤壁賦</h1>
        <p className="text-slate-500">宋 ‧ 蘇軾</p>
      </div>
      
      {/* 載入我們剛寫好的編輯器 */}
      <ReadingEditor />
      
      <div className="mt-8 text-sm text-slate-400">
        當前閱讀文本 ID: {params.textId}
      </div>
    </div>
  );
}