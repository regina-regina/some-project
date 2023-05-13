import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation('about');
  return (
    <div>
      <h1>{t('About')}</h1>
    </div>
  );
}
