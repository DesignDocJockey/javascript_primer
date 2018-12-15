'use strict';

const Moment = require('moment');
const _ = require('lodash');

const a = [
     {
      "key": 232,
      "doc_count": 6841
     },
     {
      "key": 44,
      "doc_count": 3561
     },
     {
      "key": 1,
      "doc_count": 594
     }
    ];

   let adminLevelIds = a.map( (i) => i.key );
   console.log(adminLevelIds);