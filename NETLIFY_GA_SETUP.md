# 🔧 Configuration Google Analytics sur Netlify

## ✅ Variables d'Environnement Configurées

### ID de Mesure GA4
```
G-RFYY36WQ87
```

## 📋 Configuration Netlify

### 1. Variables d'Environnement sur Netlify
1. Allez dans votre dashboard Netlify
2. Sélectionnez votre site "Le Bateau Ivre - Cavalaire"
3. Allez dans **Site settings** → **Environment variables**
4. Ajoutez la variable suivante :
   - **Key** : `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value** : `G-RFYY36WQ87`
   - **Scope** : All scopes (Production, Deploy previews, Branch deploys)

### 2. Redéploiement
Après avoir ajouté la variable d'environnement :
1. Allez dans **Deploys**
2. Cliquez sur **Trigger deploy** → **Deploy site**
3. Ou faites un push vers GitHub pour déclencher un déploiement automatique

## 🎯 Vérification

### 1. Vérifier l'Installation
1. Ouvrez votre site : https://le-bateau-ivre-cavalaire.netlify.app
2. Ouvrez les **Outils de développement** (F12)
3. Allez dans l'onglet **Console**
4. Tapez : `gtag`
5. Si vous voyez une fonction, Google Analytics est installé !

### 2. Vérifier dans Google Analytics
1. Allez sur [analytics.google.com](https://analytics.google.com)
2. Sélectionnez votre propriété "Le Bateau Ivre"
3. Allez dans **Rapports** → **Temps réel**
4. Visitez votre site et vous devriez voir les données en temps réel

## 📊 Statistiques Disponibles

### Temps Réel
- Visiteurs actuellement sur le site
- Pages consultées en direct
- Sources de trafic en temps réel

### Rapports Standards
- **Audience** : Visiteurs, sessions, pages vues
- **Acquisition** : D'où viennent vos visiteurs
- **Comportement** : Pages populaires, parcours utilisateur
- **Conversions** : Objectifs atteints

### Objectifs Recommandés
1. **Visites de la page carte** (`/carte`)
2. **Clics sur le téléphone** (07 63 85 98 70)
3. **Clics sur les réseaux sociaux**
4. **Temps passé sur le site**

## 🔍 Debugging

### Si Google Analytics ne fonctionne pas :
1. Vérifiez que la variable d'environnement est correcte sur Netlify
2. Vérifiez que le site a été redéployé après l'ajout de la variable
3. Vérifiez la console du navigateur pour les erreurs
4. Vérifiez que le blocage de publicités n'interfère pas

### Commandes utiles dans la console :
```javascript
// Vérifier si gtag est chargé
typeof gtag

// Vérifier l'ID de mesure
gtag('config', 'G-RFYY36WQ87')

// Envoyer un événement de test
gtag('event', 'test', {
  'event_category': 'engagement',
  'event_label': 'test_event'
})
```

## 📱 Application Mobile
- Téléchargez l'app **Google Analytics** sur votre téléphone
- Connectez-vous avec votre compte Google
- Suivez vos statistiques en temps réel !

## 🎉 Félicitations !
Votre site "Le Bateau Ivre" est maintenant configuré avec Google Analytics 4 !
Vous pouvez suivre précisément l'impact de votre site web sur votre activité. 