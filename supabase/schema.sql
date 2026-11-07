CREATE TABLE IF NOT EXISTS public.ielts_tests (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    type TEXT NOT NULL,
    book TEXT NOT NULL,
    duration_minutes INT DEFAULT 60,
    total_questions INT DEFAULT 40,
    audio_url TEXT,
    passages JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.dictation_lessons (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    section TEXT NOT NULL,
    audio_url TEXT NOT NULL,
    level TEXT DEFAULT 'Easy',
    total_sentences INT DEFAULT 0,
    sentences JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.user_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL DEFAULT 'default_user',
    streak_days INT DEFAULT 1,
    target_band NUMERIC(2,1) DEFAULT 7.5,
    completed_tasks JSONB DEFAULT '[]'::jsonb,
    test_results JSONB DEFAULT '[]'::jsonb,
    last_active TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.collocations (
    id SERIAL PRIMARY KEY,
    left_word TEXT NOT NULL,
    right_word TEXT NOT NULL,
    vietnamese TEXT NOT NULL,
    example TEXT,
    band_level NUMERIC(2,1) DEFAULT 7.0
);
