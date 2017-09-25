let packager = require('electron-packager');
const pkg = require('../package.json');
const argv = require('minimist')(process.argv.slice(1));

const platform = (argv.platform) || 'darwin';
const aux_platform = (platform == "darwin") ? "mac" : (platform == "win32") ? "win" : platform;
const arch = argv.arch || 'all';
const appName = argv.name || pkg.version + "-" + aux_platform;
const buildVersion = pkg.version || '1.0.0';
const shouldUseAsar = argv.asar || false;
const shouldBuildAll = argv.all || false;
const icon = './assets/images/icons/logotipo';

const DEFAULT_OPTS = {
    dir: '.',
    name: appName,
    asar: shouldUseAsar,
    all: shouldBuildAll,    
    buildVersion: buildVersion,
    icon
};

pack(platform, arch, function done(err, appPath) {
  if(err) {
    console.log(`Deu ruim man :( ${err}.`);
  } else {
    console.log('A aplicação foi empacotada com sucesso!', appPath);
  }
});

function whatIsTheExtension(plat) {
    let extension = '.png';
    if (plat === 'darwin') {
        extension = '.icns';
    } else if (plat === 'win32') {
        extension = '.ico';
    }
    return extension;
}

function pack(plat, arch, cb) {
    // there is no darwin ia32 electron
    if (plat === 'darwin' && arch === 'ia32') return;

    const iconObj = {
        icon: DEFAULT_OPTS.icon + whatIsTheExtension(plat)
    };

    DEFAULT_OPTS.icon = iconObj.icon;

    const opts = Object.assign({}, DEFAULT_OPTS, {
        platform: plat,
        arch,
        prune: true,
        overwrite: true,
        out: `app-builds`
    });

    console.log(opts)
    packager(opts, cb);
}