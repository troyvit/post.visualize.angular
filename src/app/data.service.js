"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var $ = require("jquery");
var DataService = (function () {
    function DataService() {
        this.tableID = "14iS92Ep_8pfzwih-Hw-mn2o38_Mp31HOJ2BnI6rQ";
        this.apiKey = "&key=AIzaSyAAWkBly-1cwH3rbyLIhoZtJAY3RUHrViM";
        this.numReqDataPoints = 100;
        this.numReturnedDataPoints = 0;
        this.nonDataStorageItems = ["plantName", "columnData"];
    }
    DataService.prototype.encodeFusionTableSQL = function (sqlString) {
        var base = 'www.googleapis.com/fusiontables/v2/';
        var initQuery = "query?sql=";
        var url = base + initQuery + encodeURIComponent(sqlString) + this.apiKey;
        return url;
    };
    DataService.prototype.retrieveAllPlantData = function () {
        // explicit type annotation, JSON.parse does not have a determined type
        var plantData = [];
        if (localStorage.length == 0) {
            return plantData;
        }
        // Loop through selected localstorage held json strings
        for (var i = 0; i < this.numReturnedDataPoints; ++i) {
            var key = localStorage.key(i);
            if (this.nonDataStorageItems.indexOf(key) == -1) {
                var string = localStorage.getItem(localStorage.key(i));
                plantData[i] = JSON.parse(string);
            }
            ;
        }
        ;
        return plantData;
    };
    // Load any string from local storage.
    DataService.prototype.load = function (key) {
        return localStorage.getItem(key);
    };
    // Save any string key, value pair to local storage
    DataService.prototype.save = function (key, value) {
        localStorage.setItem(key, value);
    };
    DataService.prototype.getColumnIndex = function (columnString) {
        var columnData = JSON.parse(localStorage.getItem('columnData'));
        return columnData.indexOf(columnString);
    };
    // TODO: Confirm rowArray and columnArray are all Strings
    DataService.prototype.makeDictionary = function (rowArray, columnArray) {
        var plantDataDictArray = [];
        for (var i = 0, rLen = rowArray.length; i < rLen; ++i) {
            plantDataDictArray[i] = {};
            for (var j = 0, cLen = columnArray.length; j < cLen; ++j) {
                plantDataDictArray[i][columnArray[j]] = rowArray[i][j];
            }
        }
        return plantDataDictArray;
    };
    DataService.prototype.updatePlantData = function (onSuccess) {
        var plantName = this.getPlantName();
        var query = "SELECT * FROM " + this.tableID + " WHERE plant=" + "'" +
            plantName + "'" +
            " AND rawWaterTurbidity > 0 ORDER BY timeFinished DESC LIMIT " +
            this.numReqDataPoints;
        var queryURL = this.encodeFusionTableSQL(query);
        console.log(queryURL);
        // Get the JSON corresponding to the encoded sql string
        $.getJSON(query, function (json) {
            this.deleteOldPlantData();
            this.save('columnData', JSON.stringify(json.columns));
            if (json.rows == null) {
                json.rows = [];
                json.columns = [];
            }
            // Save plant data into the local storage
            var plantDataDictArray = this.makeDictionary(json.rows, json.columns);
            plantDataDictArray = this.filterExtremes(plantDataDictArray);
            this.numReturnedDataPoints = plantDataDictArray.length;
            this.insertManyPlantData(plantDataDictArray);
            // Call the callback and use the retrieve function to get plantdata
            onSuccess(this.retrieveAllPlantData(), plantName);
            $('#spinnerDestination').html("");
        })
            .fail(function () {
            alert("Could not sync data. Data sync"
                + "was not successful and old data is preserved");
            //alert(```Could not sync data.
            //Data sync was not successful and old data is preserved.```)
            $('#spinnerDestination').html("");
        });
    };
    DataService.prototype.insertManyPlantData = function (plantData) {
        for (var i = 0, len = plantData.length; i < len; ++i) {
            var timeStarted = plantData[i].timeStarted;
            localStorage.setItem(timeStarted, JSON.stringify(plantData[i]));
        }
        this.numReturnedDataPoints = localStorage.length - this.nonDataStorageItems.length;
    };
    DataService.prototype.deleteOldPlantData = function () {
        var plantName = this.load('plantName');
        localStorage.clear();
        this.save('plantName', plantName);
    };
    DataService.prototype.getPlantName = function () {
        if (this.load("plantName") == undefined) {
            return null;
        }
        return this.load("plantName");
    };
    DataService.prototype.getAllPlantsDict = function () {
        return {
            "aga": "Agalteca",
            "ala": "Alauca",
            "ati": "Atima",
            "ccom": "CuatroComunidades",
            "doto": "Otoro",
            "mar1": "Marcala",
            "moro": "Moroceli",
            "smat": "Matias",
            "snic": "SanNicolas",
            "tam": "Tamara",
            "lasv": "LasVegas",
            "sjg": "SanJuanGuarita"
        };
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable()
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map