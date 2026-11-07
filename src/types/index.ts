export interface DictationSentence {
  id: number;
  text: string;
  translation: string;
  audioStart?: number;
  audioEnd?: number;
  difficulty?: 'EASY' | 'HARD';
}

export interface DictationLesson {
  id: string;
  title: string;
  category: 'Section 1' | 'Section 2' | 'Section 3' | 'Section 4' | 'General';
  audioUrl: string;
  totalSentences: number;
  sentences: DictationSentence[];
  completedCount?: number;
}

export interface QuestionOption {
  key: string;
  label: string;
}

export interface TestQuestion {
  id: number;
  type: 'TRUE_FALSE_NOT_GIVEN' | 'MULTIPLE_CHOICE' | 'FILL_BLANK' | 'MATCHING_HEADINGS';
  prompt: string;
  correctAnswer: string;
  explanation: {
    step1_simplify: string;
    step2_locate: string;
    step3_evidence: string;
    step4_compare: string;
    paraphrasing?: { questionPhrase: string; textPhrase: string }[];
    distractors?: string;
  };
}

export interface TestPassage {
  id: number;
  title: string;
  content: string;
  questions: TestQuestion[];
}

export interface IELTSMockTest {
  id: string;
  title: string;
  type: 'READING' | 'LISTENING';
  book: string; // e.g., 'CAM Inspired 20', 'Real Test 2026'
  durationMinutes: number;
  totalQuestions: number;
  audioUrl?: string;
  passages: TestPassage[];
}

export interface CollocationItem {
  id: string;
  phrase: string;
  meaning: string;
  vietnamese: string;
  example: string;
  topic: string;
}

export interface RoadmapDay {
  day: number;
  title: string;
  phase: string;
  focus: string;
  tasks: {
    type: 'dictation' | 'reading' | 'listening' | 'collocation' | 'grammar';
    title: string;
    link: string;
    duration: string;
    completed: boolean;
  }[];
}
