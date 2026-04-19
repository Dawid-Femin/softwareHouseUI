export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Software House. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
