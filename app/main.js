requirejs.config({
    paths: {
        'backbone': '../lib/backbone/backbone',
        'text': '../lib/require/text',
        'durandal': '../lib/durandal/js',
        'plugins': '../lib/durandal/js/plugins',
        'transitions': '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-2.3.0',
        'simpleGrid': '../lib/knockout/knockout.simpleGrid',
        'jquery': '../lib/jquery/jquery-1.9.1',
        'bootstrap': '../lib/bootstrap/js',
        'underscore': '../lib/underscore/underscore',
        'util': '../lib/util',
        'knockback' : '../lib/knockback/knockback'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'], function (system, app, viewLocator) {

    system.debug(true);

    app.title = 'F&B 360';

    app.configurePlugins({
        router: true,
        dialog: true
    });

    app.start().then(function () {
        viewLocator.useConvention();

        app.setRoot('viewmodels/shell');
    });
});