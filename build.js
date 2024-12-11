const packager = require('electron-packager');

async function packageApp() {
    try {
        const appPaths = await packager({
            dir: '.', // Source directory
            out: './dist', // Output directory
            name: 'DIBB-Scrapper', // Application name
            platform: 'win32', // Target platform: 'win32', 'darwin', 'linux'
            arch: 'x64', // Target architecture: 'x64', 'ia32', 'arm64'
            icon: 'public/assets/img/favicon.ico', // Path to the app icon (optional)
            overwrite: true, // Overwrite existing builds
            // asar: true, // Package app into an asar archive (optional)
            prune: true, // Remove unnecessary files from node_modules
            appVersion: '2.0.0', // App version
            ignore: [/node_modules\/devDependencies/], // Ignore specific files
        });

        console.log(`App packaged successfully at: ${appPaths}`);
    } catch (err) {
        console.error('Error during packaging:', err);
    }
}

packageApp();