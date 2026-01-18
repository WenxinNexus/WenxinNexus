'use client';

import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
import { useUserStore } from '@/store/user-store';
import { useRouter, usePathname } from 'next/navigation';

export function AuthObserver() {
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // 1. 使用者已登入
        console.log("Auth State: Logged In", user.email);
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || '新同學',
          role: 'student', // 暫時預設，之後會從 Firestore 讀取真實身份
        });
        
        // 如果還在登入頁，就踢回儀表板
        if (pathname === '/login') {
            router.push('/dashboard');
        }
      } else {
        // 2. 使用者未登入
        console.log("Auth State: Signed Out");
        clearUser();
        
        // 如果不在公開頁面，就踢回登入頁 (簡單的路由保護)
        if (pathname.startsWith('/dashboard') || pathname.startsWith('/reading')) {
            router.push('/login');
        }
      }
    });

    return () => unsubscribe();
  }, [setUser, clearUser, router, pathname]);

  return null; // 這個元件不渲染任何畫面，只負責執行邏輯
}