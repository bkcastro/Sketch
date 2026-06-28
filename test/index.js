import test from 'node:test';
import assert from 'node:assert/strict';
import { createName } from '../lib/files.js'

test('create valid sketch names', (t) => {

    const nums = [1,2,3,4,5,6,7,8,9,10];
    const answer = [
        '0001',
        '0002',
        '0003',
        '0004',
        '0005',
        '0006',
        '0007',
        '0008',
        '0009',
        '0010'
    ]

    var temp = new Array();

    for (const n of nums) temp.push(createName(n));

    assert.deepStrictEqual(answer, temp);

});

