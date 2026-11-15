'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type DesignMode = 'default' | 'option-a' | 'option-b' | 'option-c';

interface DesignModeContextType {
  mode: DesignMode;
  setMode: (mode: DesignMode) => void;
  isMounted: boolean;
}

const DesignModeContext = createContext<DesignModeContextType>({
  mode: 'option-a',
  setMode: () => {},
  isMounted: false,
});

export function DesignModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<DesignMode>('option-a');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check URL parameters first (e.g. ?mode=option-b or ?design=option-c)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlMode = params.get('mode') || params.get('design');
      if (urlMode && ['default', 'option-a', 'option-b', 'option-c'].includes(urlMode)) {
        setModeState(urlMode as DesignMode);
        localStorage.setItem('tech22blocks_design_mode', urlMode);
        return;
      }

      // Check localStorage
      const savedMode = localStorage.getItem('tech22blocks_design_mode') as DesignMode | null;
      if (savedMode && ['default', 'option-a', 'option-b', 'option-c'].includes(savedMode)) {
        setModeState(savedMode);
      }
    }
  }, []);

  const setMode = (newMode: DesignMode) => {
    setModeState(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('tech22blocks_design_mode', newMode);
      // Update URL search param without reload for easy sharing
      const url = new URL(window.location.href);
      url.searchParams.set('mode', newMode);
      window.history.replaceState({}, '', url.toString());
    }
  };

  return (
    <DesignModeContext.Provider value={{ mode, setMode, isMounted }}>
      {children}
    </DesignModeContext.Provider>
  );
}

export function useDesignMode() {
  return useContext(DesignModeContext);
}
