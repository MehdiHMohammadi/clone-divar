import { createClient } from '@supabase/supabase-js';

// این متغیرها جایگزین هستند.
// در یک برنامه واقعی، باید از متغیرهای محیطی استفاده کنید.
// برای این مثال، آنها را با URL و کلید anon پروژه Supabase واقعی خود جایگزین کنید.
const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseAnonKey = 'your-anon-key';

// Check if the placeholder values are still being used.
if (supabaseUrl === 'https://your-project-id.supabase.co' || supabaseAnonKey === 'your-anon-key') {
  console.warn("اعتبارسنجی Supabase تنظیم نشده است. لطفاً فایل lib/supabaseClient.ts را با URL و کلید anon پروژه خود به‌روزرسانی کنید.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);