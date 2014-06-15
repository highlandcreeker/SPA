define(function (invoice) {
    function collection(invoice){
        this.invoices = [];
        this.add = function (invoice) {
            this.invoices.push(invoice);
        }
    }
})