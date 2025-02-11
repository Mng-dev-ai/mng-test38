import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t bg-background/95">
      <div className="container flex h-14 items-center justify-center">
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}