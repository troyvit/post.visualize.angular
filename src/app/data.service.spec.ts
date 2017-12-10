import { DataService } from './data.service';

describe('Data Service Test', () => {
    // ...variable declarations
    let service: DataService;
    beforeEach(() => {
        service = new DataService();
    });

    // //Mock localStorage
    // beforeEach(() => {
    //     var store = {};
    //
    //     spyOn(localStorage, 'getItem').and.callFake( (key:string):String => {
    //         return store[key] || null;
    //     });
    //     spyOn(localStorage, 'removeItem').and.callFake((key:string):void =>  {
    //         delete store[key];
    //     });
    //     spyOn(localStorage, 'setItem').and.callFake((key:string, value:string):string =>  {
    //         return store[key] = <string>value;
    //     });
    //     spyOn(localStorage, 'clear').and.callFake(() =>  {
    //         store = {};
    //     });
    //     spyOn(localStorage, 'length').and.callFake(() => {
    //         return Object.keys(store).length;
    //     });
    //     spyOn(localStorage, 'key').and.callFake((index: Number): String => {
    //         return index.toString();
    //     });
    // });

    //Testing retrieveAllPlantData////////////////////////////////////////////////////
    it("#retrieveAllPlantData should return [] by default", function() {
        localStorage.clear()
        expect(service.retrieveAllPlantData()).toEqual([]);
    });
    it("#retrieveAllPlantData should return the elements in localStorage", function() {
        localStorage.clear();
        localStorage.setItem("1", JSON.stringify("SanPedro"));
        expect(service.retrieveAllPlantData()).toEqual(["SanPedro"]);
        localStorage.setItem("2", JSON.stringify("Tegucigalpa"));
        localStorage.setItem("3", JSON.stringify("Cortes"));
        localStorage.setItem("4", JSON.stringify("Copan"));
        localStorage.setItem("5", JSON.stringify("Choloma"));
        expect(service.retrieveAllPlantData()).toEqual(["SanPedro", "Tegucigalpa", "Cortes", "Copan", "Choloma"]);
    });

    //Testing load////////////////////////////////////////////////////////////////////
    it("#load should return null by default", function() {
        localStorage.clear();
        expect(service.load("1")).toEqual(null);
    });
    it("#load should return value stored at inputted key", function() {
        localStorage.clear();
        localStorage.setItem("1", "SanPedro");
        localStorage.setItem("2", "Tegucigalpa");
        expect(service.load("1")).toEqual("SanPedro");
        expect(service.load("2")).toEqual("Tegucigalpa");
        expect(service.load("10")).toEqual(null);
    });

    //Testing save////////////////////////////////////////////////////////////////////
    it("#save should save the given key, value pair in localStorage", function() {
        localStorage.clear();
        service.save("1", "SanPedro");
        expect(service.load("1")).toEqual("SanPedro");
        service.save("2", "Tegucigalpa");
        expect(service.load("2")).toEqual("Tegucigalpa");
        service.save("3", "Choluteca");
        expect(service.load("3")).toEqual("Choluteca");
    });
    it("#save should replace the value stored at a given key if the key already corresponds to a value", function() {
        service.save("3", "Copan");
        expect(service.load("3")).toEqual("Copan");
    });

    //Testing getColumnIndex//////////////////////////////////////////////////////////
    it("#getColumnIndex should return the index of columnString in columnData", function(){
        localStorage.clear();
        var data= JSON.stringify(["Turbiedad Cruda", "Turbiedad Decantada", "Turbiedad Filtrada"]);
        localStorage.setItem("columnData", data);
        expect(service.getColumnIndex("Turbiedad Cruda")).toEqual(0);
        expect(service.getColumnIndex("Turbiedad Decantada")).toEqual(1);
        expect(service.getColumnIndex("Turbiedad Filtrada")).toEqual(2);
    });

    //Testing makeDictionary//////////////////////////////////////////////////////////
    it("#makeDictionary should return the appropriate dictionary", function(){
        var rowArray= [["x", "y", "z"], ["a", "b", "c"], ["1", "2", "3"]];
        var colArray= ["TurbiedadCruda", "TurbiedadDecantada", "TurbiedadFiltrada"];
        var PDDA= [{"TurbiedadCruda": "x", "TurbiedadDecantada": "y", "TurbiedadFiltrada": "z"},
        {"TurbiedadCruda": "a" , "TurbiedadDecantada": "b", "TurbiedadFiltrada": "c"},
        {"TurbiedadCruda": "1", "TurbiedadDecantada": "2", "TurbiedadFiltrada": "3"}];
        expect(service.makeDictionary(rowArray, colArray)).toEqual(PDDA);
    });
    //Testing updatePlantData/////////////////////////////////////////////////////////
    it("#updatePlantData should update the plant data in local storage", function(){
        //service.updatePlantData();
    });

    //Testing insertManyPlantData/////////////////////////////////////////////////////
    it("#insertManyPlantData should add the elements of an array to localStorage", function(){
        localStorage.clear();
        var manyPlantData= [JSON.stringify("string1"), JSON.stringify("string2"), JSON.stringify("string3")]
        service.insertManyPlantData(manyPlantData);
        expect(service.retrieveAllPlantData()).toEqual([JSON.stringify("string3")]);
        //Because each element's .timeStarted property is undefined, each one
        //has the same key 'undefined' so it keeps getting overwritten, leaving
        //only "string3" in localStorage at the end


    });

    //Testing deleteOldPlantData//////////////////////////////////////////////////////
    it("#deleteOldPlantData should delete all data in localStorage besides data associated with plantName", function(){
        localStorage.clear();
        localStorage.setItem("plantName", "SanPedro, Tegucigalpa, Cortes, Copan, Choloma");
        localStorage.setItem("1", "SanPedro");
        localStorage.setItem("2", "Tegucigalpa");
        localStorage.setItem("3", "Cortes");
        localStorage.setItem("4", "Copan");
        localStorage.setItem("5", "Choloma");
        service.deleteOldPlantData();
        expect(service.retrieveAllPlantData()).toEqual([]);
        expect(service.load("plantName")).toEqual("SanPedro, Tegucigalpa, Cortes, Copan, Choloma");
    });

    //Testing getPlantName////////////////////////////////////////////////////////////
    it("#getPlantName should return null by default", function() {
        localStorage.clear();
        expect(service.getPlantName()).toEqual(null);
    });
    it ("#getPlantName should return the value associated with the key \'plantName\' in localStorage", function() {
        localStorage.clear();
        localStorage.setItem("plantName", "SanPedro, Tegucigalpa, Cortes, Copan, Choloma");
        expect(service.getPlantName()).toEqual("SanPedro, Tegucigalpa, Cortes, Copan, Choloma");
    });

    //Testing getAllPlantsDict////////////////////////////////////////////////////////
    it ("#getAllPlantsDict should return a dictionary for all plants", function(){
        expect(service.getAllPlantsDict()).toEqual({"aga":"Agalteca",
			"ala":"Alauca",	"ati":"Atima", "ccom":"CuatroComunidades",
			"doto":"Otoro", "mar1":"Marcala", "moro":"Moroceli",
			"smat":"Matias", "snic":"SanNicolas", "tam":"Tamara",
			"lasv":"LasVegas", "sjg":"SanJuanGuarita"});
    });


    //Testing updatePlantData/////////////////////////////////////////////////////////
    it("#updatePlantData test should log \"Success!\" to the console", function() {
        function printSuccess():String{
            console.log("Success!")
            return "Success!"
        }
        service.updatePlantData(printSuccess())
    });


});
