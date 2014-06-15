define(['plugins/dialog', 'jquery'], function (dialog, $) {
    var invoiceEdit = function (name,paid) {
        this.name = name;
        this.paid = paid;
    };

    invoiceEdit.prototype.selectOption = function (dialogResult) {
        dialog.close(this, dialogResult);
    };

    return invoiceEdit;
});