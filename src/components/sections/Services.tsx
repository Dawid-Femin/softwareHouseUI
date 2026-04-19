import { FadeIn } from '@/components/ui/FadeIn';

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-center">Usługi</h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {['Aplikacje webowe', 'Aplikacje mobilne', 'Konsultacje IT'].map((service, i) => (
            <FadeIn key={service} delay={i * 0.1}>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p className="text-muted-foreground">[Placeholder]</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
