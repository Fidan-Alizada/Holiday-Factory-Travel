import { create } from 'zustand';
import { Language } from '../types';

interface LanguageState {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  currentLanguage: 'en',
  setLanguage: (language) => set({ currentLanguage: language }),
}));