import React, { useState } from 'react';

export const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');
  const [prevValue, setPrevValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [overwrite, setOverwrite] = useState<boolean>(false);
  const [history, setHistory] = useState<string[]>([]);

  const handleNumber = (digit: string) => {
    if (display === '0' || overwrite) {
      setDisplay(digit);
      setOverwrite(false);
    } else {
      setDisplay(display + digit);
    }
  };

  const handleDecimal = () => {
    if (overwrite) {
      setDisplay('0.');
      setOverwrite(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const calculateResult = (first: number, second: number, op: string): number => {
    switch (op) {
      case '+':
        return first + second;
      case '-':
        return first - second;
      case '×':
        return first * second;
      case '÷':
        return second !== 0 ? first / second : NaN;
      default:
        return second;
    }
  };

  const handleOperation = (op: string) => {
    const currentValue = parseFloat(display);

    if (prevValue === null) {
      setPrevValue(display);
    } else if (operation) {
      const result = calculateResult(parseFloat(prevValue), currentValue, operation);
      if (isNaN(result)) {
        setDisplay('Error');
        setPrevValue(null);
        setOperation(null);
        setOverwrite(true);
        return;
      }
      const formattedResult = String(Number(result.toFixed(8)));
      setDisplay(formattedResult);
      setPrevValue(formattedResult);
    }

    setOperation(op);
    setOverwrite(true);
  };

  const handleEquals = () => {
    if (!operation || prevValue === null) return;

    const first = parseFloat(prevValue);
    const second = parseFloat(display);
    const result = calculateResult(first, second, operation);

    if (isNaN(result) || !isFinite(result)) {
      setDisplay('Error');
    } else {
      const formattedResult = String(Number(result.toFixed(8)));
      const record = `${prevValue} ${operation} ${display} = ${formattedResult}`;
      setHistory((prev) => [record, ...prev.slice(0, 4)]);
      setDisplay(formattedResult);
    }

    setPrevValue(null);
    setOperation(null);
    setOverwrite(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperation(null);
    setOverwrite(false);
  };

  const handlePercentage = () => {
    const current = parseFloat(display);
    if (isNaN(current)) return;
    const result = current / 100;
    setDisplay(String(result));
  };

  const handleToggleSign = () => {
    const current = parseFloat(display);
    if (isNaN(current)) return;
    setDisplay(String(current * -1));
  };

  const buttons = [
    { label: 'C', type: 'function', action: handleClear },
    { label: '±', type: 'function', action: handleToggleSign },
    { label: '%', type: 'function', action: handlePercentage },
    { label: '÷', type: 'operator', action: () => handleOperation('÷') },
    { label: '7', type: 'number', action: () => handleNumber('7') },
    { label: '8', type: 'number', action: () => handleNumber('8') },
    { label: '9', type: 'number', action: () => handleNumber('9') },
    { label: '×', type: 'operator', action: () => handleOperation('×') },
    { label: '4', type: 'number', action: () => handleNumber('4') },
    { label: '5', type: 'number', action: () => handleNumber('5') },
    { label: '6', type: 'number', action: () => handleNumber('6') },
    { label: '-', type: 'operator', action: () => handleOperation('-') },
    { label: '1', type: 'number', action: () => handleNumber('1') },
    { label: '2', type: 'number', action: () => handleNumber('2') },
    { label: '3', type: 'number', action: () => handleNumber('3') },
    { label: '+', type: 'operator', action: () => handleOperation('+') },
    { label: '0', type: 'number', span: 'col-span-2', action: () => handleNumber('0') },
    { label: '.', type: 'number', action: handleDecimal },
    { label: '=', type: 'equals', action: handleEquals },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm bg-slate-900/90 text-white rounded-3xl p-6 shadow-2xl backdrop-blur-xl border border-slate-800">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 text-xs font-semibold tracking-wider text-slate-400 uppercase">
          <span>ক্যালকুলেটর</span>
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
        </div>

        {/* Display */}
        <div className="bg-slate-950/70 rounded-2xl p-4 mb-5 text-right border border-slate-800/80">
          <div className="h-5 text-sm text-slate-400 overflow-hidden text-ellipsis">
            {prevValue && operation ? `${prevValue} ${operation}` : ''}
          </div>
          <div className="text-4xl font-light tracking-tight text-white overflow-x-auto whitespace-nowrap scrollbar-none py-1">
            {display}
          </div>
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, index) => {
            let styleClasses = 'bg-slate-800 text-slate-100 hover:bg-slate-700 active:scale-95';
            if (btn.type === 'function') {
              styleClasses = 'bg-slate-700 text-amber-300 hover:bg-slate-600 active:scale-95';
            } else if (btn.type === 'operator') {
              styleClasses = 'bg-indigo-600 text-white hover:bg-indigo-500 active:scale-95';
            } else if (btn.type === 'equals') {
              styleClasses = 'bg-emerald-500 text-white font-bold hover:bg-emerald-400 active:scale-95';
            }

            return (
              <button
                key={index}
                onClick={btn.action}
                className={`h-14 rounded-2xl text-xl font-medium transition-all duration-150 flex items-center justify-center ${
                  btn.span ? btn.span : ''
                } ${styleClasses}`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* History preview */}
        {history.length > 0 && (
          <div className="mt-5 pt-4 border-t border-slate-800">
            <div className="text-xs font-medium text-slate-400 mb-2">পূর্ববর্তী হিসেব:</div>
            <div className="space-y-1">
              {history.map((item, idx) => (
                <div key={idx} className="text-xs text-slate-400 bg-slate-950/40 px-2 py-1 rounded">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
