# SonarCloud Analysis Script
# Run this script to analyze your project with SonarCloud

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "SonarCloud Analysis Setup" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if sonar-scanner is installed globally
$sonarScannerInstalled = Get-Command sonar-scanner -ErrorAction SilentlyContinue

if (-not $sonarScannerInstalled) {
    Write-Host "SonarScanner not found. Installing via npm..." -ForegroundColor Yellow
    npm install -g sonarqube-scanner
}

Write-Host ""
Write-Host "Please provide the following information:" -ForegroundColor Green
Write-Host ""

# Prompt for organization key
$orgKey = Read-Host "Enter your SonarCloud Organization Key"

# Update sonar-project.properties with organization key
$propertiesPath = "sonar-project.properties"
$content = Get-Content $propertiesPath
$content = $content -replace "sonar.organization=your-organization-key", "sonar.organization=$orgKey"
Set-Content $propertiesPath $content

Write-Host ""
Write-Host "Configuration updated successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Running SonarCloud analysis..." -ForegroundColor Cyan
Write-Host ""

# Run SonarScanner with token
$env:SONAR_TOKEN = "03911682c2fc507c671a823bb38822d1f2a0d85d"
sonar-scanner -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=$env:SONAR_TOKEN

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Analysis Complete!" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Visit your SonarCloud dashboard to view results:" -ForegroundColor Yellow
Write-Host "https://sonarcloud.io/organizations/$orgKey/projects" -ForegroundColor Cyan

