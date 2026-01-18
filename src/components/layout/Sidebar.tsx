import Link from "next/link";
import { 
  LayoutDashboard, 
  BookOpen, 
  GitGraph, 
  Library, 
  Settings 
} from "lucide-react";
import { cn } from "lib/utils";

const menuItems = [
  { name: "學生儀表板", icon: LayoutDashboard, href: "/dashboard" },
  { name: "沉浸式閱讀", icon: BookOpen, href: "/reading" }, // 暫時導向列表頁
  { name: "邏輯思辨圖", icon: GitGraph, href: "/logic-map" },
  { name: "虛擬書齋", icon: Library, href: "/study" }, // 未來對應 Gamification
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white h-screen flex-col hidden md:flex">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold tracking-wider text-primary-foreground">
          文心匯 <span className="text-xs font-normal opacity-70 block">Wenxin Nexus</span>
        </h1>
      </div>
      
      <nav className="flex-1 py-6 px-4 space-y-2">
        {menuItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href}
            className={cn(
              "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
              "hover:bg-slate-800 text-slate-300 hover:text-white"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <Link 
            href="/settings"
            className="flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-white transition-colors"
        >
          <Settings className="w-5 h-5" />
          <span>設定</span>
        </Link>
      </div>
    </aside>
  );
}