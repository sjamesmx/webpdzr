import { PlayerButton } from '@padelyzer/ui';
import { Logo } from '@padelyzer/ui';

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-player-bg-primary/80 backdrop-blur-md border-b border-player-border">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Logo variant="player" />
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/caracteristicas" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Características
              </a>
              <a href="/precio" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Precio
              </a>
              <a href="/blog" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Blog
              </a>
            </div>

            <div className="flex items-center gap-4">
              <PlayerButton variant="ghost" size="sm">
                Iniciar Sesión
              </PlayerButton>
              <PlayerButton size="sm">
                Descargar
              </PlayerButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-16 flex items-center">
        <div className="container py-20">
          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Tu juego <span className="text-player-accent">apesta</span>...
              <br />y lo sabes
            </h1>
            
            <p className="text-xl md:text-2xl text-player-text-secondary mb-8 max-w-3xl">
              La IA que analiza tu pádel y te dice exactamente qué mejorar. 
              Mejora tu ranking en 30 días o te devolvemos tu dinero.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <PlayerButton size="lg" className="text-lg">
                Prueba 14 días gratis
              </PlayerButton>
              <PlayerButton variant="secondary" size="lg" className="text-lg">
                Ver demo 2 min
              </PlayerButton>
            </div>

            <div className="flex items-center gap-6 text-sm text-player-text-secondary">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-player-accent rounded-full animate-pulse"></div>
                <span>+15,000 jugadores activos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-player-accent rounded-full animate-pulse"></div>
                <span>4.8/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            ¿Te suena familiar?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Llevas 2 años jugando igual",
                description: "Sigues cometiendo los mismos errores una y otra vez sin saber cuáles son.",
                icon: "📊"
              },
              {
                title: "No sabes qué entrenar",
                description: "Practicas sin dirección, perdiendo tiempo en cosas que no necesitas mejorar.",
                icon: "🎯"
              },
              {
                title: "Pierdes contra jugadores 'peores'",
                description: "Te ganan rivales que juegan peor técnicamente pero son más consistentes.",
                icon: "😤"
              }
            ].map((problem, index) => (
              <div 
                key={index}
                className="bg-player-bg-secondary border border-player-border rounded-2xl p-8 hover:border-player-accent/50 transition-all"
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-player-text-secondary">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-player-bg-secondary to-player-bg-primary">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            8 de cada 10 usuarios mejoran su ranking en 30 días
          </h2>
          <p className="text-xl text-player-text-secondary mb-8 max-w-2xl mx-auto">
            Únete a miles de jugadores que ya están mejorando con datos reales, no opiniones.
          </p>
          <PlayerButton size="lg" className="text-lg">
            Empieza ahora - 14 días gratis
          </PlayerButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-player-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Logo variant="player" />
            <div className="flex gap-6 text-sm">
              <a href="/privacidad" className="text-player-text-secondary hover:text-player-accent">
                Privacidad
              </a>
              <a href="/terminos" className="text-player-text-secondary hover:text-player-accent">
                Términos
              </a>
              <a href="https://pro.padelyzer.com" className="text-player-text-secondary hover:text-player-accent">
                ¿Tienes un club?
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}