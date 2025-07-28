import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité du restaurant Le Bateau Ivre - Protection de vos données personnelles.',
}

export default function PolitiqueConfidentialite() {
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
          <h1 className="text-3xl font-bold text-gray-900">Politique de Confidentialité</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <div className="space-y-4 text-gray-700">
              <p>Le Bateau Ivre s&apos;engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous visitez notre site web.</p>
              <p>En utilisant notre site, vous acceptez les pratiques décrites dans cette politique de confidentialité.</p>
            </div>
          </section>

          {/* Responsable du traitement */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsable du traitement</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Le Bateau Ivre</strong></p>
              <p>42 Nouveau port, 83240 Cavalaire-sur-Mer, France</p>
              <p>Téléphone : 07 63 85 98 70</p>
              <p>Email : contact@lebateauivre.fr</p>
            </div>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Données que nous collectons</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-medium text-gray-800">Données de navigation</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Adresse IP</li>
                <li>Type de navigateur et version</li>
                <li>Système d&apos;exploitation</li>
                <li>Pages visitées et durée de visite</li>
                <li>Référent (site d&apos;origine)</li>
              </ul>
              
              <h3 className="text-lg font-medium text-gray-800">Cookies</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Cookies de session pour le bon fonctionnement du site</li>
                <li>Cookies Google Analytics pour l&apos;analyse d&apos;audience</li>
              </ul>
            </div>
          </section>

          {/* Finalités du traitement */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Finalités du traitement</h2>
            <div className="space-y-4 text-gray-700">
              <p>Nous utilisons vos données pour :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Assurer le bon fonctionnement du site web</li>
                <li>Analyser l&apos;audience et améliorer l&apos;expérience utilisateur</li>
                <li>Répondre à vos demandes de contact</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </div>
          </section>

          {/* Base légale */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Base légale du traitement</h2>
            <div className="space-y-4 text-gray-700">
              <p>Le traitement de vos données est fondé sur :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>L&apos;intérêt légitime</strong> : pour l&apos;analyse d&apos;audience et l&apos;amélioration du site</li>
                <li><strong>Le consentement</strong> : pour les cookies non essentiels</li>
                <li><strong>L&apos;exécution d&apos;un contrat</strong> : pour répondre à vos demandes</li>
              </ul>
            </div>
          </section>

          {/* Destinataires */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Destinataires des données</h2>
            <div className="space-y-4 text-gray-700">
              <p>Vos données peuvent être partagées avec :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Notre équipe interne pour la gestion du site</li>
                <li>Google Analytics pour l&apos;analyse d&apos;audience</li>
                <li>Les autorités compétentes si requis par la loi</li>
              </ul>
              <p>Nous ne vendons, n&apos;échangeons ni ne louons vos données personnelles à des tiers.</p>
            </div>
          </section>

          {/* Durée de conservation */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Durée de conservation</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Données de navigation</strong> : 13 mois maximum</li>
                <li><strong>Cookies Google Analytics</strong> : 26 mois maximum</li>
                <li><strong>Données de contact</strong> : 3 ans après le dernier contact</li>
              </ul>
            </div>
          </section>

          {/* Vos droits */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vos droits</h2>
            <div className="space-y-4 text-gray-700">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Droit d&apos;accès</strong> : connaître les données que nous détenons sur vous</li>
                <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
                <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
                <li><strong>Droit à la limitation</strong> : restreindre le traitement de vos données</li>
                <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format structuré</li>
                <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
                <li><strong>Droit de retrait du consentement</strong> : retirer votre consentement à tout moment</li>
              </ul>
            </div>
          </section>

          {/* Exercer vos droits */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Comment exercer vos droits</h2>
            <div className="space-y-4 text-gray-700">
              <p>Pour exercer vos droits, contactez-nous :</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email :</strong> contact@lebateauivre.fr</p>
                <p><strong>Adresse :</strong> 42 Nouveau port, 83240 Cavalaire-sur-Mer, France</p>
                <p><strong>Téléphone :</strong> 07 63 85 98 70</p>
              </div>
              <p>Nous répondrons dans un délai maximum de 30 jours.</p>
            </div>
          </section>

          {/* Sécurité */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sécurité des données</h2>
            <div className="space-y-4 text-gray-700">
              <p>Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données contre :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>L&apos;accès non autorisé</li>
                <li>La divulgation accidentelle</li>
                <li>La modification ou destruction non autorisée</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gestion des cookies</h2>
            <div className="space-y-4 text-gray-700">
              <p>Vous pouvez gérer vos préférences de cookies :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Dans les paramètres de votre navigateur</li>
                <li>En désactivant Google Analytics via l&apos;extension de votre navigateur</li>
                <li>En nous contactant pour désactiver le suivi</li>
              </ul>
            </div>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications de cette politique</h2>
            <div className="space-y-4 text-gray-700">
              <p>Nous nous réservons le droit de modifier cette politique de confidentialité. Les modifications seront publiées sur cette page avec une date de mise à jour.</p>
              <p>Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques.</p>
            </div>
          </section>

          {/* Contact CNIL */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Réclamation auprès de la CNIL</h2>
            <div className="space-y-4 text-gray-700">
              <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la Commission Nationale de l&apos;Informatique et des Libertés (CNIL) :</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Site web :</strong> <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700">www.cnil.fr</a></p>
                <p><strong>Adresse :</strong> 3 Place de Fontenoy, 75007 Paris</p>
              </div>
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