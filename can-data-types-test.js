var dataTypes = require("./can-data-types");
var QUnit = require("steal-qunit");
var canReflect = require("can-reflect");

QUnit.module('can-data-types');

QUnit.test('MaybeBoolean', function(){
    QUnit.equal( canReflect.convert("true", dataTypes.MaybeBoolean), true, "converted");
});

QUnit.test('MaybeDate', function(){
    var date = new Date(2018,0,1);
    QUnit.equal( canReflect.convert(date.toString(), dataTypes.MaybeDate).getTime(), date.getTime(), "converted");
});

QUnit.test('MaybeNumber', function(){
    QUnit.equal( canReflect.convert("5", dataTypes.MaybeNumber), 5, "converted");
});

QUnit.test('MaybeString', function(){
    QUnit.equal( canReflect.convert(1, dataTypes.MaybeString), "1", "converted");
});
