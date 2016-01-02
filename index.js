var swig = require('swig');
var _ = require('lodash');
var path = require('path');
var classHtmlAttribute = /class=['"](.+)['"]/;
var tpl = swig.compileFile(path.resolve(path.dirname(module.filename), 'clicky.html'));


function displayCode(_page) {

    var config = this.options.pluginsConfig.clicky || {};
    
    if (!config.site_id) {
     throw "Option 'site_id' for Clicky plugin is undefined.";
    }
    
    if (!config.configuration) {
     config.configuration = 'auto';
    }

    if(typeof config.configuration === 'object' && config.configuration !== null) {
     configuration = JSON.stringify(config.configuration);
    }
    else if (['auto', 'none'].indexOf(config.configuration) != -1) {
     configuration = "'" + config.configuration + "'";
    }

  return tpl({
    site_id: config.site_id
  });

}

module.exports = {
    book: {
        assets: "./book",
        js: [
            "plugin.js"
        ],
        html: {
            "body:end": displayCode
        }
    }
};
