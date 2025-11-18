# Guide pour SonarCloud Analysis
# ===============================

## Prérequis
✓ Java installé (version 17.0.12 détectée)
✓ Node.js installé (version 24.11.0 détectée)
✓ SonarScanner installé
✓ Token SonarCloud: 03911682c2fc507c671a823bb38822d1f2a0d85d

## Étapes pour exécuter l'analyse

### 1. Obtenir votre clé d'organisation SonarCloud
   - Visitez: https://sonarcloud.io
   - Connectez-vous avec votre compte
   - Allez dans "My Organizations" ou "My Account"
   - Copiez la clé d'organisation (organization key)

### 2. Mettre à jour le fichier sonar-project.properties
   Ouvrez le fichier `sonar-project.properties` et remplacez:
   ```
   sonar.organization=your-organization-key
   ```
   par votre vraie clé d'organisation, par exemple:
   ```
   sonar.organization=mon-organisation
   ```

### 3. Créer le projet sur SonarCloud
   - Allez sur https://sonarcloud.io
   - Cliquez sur "+" puis "Analyze new project"
   - Choisissez "Manually" 
   - Définissez un Project Key (par exemple: website-basic-project)
   - Sélectionnez votre organisation

### 4. Exécuter l'analyse
   Ouvrez PowerShell et exécutez:
   ```powershell
   cd "C:\Users\ghali\Downloads\Website-Basic-main"
   sonar-scanner -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=03911682c2fc507c671a823bb38822d1f2a0d85d
   ```

### 5. Voir les résultats
   Les résultats seront disponibles sur:
   https://sonarcloud.io/dashboard?id=website-basic-project

## Fichiers créés
- `sonar-project.properties` : Configuration du projet
- `package.json` : Configuration npm
- `run-sonar.ps1` : Script PowerShell automatisé
- Ce fichier README

## Commande rapide
Après avoir mis à jour sonar.organization dans sonar-project.properties:
```powershell
sonar-scanner -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=03911682c2fc507c671a823bb38822d1f2a0d85d
```

