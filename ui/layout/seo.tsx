import Head from 'next/head';

import { SeoProps } from '../types/layout/layout';

export default function Seo({ title }: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
