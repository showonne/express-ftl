var Freemarker = require('freemarker.js');

module.exports = function(path, options, cb){
    var fm = fm = new Freemarker({
        viewRoot: options.settings.views,
        options: {}
    });

    path = path.slice(options.settings.views.length);

    fm.render(path, options, function(err, html, output) {
        if(err) return cb(new Error(err));
        if(err && output) return cb(null, `<pre>${output}</pre>`);
        return cb(null, html);
    });
};