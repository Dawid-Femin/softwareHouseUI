export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Usługi</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Aplikacje webowe</h3>
            <p className="text-muted-foreground">[Placeholder]</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Aplikacje mobilne</h3>
            <p className="text-muted-foreground">[Placeholder]</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Konsultacje IT</h3>
            <p className="text-muted-foreground">[Placeholder]</p>
          </div>
        </div>
      </div>
    </section>
  );
}
