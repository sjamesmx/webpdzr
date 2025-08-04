import { headers } from 'next/headers';

export default function Page() {
  // This page will never be shown due to middleware redirects
  // But we need it for Next.js to work properly
  return null;
}