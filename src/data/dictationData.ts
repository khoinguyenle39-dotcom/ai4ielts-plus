import dictationLessonsJson from "./dictationLessons.json";

export interface DictationSentence {
  id: number;
  start: number;
  end: number;
  text: string;
  translation: string;
  difficulty: string;
}

export interface DictationLesson {
  id: string;
  dictationId: string;
  title: string;
  section: string;
  totalSentences: number;
  noOfWords: number;
  level: string;
  plays: string;
  audioUrl: string;
  description: string;
  sentences: DictationSentence[];
}

export const ALL_DICTATION_LESSONS: DictationLesson[] = dictationLessonsJson as DictationLesson[];

const ALIAS_MAP: Record<string, string> = {
  "kitchen-assistants": "talk-to-new-kitchen-assistants",
  "public-libraries": "paper-on-public-libraries",
  "nanotechnology": "effects-of-urban-environments-on-animals",
  "business-values": "four-business-values",
};

export function getDictationLessonById(id: string): DictationLesson {
  const targetId = ALIAS_MAP[id] || id;
  const found = ALL_DICTATION_LESSONS.find(
    (l) => l.id === targetId || l.dictationId.toLowerCase() === targetId.toLowerCase()
  );
  return found || ALL_DICTATION_LESSONS[0];
}
