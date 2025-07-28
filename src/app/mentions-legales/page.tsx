import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du restaurant Le Bateau Ivre à Cavalaire sur Mer - Informations légales et contact.',
}

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à l&apos;accueil
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Mentions Légales</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          {/* Éditeur du site */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Éditeur du site</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Raison sociale :</strong> Le Bateau Ivre</p>
              <p><strong>Adresse :</strong> 42 Nouveau port, 83240 Cavalaire-sur-Mer, France</p>
              <p><strong>Téléphone :</strong> 07 63 85 98 70</p>
              <p><strong>Email :</strong> contact@lebateauivre.fr</p>
              <p><strong>Directeur de publication :</strong> [Nom du responsable]</p>
            </div>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hébergement</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Hébergeur :</strong> Netlify, Inc.</p>
              <p><strong>Adresse :</strong> 2325 3rd Street, Suite 296, San Francisco, CA 94107, USA</p>
              <p><strong>Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700">www.netlify.com</a></p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Propriété intellectuelle</h2>
            <div className="space-y-4 text-gray-700">
              <p>L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
              <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
            </div>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Protection des données personnelles</h2>
            <div className="space-y-4 text-gray-700">
              <p>Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.</p>
              <p>Ce site utilise Google Analytics pour analyser son audience. Les données collectées sont anonymisées et utilisées uniquement à des fins statistiques.</p>
              <p>Pour exercer vos droits, contactez-nous à : contact@lebateauivre.fr</p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
            <div className="space-y-4 text-gray-700">
              <p>Ce site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre ordinateur.</p>
              <p><strong>Cookies utilisés :</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Cookies de session pour le bon fonctionnement du site</li>
                <li>Cookies Google Analytics pour l&apos;analyse d&apos;audience</li>
              </ul>
              <p>Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.</p>
            </div>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation de responsabilité</h2>
            <div className="space-y-4 text-gray-700">
              <p>Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.</p>
              <p>Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email à l&apos;adresse contact@lebateauivre.fr.</p>
            </div>
          </section>

          {/* Liens hypertextes */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liens hypertextes</h2>
            <div className="space-y-4 text-gray-700">
              <p>Les liens hypertextes mis en place dans le cadre du présent site web en direction d&apos;autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Le Bateau Ivre.</p>
            </div>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Droit applicable</h2>
            <div className="space-y-4 text-gray-700">
              <p>Tout litige en relation avec l&apos;utilisation du site lebateauivre.fr est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Toulon.</p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <div className="space-y-2 text-gray-700">
              <p>Pour toute question concernant ces mentions légales, vous pouvez nous contacter :</p>
              <p><strong>Email :</strong> contact@lebateauivre.fr</p>
              <p><strong>Téléphone :</strong> 07 63 85 98 70</p>
              <p><strong>Adresse :</strong> 42 Nouveau port, 83240 Cavalaire-sur-Mer, France</p>
            </div>
          </section>

          <div className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </main>

      <ScrollToTop />
    </div>
  )
} 