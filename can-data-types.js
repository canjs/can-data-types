"use strict";
var MaybeBoolean = require("./maybe-boolean/maybe-boolean"),
    MaybeDate = require("./maybe-date/maybe-date"),
    MaybeNumber = require("./maybe-number/maybe-number"),
    MaybeString = require("./maybe-string/maybe-string"),
    namespace = require("can-namespace"),
		types = require("./types");

module.exports = namespace.dataTypes = {
    MaybeBoolean: MaybeBoolean,
    MaybeDate: MaybeDate,
    MaybeNumber: MaybeNumber,
    MaybeString: MaybeString,
	maybe: types.maybe,
	maybeConvert: types.maybeConvert,
	check: types.check,
	convert: types.convert
};
