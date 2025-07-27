# 📊 Configuration des Statistiques du Site

## Google Analytics 4 (Recommandé)

### 1. Créer un compte Google Analytics
1. Allez sur [analytics.google.com](https://analytics.google.com)
2. Cliquez sur "Commencer à mesurer"
3. Créez un compte pour "Le Bateau Ivre"
4. Créez une propriété pour le site web
5. Récupérez l'ID de mesure (format : G-XXXXXXXXXX)

### 2. Configurer les variables d'environnement
Créez un fichier `.env.local` à la racine du projet :

```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Remplacez `G-XXXXXXXXXX` par votre véritable ID de mesure.

### 3. Redémarrer le serveur de développement
```bash
npm run dev
```

## 📈 Statistiques Disponibles

### Google Analytics 4
- **Visiteurs** : Nombre de visiteurs uniques
- **Pages vues** : Pages les plus consultées
- **Temps de session** : Durée moyenne des visites
- **Source du trafic** : D'où viennent les visiteurs
- **Comportement** : Parcours des utilisateurs
- **Géolocalisation** : Provenance géographique
- **Appareils** : Mobile vs Desktop
- **Conversions** : Clics sur les liens de réservation

### Tableau de Bord Recommandé
1. **Vue d'ensemble** : Statistiques générales
2. **Acquisition** : Sources de trafic
3. **Comportement** : Pages populaires
4. **Conversions** : Objectifs atteints

## 🔧 Alternatives

### Matomo (Open Source)
- Auto-hébergé
- Respect de la vie privée
- Plus de contrôle

### Plausible Analytics
- Simple et respectueux de la vie privée
- Interface claire
- Payant mais abordable

### Fathom Analytics
- Focus sur la simplicité
- Respect du RGPD
- Interface intuitive

## 📱 Suivi Mobile
- **Google Analytics** : Application mobile disponible
- **Notifications** : Alertes personnalisables
- **Rapports** : Export automatique

## 🎯 Objectifs Recommandés
1. **Visites de la page carte** : Mesurer l'intérêt pour le menu
2. **Clics sur les réseaux sociaux** : Engagement social
3. **Clics sur le téléphone** : Intérêt pour la réservation
4. **Temps passé sur le site** : Engagement global

## 🔒 Respect de la Vie Privée
- **Banner de cookies** : À implémenter si nécessaire
- **RGPD** : Conformité européenne
- **Consentement** : Gestion des préférences utilisateur 