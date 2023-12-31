import React, { createContext } from 'react';

export const StepperContext = createContext<{
  index: number;
  updateIndex: React.Dispatch<'decrement' | 'increment'>;
}>(null!);
