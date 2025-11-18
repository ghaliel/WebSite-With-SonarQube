@echo off
echo ========================================
echo SonarCloud Analysis for Website-Basic
echo ========================================
echo.

set /p ORG_KEY="Enter your SonarCloud Organization Key: "

echo.
echo Updating configuration...

powershell -Command "(gc sonar-project.properties) -replace 'sonar.organization=your-organization-key', 'sonar.organization=%ORG_KEY%' | Out-File -encoding ASCII sonar-project.properties"

echo Configuration updated!
echo.
echo Running SonarCloud analysis...
echo.

sonar-scanner -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=03911682c2fc507c671a823bb38822d1f2a0d85d

echo.
echo ========================================
echo Analysis Complete!
echo ========================================
echo.
echo View results at: https://sonarcloud.io/organizations/%ORG_KEY%/projects
echo.
pause

