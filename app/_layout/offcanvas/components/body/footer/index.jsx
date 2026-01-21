'use client';

import Link from 'next/link';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';

export function OffcanvasFooter() {
  const medias = socialMedias.map(({ href, title }) => {
    return (
      <li key={href}>
        <Link href={href} target='_blank' rel='noopener' passHref>
          <MagneticButton>{title}</MagneticButton>
        </Link>
      </li>
    );
  });

  return <ul className='flex w-full justify-between gap-10'>{medias}</ul>;
}
