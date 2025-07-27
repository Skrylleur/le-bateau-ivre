# 🔍 Guide de Vérification Google Analytics 4

## ✅ **Statut Actuel : FONCTIONNEL**

### **1. Vérification Technique (✅ Réussi)**
- **ID de Mesure** : `G-RFYY36WQ87` ✅
- **Script GA4** : Intégré dans le HTML ✅
- **Variables d'environnement** : Configurées ✅
- **Composant React** : Fonctionnel ✅

## 🧪 **Tests de Vérification**

### **Test 1 : Vérification Locale**
1. **Ouvrez votre site local** : http://localhost:3000
2. **Ouvrez les outils de développement** (F12)
3. **Allez dans l'onglet Console**
4. **Tapez** : `gtag`
5. **Résultat attendu** : Vous devriez voir une fonction

### **Test 2 : Vérification du Script**
1. **Dans les outils de développement** (F12)
2. **Allez dans l'onglet Network**
3. **Rechargez la page**
4. **Cherchez** : `gtag/js?id=G-RFYY36WQ87`
5. **Résultat attendu** : Le script doit être chargé (statut 200)

### **Test 3 : Vérification Google Analytics**
1. **Allez sur** : [analytics.google.com](https://analytics.google.com)
2. **Sélectionnez** votre propriété "Le Bateau Ivre"
3. **Allez dans** : **Rapports** → **Temps réel**
4. **Visitez votre site** : http://localhost:3000
5. **Résultat attendu** : Vous devriez voir 1 visiteur actif

## 📊 **Commandes de Test dans la Console**

### **Vérifier l'installation :**
```javascript
// Vérifier si gtag existe
typeof gtag

// Vérifier l'ID de mesure
gtag('config', 'G-RFYY36WQ87')

// Envoyer un événement de test
gtag('event', 'test_ga4', {
  'event_category': 'engagement',
  'event_label': 'test_local'
})
```

### **Vérifier les données :**
```javascript
// Vérifier les données envoyées
dataLayer

// Vérifier la configuration
gtag('get', 'G-RFYY36WQ87', 'page_title')
```

## 🌐 **Test sur Netlify (Production)**

### **1. Vérifier la Variable d'Environnement**
1. **Dashboard Netlify** → **Site settings** → **Environment variables**
2. **Vérifiez** : `NEXT_PUBLIC_GA_MEASUREMENT_ID = G-RFYY36WQ87`

### **2. Test du Site en Production**
1. **Allez sur** : https://le-bateau-ivre-cavalaire.netlify.app
2. **Ouvrez la console** (F12)
3. **Tapez** : `gtag`
4. **Vérifiez** : Le script doit être chargé

### **3. Vérification dans Google Analytics**
1. **Temps réel** : Vous devriez voir les visites
2. **Audience** → **Vue d'ensemble** : Données après 24-48h

## 🎯 **Objectifs Recommandés à Configurer**

### **1. Pages Vues**
- **Nom** : "Page vue"
- **Type** : Pages vues
- **Pages** : Toutes les pages

### **2. Clics sur la Carte**
- **Nom** : "Clic sur la carte"
- **Type** : Événement
- **Catégorie** : "engagement"
- **Action** : "clic_carte"

### **3. Clics sur le Téléphone**
- **Nom** : "Appel téléphonique"
- **Type** : Événement
- **Catégorie** : "conversion"
- **Action** : "clic_telephone"

### **4. Clics sur les Réseaux Sociaux**
- **Nom** : "Réseaux sociaux"
- **Type** : Événement
- **Catégorie** : "social"
- **Action** : "clic_social"

## 📱 **Application Mobile Google Analytics**

### **Installation :**
1. **Téléchargez** l'app "Google Analytics" sur votre téléphone
2. **Connectez-vous** avec votre compte Google
3. **Sélectionnez** votre propriété "Le Bateau Ivre"

### **Fonctionnalités :**
- 📊 **Statistiques en temps réel**
- 🔔 **Notifications** personnalisables
- 📈 **Rapports** automatiques
- 🌍 **Géolocalisation** des visiteurs

## 🔧 **Dépannage**

### **Si GA4 ne fonctionne pas :**

#### **Problème 1 : Script non chargé**
```javascript
// Vérifiez dans la console
console.log('GA4 ID:', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)
```

#### **Problème 2 : Blocage par adblock**
- **Désactivez temporairement** les bloqueurs de publicités
- **Vérifiez** les extensions du navigateur

#### **Problème 3 : Variable d'environnement**
- **Vérifiez** le fichier `.env.local`
- **Redémarrez** le serveur de développement

#### **Problème 4 : Netlify**
- **Vérifiez** les variables d'environnement sur Netlify
- **Redéployez** le site

## 📈 **Métriques Importantes à Surveiller**

### **Temps Réel :**
- 👥 **Visiteurs actifs**
- 📄 **Pages consultées**
- 🌍 **Pays d'origine**

### **Rapports Quotidiens :**
- 📊 **Pages vues**
- 👤 **Visiteurs uniques**
- ⏱️ **Temps de session**
- 🔗 **Sources de trafic**

### **Rapports Mensuels :**
- 📈 **Tendances**
- 🎯 **Conversions**
- 📱 **Appareils utilisés**

## 🎉 **Félicitations !**

Votre site "Le Bateau Ivre" est maintenant équipé d'un suivi complet Google Analytics 4 !

**Prochaines étapes :**
1. ✅ **Testez localement** (déjà fait)
2. 🔄 **Configurez Netlify** (variables d'environnement)
3. 📊 **Surveillez les données** dans Google Analytics
4. 🎯 **Configurez les objectifs** recommandés
5. 📱 **Installez l'app mobile** pour un suivi en déplacement

**Votre site collecte maintenant des données précieuses pour optimiser votre activité !** 🚀 