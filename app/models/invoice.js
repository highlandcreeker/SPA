define(function (require) {
    var bb = require('backbone');

    function invoiceContext(data) {
        this.defaults = { name: 'waldo' };
        this.initialize = function (data) { };
        var invoice = bb.Model.extend(this);

        return new invoice(data);
    }
    
    return invoiceContext;
});