import { ClubButton } from '@padelyzer/ui';
import { Logo } from '@padelyzer/ui';

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-club-border shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Logo variant="club" />
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/soluciones" className="text-club-text-secondary hover:text-club-accent transition-colors">
                Soluciones
              </a>
              <a href="/precios" className="text-club-text-secondary hover:text-club-accent transition-colors">
                Precios
              </a>
              <a href="/casos-de-exito" className="text-club-text-secondary hover:text-club-accent transition-colors">
                Casos de Éxito
              </a>
            </div>

            <div className="flex items-center gap-4">
              <ClubButton variant="ghost" size="sm">
                Iniciar Sesión
              </ClubButton>
              <ClubButton size="sm">
                Agenda Demo
              </ClubButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[600px] pt-16 flex items-center">
        <div className="container py-20">
          <div className="max-w-5xl">
            <div className="flex items-center gap-2 text-sm mb-6">
              <span className="bg-club-success text-white px-3 py-1 rounded-full font-medium">NUEVO</span>
              <span className="text-club-text-secondary">Primeros 100 clubes: 2 meses gratis</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-club-text-primary mb-6 leading-tight">
              Tu Club de Pádel Funcionando<br />
              Como <span className="text-club-accent">Negocio Profesional</span>
            </h1>
            
            <p className="text-xl text-club-text-secondary mb-8 max-w-3xl">
              El único sistema que GARANTIZA +30% más ingresos en 90 días. 
              Sin comisiones ocultas. Con soporte 24/7 en español.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <ClubButton size="lg" className="text-lg">
                Agenda Demo de 20 min
              </ClubButton>
              <ClubButton variant="secondary" size="lg" className="text-lg">
                Ver video de 5 min
              </ClubButton>
            </div>

            <div className="flex flex-wrap gap-8 text-sm text-club-text-secondary">
              <div className="flex items-center gap-2">
                <span className="text-club-success">✓</span>
                <span>400+ clubes activos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-club-success">✓</span>
                <span>60,000+ jugadores</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-club-success">✓</span>
                <span>#1 en México</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-club-bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Sitio completo próximamente</h2>
          <p className="text-club-text-secondary">
            Estamos trabajando en el sitio completo para clubes. Mientras tanto, agenda una demo.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-club-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Logo variant="club" />
            <div className="flex gap-6 text-sm">
              <a href="/privacidad" className="text-club-text-secondary hover:text-club-accent">
                Privacidad
              </a>
              <a href="/terminos" className="text-club-text-secondary hover:text-club-accent">
                Términos
              </a>
              <a href="https://padelyzer.com" className="text-club-text-secondary hover:text-club-accent">
                App para jugadores
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}