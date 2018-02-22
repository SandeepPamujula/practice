
'use strict';

let Ajv = require('ajv');
let ajv = new Ajv({allErrors: true});

let schema = {
          "properties": {
				"foo":{ "type": "string"},
				"bar": {"type": "number", "maximum": 3},
                "photo": {"type": "array"}
		  }};

const validate = ajv.compile(schema);

function test(data) {

	let valid = validate(data);
	if( valid ) console.log('valid');
	else console.log('invalid', ajv.errorsText(validate.errors));

}

test ({"foo": "hi", "bar": 2});
test ({"foo": 33, "bar": 42});

