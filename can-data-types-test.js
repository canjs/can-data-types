var dataTypes = require("./can-data-types");
var QUnit = require("steal-qunit");
var canReflect = require("can-reflect");
var canSymbol = require("can-symbol");

var MaybeNumber = dataTypes.MaybeNumber;
var isMemberSymbol = canSymbol.for("can.isMember");

QUnit.module('can-data-types');

QUnit.test('MaybeBoolean', function(){
    QUnit.equal( canReflect.convert("true", dataTypes.MaybeBoolean), true, "converted");

    QUnit.equal(canReflect.new(dataTypes.MaybeBoolean, "true") , true);

    QUnit.equal(dataTypes.MaybeBoolean[Symbol.for("can.isMember")](true)    , true);
    QUnit.equal(dataTypes.MaybeBoolean[Symbol.for("can.isMember")]("true")  , false);
    QUnit.equal(dataTypes.MaybeBoolean[Symbol.for("can.isMember")](null) , true);
});

QUnit.test('MaybeDate', function(){
    var date = new Date(2018,0,1);
    QUnit.equal( canReflect.convert(date.toString(), dataTypes.MaybeDate).getTime(), date.getTime(), "converted");

    QUnit.deepEqual(canReflect.new(dataTypes.MaybeDate, "2018-1-31") , new Date( Date.parse("2018-1-31") ), "new" );

    QUnit.equal(dataTypes.MaybeDate[Symbol.for("can.isMember")](new Date()) , true);
    QUnit.equal(dataTypes.MaybeDate[Symbol.for("can.isMember")]({})  , false);
    QUnit.equal(dataTypes.MaybeDate[Symbol.for("can.isMember")](null) , true);


});

QUnit.test('MaybeNumber', function(){
    QUnit.equal( canReflect.convert("5", MaybeNumber), 5, "converted");

    QUnit.equal( canReflect.new(MaybeNumber, "1"), 1);

    QUnit.equal( MaybeNumber[isMemberSymbol](1)    , true);
    QUnit.equal( MaybeNumber[isMemberSymbol]("1")  , false);
    QUnit.equal( MaybeNumber[isMemberSymbol](null) , true);
});

QUnit.test('MaybeString', function(){
    QUnit.equal( canReflect.convert(1, dataTypes.MaybeString), "1", "converted");

    QUnit.equal( canReflect.new(dataTypes.MaybeString, 1) , "1");

    QUnit.equal( dataTypes.MaybeString[Symbol.for("can.isMember")]("1")    , true);
    QUnit.equal( dataTypes.MaybeString[Symbol.for("can.isMember")](1)  , false);
    QUnit.equal( dataTypes.MaybeString[Symbol.for("can.isMember")](null) , true);

});
