# 🚗 Website-Basic - Site Web Mercedes

Projet de site web vitrine pour Mercedes avec analyse de qualité du code via SonarCloud.

## 📁 Structure du Projet

```
Website-Basic-main/
├── 📂 Website-Basic-main/          # Dossier source du site web
│   ├── 📄 index.html               # Page d'accueil
│   ├── 📄 product.html             # Page produits
│   ├── 📄 about-us.html            # Page à propos
│   ├── 📄 contact.html             # Page contact
│   ├── 📄 coding.html              # Page coding
│   ├── 📄 style.css                # Styles principaux
│   ├── 📄 cofing.css               # Styles secondaires
│   ├── 📄 script.js                # JavaScript principal
│   ├── 📄 cod.js                   # JavaScript secondaire
│   ├── 🖼️ *.jpg, *.jpeg, *.png     # Images du site
│   └── 🖼️ logo.png                 # Logo
│
├── 📂 Configuration SonarCloud
│   ├── 📄 sonar-project.properties # Configuration principale SonarCloud
│   ├── 📄 package.json             # Dépendances Node.js
│   ├── 📄 setup-sonar.js           # Script d'installation interactif
│   ├── 📄 run-sonar.bat            # Script Windows (Batch)
│   └── 📄 run-sonar.ps1            # Script Windows (PowerShell)
│
├── 📂 Documentation
│   ├── 📄 SONARCLOUD-README.md     # Guide d'installation SonarCloud
│   ├── 📄 SONARCLOUD-RESULTS.md    # Résultats bruts de l'analyse
│   ├── 📄 EXPLICATION-RESULTATS.md # Explication détaillée des résultats
│   └── 📄 RESULTATS-SONARCLOUD.html # Rapport HTML professionnel
│
└── 📄 .gitignore                   # Fichiers à ignorer par Git
```

## 🚀 Démarrage Rapide

### Ouvrir le Site Web
```bash
# Ouvrir index.html dans votre navigateur
start Website-Basic-main/index.html
```

### Lancer une Analyse SonarCloud
```powershell
# Option 1: Installation interactive
npm run sonar:setup

# Option 2: Exécution directe
.\run-sonar.ps1

# Option 3: Batch
.\run-sonar.bat
```

## 📊 Résultats SonarCloud Actuels

| Métrique | Valeur | Note |
|----------|--------|------|
| 🛡️ Sécurité | 0 problèmes | A ✅ |
| 🔧 Fiabilité | 21 bugs | D ⚠️ |
| 🧹 Maintenabilité | 23 code smells | A ✅ |
| 🎯 Hotspots | 100% reviewed | A ✅ |
| 📊 Coverage | 0.0% | ❌ |
| 🔄 Duplications | 16.9% | ⚠️ |

**Date d'analyse:** 18 novembre 2025, 14:49  
**Lignes de code:** 1.2k (HTML, CSS, JavaScript)

## 🔗 Liens SonarCloud

- **Dashboard:** https://sonarcloud.io/dashboard?id=website-basic-project
- **Vue d'ensemble:** https://sonarcloud.io/project/overview?id=website-basic-project
- **Tous les problèmes:** https://sonarcloud.io/project/issues?id=website-basic-project

## 🛠️ Technologies Utilisées

- **Frontend:** HTML5, CSS3, JavaScript
- **Qualité du Code:** SonarCloud
- **Build Tools:** Node.js, npm
- **Scanner:** SonarScanner CLI

## 📝 Fichiers Essentiels

### Site Web
- `Website-Basic-main/` - Contient tous les fichiers du site
  - 5 fichiers HTML
  - 2 fichiers CSS
  - 2 fichiers JavaScript
  - 15 images

### SonarCloud
- `sonar-project.properties` - Configuration SonarCloud
- `package.json` - Gestion des dépendances
- `setup-sonar.js` - Installation interactive
- Scripts d'exécution (`.bat` et `.ps1`)

### Documentation
- `EXPLICATION-RESULTATS.md` - Explication complète des métriques
- `RESULTATS-SONARCLOUD.html` - Rapport HTML professionnel
- `SONARCLOUD-README.md` - Guide d'utilisation

## 🚨 Actions Prioritaires

1. **URGENT:** Corriger les 21 bugs de fiabilité (Note D → A)
2. **IMPORTANT:** Réduire la duplication de code (16.9% → <5%)
3. **RECOMMANDÉ:** Ajouter des tests unitaires (0% → 80%)

## 📦 Installation des Dépendances

Si besoin de réinstaller les dépendances Node.js :

```powershell
npm install
```

## 🤝 Contribution

1. Corriger les bugs détectés par SonarCloud
2. Maintenir une qualité de code élevée
3. Ajouter des tests unitaires
4. Réduire le code dupliqué

## 📄 Licence

Projet éducatif - Organisation 5iir

---

**Organisation:** 5iir  
**Projet:** website-basic-project  
**Version:** 1.0  
**Dernière mise à jour:** 18 novembre 2025

