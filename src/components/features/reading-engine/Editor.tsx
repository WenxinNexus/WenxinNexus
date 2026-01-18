'use client';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';

// 1. 定義編輯器的主題 (Theme) - 連結 Tailwind CSS
const theme = {
  paragraph: 'mb-4 text-lg leading-relaxed tracking-wide text-slate-800', // 古文閱讀舒適的排版
  text: {
    bold: 'font-bold text-slate-900',
    italic: 'italic',
    underline: 'underline decoration-slate-400 decoration-wavy', // 模擬古文書法底線
  },
};

// 2. 錯誤處理元件
function onError(error: Error) {
  console.error(error);
}

// 3. 測試用的預設內容插件
function InitialContentPlugin() {
  const [editor] = useLexicalComposerContext();
  
  useEffect(() => {
    editor.update(() => {
        // 這裡暫時保持空白，之後會從 Firebase 讀取資料
        console.log("Editor Initialized");
    });
  }, [editor]);
  
  return null;
}

export default function ReadingEditor() {
  const initialConfig = {
    namespace: 'WenxinReader',
    theme,
    onError,
    // 之後會在這裡註冊自定義節點 (Custom Nodes)
    nodes: [], 
    editable: true, 
  };

  return (
    <div className="relative min-h-[500px] w-full max-w-3xl mx-auto bg-white shadow-sm border border-stone-200 rounded-lg overflow-hidden">
      <LexicalComposer initialConfig={initialConfig}>
        
        {/* 工具列預留區 */}
        <div className="bg-stone-50 border-b border-stone-200 p-2 text-sm text-stone-500">
            工具列預留區 (圖層切換)
        </div>

        <div className="relative p-8">
          <RichTextPlugin
            contentEditable={
                <ContentEditable className="outline-none min-h-[400px] font-serif" />
            }
            placeholder={
                <div className="absolute top-8 left-8 text-slate-400 pointer-events-none font-serif select-none">
                    正在載入古文篇章...
                </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <InitialContentPlugin />
        </div>
      </LexicalComposer>
    </div>
  );
}