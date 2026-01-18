export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-slate-800">儀表板</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* 測試卡片 1 */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg mb-2">最近閱讀</h3>
          <p className="text-slate-500 text-sm">赤壁賦 - 蘇軾</p>
          <div className="mt-4 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className="bg-indigo-500 h-full w-[45%]"></div>
          </div>
          <p className="text-xs text-right mt-1 text-slate-400">進度 45%</p>
        </div>

        {/* 測試卡片 2 */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg mb-2">本週任務</h3>
          <ul className="text-sm space-y-2 text-slate-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              完成〈師說〉邏輯圖
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-slate-300 rounded-full mr-2"></span>
              回應 3 則同學註釋
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}