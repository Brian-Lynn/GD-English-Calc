import React from 'react';
import { QuestionType, QUESTIONS } from '../constants';

interface InputRowProps {
  type: QuestionType;
  value: number;
  onChange: (type: QuestionType, val: number) => void;
}

const InputRow: React.FC<InputRowProps> = ({ type, value, onChange }) => {
  const config = QUESTIONS[type];

  const handleAdjust = (delta: number) => {
    let newValue = value + delta;
    if (config.step < 1) {
       newValue = Math.round(newValue * 2) / 2;
    }
    
    if (newValue < 0) newValue = 0;
    if (newValue > config.max) newValue = config.max;
    
    onChange(type, newValue);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(type, parseFloat(e.target.value));
  };

  const calculateScore = () => {
    return (value * config.pointsPerQuestion).toFixed(1);
  };

  const percentage = (value / config.max) * 100;

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-4">
      {/* Label Section */}
      <div className="flex items-center justify-between sm:block w-full sm:w-24 shrink-0">
        <div className="font-medium text-slate-700 text-sm flex items-center">
          <span 
            className="w-2.5 h-2.5 rounded-full inline-block mr-2 shadow-sm" 
            style={{ backgroundColor: config.color }}
          ></span>
          {config.label}
        </div>
        <div className="text-xs text-slate-400 sm:pl-4">{config.subLabel}</div>
      </div>

      {/* Slider Section */}
      <div className="flex-1 relative group h-9 sm:h-10">
        <input 
          type="range" 
          value={value} 
          min="0" 
          max={config.max} 
          step={config.step}
          className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer" 
          onChange={handleSliderChange}
        />
        <div 
          className="w-full h-full px-4 rounded-lg border border-slate-200 flex items-center justify-between relative overflow-hidden transition-all"
          style={{ 
            background: `linear-gradient(to right, ${config.color} ${percentage}%, #ffffff ${percentage}%)` 
          }}
        >
          <span className="font-mono font-bold text-slate-700 text-lg relative z-10 pointer-events-none drop-shadow-sm">
            {value}
          </span>
          {config.isObjective && (
            <span className="text-xs font-mono text-slate-500 relative z-10 pointer-events-none">
              {calculateScore()}分
            </span>
          )}
        </div>
      </div>

      {/* Button Controls - Hidden on Mobile to save space */}
      <div className="hidden sm:flex border border-slate-200 rounded-lg overflow-hidden bg-white shrink-0 self-end sm:self-auto">
        <button 
          className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-50 active:bg-slate-100 transition-colors"
          onClick={() => handleAdjust(-1)}
          aria-label="Decrease"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
        </button>
        <div className="w-px bg-slate-200"></div>
        <button 
          className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-50 active:bg-slate-100 transition-colors"
          onClick={() => handleAdjust(1)}
          aria-label="Increase"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default InputRow;