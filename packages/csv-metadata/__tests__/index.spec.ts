'use strict';
import { describe, it } from "mocha"
import { assert } from "chai"

import * as fs from 'fs';

import { readMetadata } from '../src'
import { Validator } from 'jsonschema';

describe('csv2rdf', () => {
  it("Rin tried", function(){
    const test = readMetadata(__dirname + '/hoge.json')
    const v = new Validator()
    const schema = JSON.parse(fs.readFileSync(__dirname + '/TableSchema.json').toString())
    console.log(v.validate(test, schema));
    //assert.isTrue(ret, validate.errors!.map(e=> e.params + " : " + e.message).join("\n"))
  })
})