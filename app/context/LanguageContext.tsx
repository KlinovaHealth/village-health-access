'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'en' | 'fr'

const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: 'en',
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LanguageContext.Provider value={{ lang, toggle: () => setLang((l) => (l === 'en' ? 'fr' : 'en')) }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
