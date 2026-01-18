'use client'; // 加上這行，因為我們要用 Hook

import { Bell, User } from "lucide-react";
import { useUserStore } from "@/store/user-store"; // 引入 store
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/config";

export function Navbar() {
  // 從 store 取得使用者資料
  const { displayName, email, role } = useUserStore();

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="font-medium text-slate-600">
        {/* 顯示真實名稱 */}
        歡迎回來，{displayName || '同學'} 
      </div>

      <div className="flex items-center space-x-4">
        {/* 只有登入才顯示數值 */}
        <div className="hidden md:flex items-center space-x-2 bg-slate-100 px-3 py-1 rounded-full text-sm">
          <span className="text-amber-600 font-bold">Lv. {role === 'teacher' ? '∞' : '1'}</span>
          <div className="w-px h-4 bg-slate-300"></div>
          <span className="text-slate-600">XP 0</span>
        </div>

        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors relative">
          <Bell className="w-5 h-5 text-slate-600" />
        </button>

        {/* 登出按鈕 (暫時做在這裡) */}
        <div 
          onClick={handleLogout}
          className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold border border-indigo-200 cursor-pointer hover:bg-indigo-200"
          title={`登出 ${email}`}
        >
          <User className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
}