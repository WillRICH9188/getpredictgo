// ====== 站台核心設定：部署後主要改這裡 ======

export const SITE = {
  brand: 'Predict Go',                 // 對外品牌名（可有空格）
  domain: 'https://getpredictgo.com',  // 主網域

  // Google Analytics 4：到 analytics.google.com 取得 G-XXXXXXXXXX 後貼上。
  // 留空字串則不載入 GA。
  ga4Id: 'G-Q9Q0ZSD6EP',

  // 你自己的電報群／頻道連結（內容站唯一對外導流入口）
  telegram: 'https://t.me/getpredictgo',
};

export const LOCALES = ['en', 'zh-cn', 'hi'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

// 語言切換選單顯示名稱
export const LOCALE_NAMES: Record<Locale, string> = {
  'en': 'English',
  'zh-cn': '简体中文',
  'hi': 'हिंदी',
};

// 內容分類（對應產出規格的內容站結構）
export const CATEGORIES = ['basics', 'how-to', 'sports', 'politics', 'finance', 'data', 'other'] as const;
export type Category = (typeof CATEGORIES)[number];
