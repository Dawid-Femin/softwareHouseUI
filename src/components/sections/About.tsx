import { FadeIn } from '@/components/ui/FadeIn';

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">[Placeholder]</p>
        </FadeIn>
      </div>
    </section>
  );
}
