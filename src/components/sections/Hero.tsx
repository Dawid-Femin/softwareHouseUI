import { FadeIn } from '@/components/ui/FadeIn';

export function Hero() {
  return (
    <section id="hero" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h1 className="text-5xl font-bold mb-6">Tworzymy nowoczesne rozwiązania</h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Profesjonalny software house specjalizujący się w tworzeniu aplikacji webowych i
            mobilnych
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
