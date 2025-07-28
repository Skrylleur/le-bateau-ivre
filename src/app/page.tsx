import Image from "next/image";
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* Header */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden" role="banner">
        {/* Background Image */}
        <Image
          src="/2024-11-20.jpg"
          alt="Vue sur la mer depuis la brasserie"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif animate-slide-up">
            Le Bateau Ivre
          </h1>
          <p className="sr-only">Brasserie et restaurant au port de Cavalaire sur Mer</p>
          <p className="text-xl md:text-2xl mb-8 font-light animate-slide-up-delay">
            Brasserie & Restaurant à Cavalaire sur Mer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-2">
            <a href="#contact" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Réserver une table
            </a>
            <Link href="/carte" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors">
              Voir la carte
            </Link>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll" data-animation="slide-right">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 font-serif">
                Une expérience unique au bord de la Méditerranée
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Découvrez notre brasserie située dans le magnifique port de Cavalaire sur Mer. 
                Nous vous proposons une cuisine traditionnelle française avec une touche méditerranéenne, 
                le tout dans un cadre idyllique face à la mer.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nos plats sont préparés avec des produits frais et locaux, et notre sélection de bières 
                artisanales vous fera voyager à travers les saveurs du monde.
              </p>
            </div>
            <div className="relative animate-on-scroll" data-animation="slide-left">
              <Image
                src="/2024-11-20-2.jpg"
                alt="Terrasse de la brasserie"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 font-serif animate-on-scroll" data-animation="fade-in">
            Nos Spécialités
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-on-scroll" data-animation="slide-up" data-delay="0">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cuisine Méditerranéenne</h3>
              <p className="text-gray-600">
                Découvrez nos spécialités italiennes et méditerranéennes : 
                gnocchi, penne, risotto et plats traditionnels préparés avec passion.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-on-scroll" data-animation="slide-up" data-delay="200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🦐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Fruits de Mer Frais</h3>
              <p className="text-gray-600">
                Loup entier, saumon fumé, gambas et supions en persillade. 
                Nos fruits de mer sont sélectionnés avec soin pour leur fraîcheur.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-on-scroll" data-animation="slide-up" data-delay="400">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Service Attentionné</h3>
              <p className="text-gray-600">
                Une équipe professionnelle et chaleureuse vous accueille dans un cadre 
                convivial pour une expérience gastronomique mémorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 font-serif animate-on-scroll" data-animation="fade-in">
            Notre Ambiance
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative animate-on-scroll" data-animation="slide-right">
              <Image
                src="/2024-11-20-3.jpg"
                alt="Intérieur de la brasserie"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="flex flex-col justify-center animate-on-scroll" data-animation="slide-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Un cadre chaleureux et authentique
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Notre brasserie vous accueille dans un décor maritime élégant, 
                où vous pourrez profiter de la vue imprenable sur le port de Cavalaire 
                tout en dégustant nos délicieuses spécialités.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-amber-600 mr-2">✓</span>
                  Terrasse ensoleillée face à la mer
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 mr-2">✓</span>
                  Ambiance conviviale et familiale
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 mr-2">✓</span>
                  Service attentionné et professionnel
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-900 to-cyan-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 font-serif animate-on-scroll" data-animation="fade-in">
            Venez nous rendre visite
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="animate-on-scroll" data-animation="slide-up" data-delay="0">
              <h3 className="text-xl font-bold mb-4">Horaires d&apos;ouverture</h3>
              <p className="mb-2">Dimanche - Samedi</p>
              <p className="mb-2">08h00 - 22h30</p>
              <p className="text-sm text-gray-300">Ouvert 7j/7</p>
            </div>
            <div className="animate-on-scroll" data-animation="slide-up" data-delay="200">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="mb-2">42 Nouveau port</p>
              <p className="mb-2">83240 Cavalaire-sur-Mer</p>
              <p className="mb-2">Tél: 07 63 85 98 70</p>
              {/* <p className="mb-4">Email: contact@lebateauivre.fr</p> */}
            </div>
          </div>
          
          {/* Réseaux sociaux centrés */}
          {/* <div className="mt-12 text-center">
            <h4 className="text-xl font-semibold mb-6">Suivez-nous</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.facebook.com/people/Le-Bateau-Ivre-Cavalaire/61567947616719/?_rdr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                aria-label="Page Facebook"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="font-medium">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/lebateauivrecavalaire/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg transition-colors"
                aria-label="Page Instagram"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="font-medium">Instagram</span>
              </a>
            </div>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-serif mb-4">Le Bateau Ivre</p>
          
          {/* Navigation dans le footer */}
          <div className="flex justify-center gap-6 mb-4">
            <Link 
              href="/carte" 
              className="text-gray-300 hover:text-white hover:underline transition-colors font-medium"
            >
              Voir la carte
            </Link>
          </div>
          
          {/* Réseaux sociaux dans le footer */}
          <div className="flex justify-center gap-6 mb-4">
            <a 
              href="https://www.facebook.com/people/Le-Bateau-Ivre-Cavalaire/61567947616719/?_rdr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors"
              aria-label="Page Facebook"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-sm font-medium">Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/lebateauivrecavalaire/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-3 py-2 rounded-lg transition-colors"
              aria-label="Page Instagram"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
          
          <p className="text-gray-400 mb-2">© 2025 - Site créé par <Link className="transition-colors hover:underline" href="https://gourinchas.com" target="_blank" rel="noopener noreferrer"> Antonin Gourinchas</Link> - Tous droits réservés</p>
          <div className="flex justify-center gap-4 text-xs text-gray-500">
            <Link href="/mentions-legales" className="hover:text-amber-400 transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-amber-400 transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
