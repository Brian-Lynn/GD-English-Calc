export type QuestionType = 
  | 'reading' 
  | 'seven' 
  | 'cloze' 
  | 'grammar' 
  | 'shortWriting' 
  | 'longWriting' 
  | 'listening';

// Colors updated to "Level 400" for clearer visibility on white backgrounds
export const QUESTIONS = {
  reading: {
    id: 'reading' as QuestionType,
    label: '阅读理解',
    max: 15,
    pointsPerQuestion: 2.5,
    step: 1,
    subLabel: '15题 / 2.5分',
    color: '#60a5fa', // blue-400
    isObjective: true
  },
  seven: {
    id: 'seven' as QuestionType,
    label: '七选五',
    max: 5,
    pointsPerQuestion: 2.5,
    step: 1,
    subLabel: '5题 / 2.5分',
    color: '#22d3ee', // cyan-400
    isObjective: true
  },
  cloze: {
    id: 'cloze' as QuestionType,
    label: '完形填空',
    max: 15,
    pointsPerQuestion: 1,
    step: 1,
    subLabel: '15题 / 1分',
    color: '#34d399', // emerald-400
    isObjective: true
  },
  grammar: {
    id: 'grammar' as QuestionType,
    label: '语法填空',
    max: 10,
    pointsPerQuestion: 1.5,
    step: 1,
    subLabel: '10题 / 1.5分',
    color: '#a3e635', // lime-400
    isObjective: true
  },
  shortWriting: {
    id: 'shortWriting' as QuestionType,
    label: '应用文',
    max: 15,
    pointsPerQuestion: 1, 
    step: 0.5,
    subLabel: '满分 15',
    color: '#fbbf24', // amber-400
    isObjective: false
  },
  longWriting: {
    id: 'longWriting' as QuestionType,
    label: '读后续写',
    max: 25,
    pointsPerQuestion: 1, 
    step: 0.5,
    subLabel: '满分 25',
    color: '#f87171', // red-400
    isObjective: false
  },
  listening: {
    id: 'listening' as QuestionType,
    label: '听说成绩',
    max: 20,
    pointsPerQuestion: 1, 
    step: 0.5,
    subLabel: '满分 20',
    color: '#a78bfa', // violet-400
    isObjective: false
  }
};

export const INITIAL_VALUES: Record<QuestionType, number> = {
  reading: 15,
  seven: 5,
  cloze: 15,
  grammar: 10,
  shortWriting: 11,
  longWriting: 19,
  listening: 18
};

export const PALETTE = {
  reading: '#60a5fa',
  seven: '#22d3ee',
  cloze: '#34d399',
  grammar: '#a3e635',
  shortWriting: '#fbbf24',
  longWriting: '#f87171',
  listening: '#a78bfa'
};