define(['durandal/app', 'knockout', 'util/simpleGrid', 'viewmodels/invoiceEdit',
'models/invoice', 'jquery'],

    function (app, ko, simpleGrid, editor, invoice, $) {

        // var simpleGrid = require('util/simpleGrid');
        // var invoiceCollection = backbone.Collection.extend();

        function ajaxRequest(type, url, data, dataType) { // Ajax helper
            var options = {
                dataType: dataType || "json",
                contentType: "application/json",
                cache: false,
                type: type,
                error: function (xhr, status, error) { alert(error);},
                data: data ? data.toJson() : null
            };
            //var antiForgeryToken = $("#antiForgeryToken").val();
            //if (antiForgeryToken) {
            //    options.headers = {
            //        'RequestVerificationToken': antiForgeryToken
            //    }
            //}
            return $.ajax(url, options);
        };


        function wrapper(array) {
            this.pieces = array;
            this.add = function (piece) { this.pieces.pus(piece) };
            this.toArray = function () { return this.pieces };
        };

        var x = ajaxRequest("get", 'http://fb360/API/API/Invoice', null, "text").fail(function () {
            alert('error');
        });

        var invoices = new wrapper([{ name: 'invoice one', date: '2013-03-02', settled: true },
        { name: 'invoice two', date: '2013-03-02', settled: true },
        { name: 'invoice three', date: '2013-03-02', settled: false },
        { name: 'invoice four', date: '2013-03-02', settled: false }]);

        function invoiceGridData() {
            this.data = ko.observableArray(invoices.toArray());
            this.columns = [
            { headerText: "Invoice", rowText: "name" },
            { headerText: "Date Approved", rowText: "date" },
            { headerText: "Paid", rowText: function (item) { return item.settled ? 'yes' : 'no' } }
            ];
            this.pageSize = 4;
            this.rowClick = function (data) {

                app.showDialog(new editor(data.name, data.settled)).then(function (dialogResult) {
                    if (dialogResult === 'save') {
                        //ajaxRequest("put", 'http://fb360/API/Invoice/', todoList, "text").fail(function () {
                        //    todoList.errorMessage("Error updating the todo list title. Please make sure it is non-empty.");
                        //});
                    }
                    else {

                    }
                })
            };

        };

        function invoiceGrid() {
            this.gridViewModel = new simpleGrid(new invoiceGridData());
            this.addItem = function () {
                this.gridViewModel.data.push({ name: 'five', date: '2014-03-05', settled: false });
                alert(invoices.toArray().length);
            };
        };




        return new invoiceGrid();

    });