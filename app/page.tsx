import { Welcome } from '@/lib/components/Welcome';
import ColorSchemeToggle from '@/lib/components/ColorSchemeToggle';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}