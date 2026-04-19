import { FadeIn } from '@/components/ui/FadeIn';

export function Hero() {
  return (
    <section id="hero" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h1 className="text-5xl font-bold mb-6">We build modern software solutions</h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A professional software house specializing in web and mobile application development.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
