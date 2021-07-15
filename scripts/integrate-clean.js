const sh = require('shelljs');
const upath = require('upath');
const appPath = upath.resolve(upath.dirname(__filename), '../frappe_apps');

sh.rm('-rf', `${appPath}/public/bootstrap-5/*`)