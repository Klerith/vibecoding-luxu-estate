import en from '@/data/dictionaries/en.json';
import es from '@/data/dictionaries/es.json';
import fr from '@/data/dictionaries/fr.json';

export const dictionaries = { en, es, fr };
export const defaultLang = 'es';

export type Locale = keyof typeof dictionaries;

export const getDictionary = (locale: string) => {
  return dictionaries[locale as Locale] || dictionaries['en'];
};
