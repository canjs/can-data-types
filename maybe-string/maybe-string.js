var canReflect = require("can-reflect");

function toString(val) {
	if (val == null) {
		return val;
	}
	return '' + val;
}

module.exports = canReflect.assignSymbols(toString,{
	"can.new": toString,
	"can.getSchema": function(){
		return {
			type: "Or",
			values: [String, undefined, null]
		};
	},
    "can.getName": function(){
        return "MaybeString";
    }
});
