const readline = require('readline');
const fs = require('fs');
const { exec } = require('child_process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('\n========================================');
console.log('SonarCloud Analysis Setup');
console.log('========================================\n');

console.log('Token SonarCloud: 03911682c2fc507c671a823bb38822d1f2a0d85d\n');

rl.question('Enter your SonarCloud Organization Key: ', (orgKey) => {
    if (!orgKey || orgKey.trim() === '') {
        console.error('\nError: Organization key is required!');
        console.log('Please visit https://sonarcloud.io to get your organization key.\n');
        rl.close();
        process.exit(1);
    }

    // Update sonar-project.properties
    const propertiesPath = 'sonar-project.properties';
    let content = fs.readFileSync(propertiesPath, 'utf8');
    content = content.replace('sonar.organization=your-organization-key', `sonar.organization=${orgKey.trim()}`);
    fs.writeFileSync(propertiesPath, content);

    console.log('\n✓ Configuration updated successfully!\n');
    console.log('Running SonarCloud analysis...\n');

    // Run sonar-scanner
    const command = `sonar-scanner -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=03911682c2fc507c671a823bb38822d1f2a0d85d`;

    const child = exec(command);

    child.stdout.on('data', (data) => {
        process.stdout.write(data);
    });

    child.stderr.on('data', (data) => {
        process.stderr.write(data);
    });

    child.on('close', (code) => {
        console.log('\n========================================');
        if (code === 0) {
            console.log('✓ Analysis Complete!');
            console.log('========================================\n');
            console.log(`View results at: https://sonarcloud.io/dashboard?id=website-basic-project\n`);
        } else {
            console.log('✗ Analysis failed with code:', code);
            console.log('========================================\n');
        }
        rl.close();
    });
});

