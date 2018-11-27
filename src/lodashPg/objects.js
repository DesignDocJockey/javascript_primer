'use strict';

const _ = require('lodash');

/*the _assigns() adds /overrides properties from one or many objects to an existing object. it modifies the existing object with properties/values from  
the additional objects being added
*/
let qbTom = { 
                firstName: 'Tom',
                lastName: 'Bady',
                team: 'Patriots'
            };

const qbPeyton = _.assign(qbTom, 
                    {   firstName: 'Peyton', 
                        lastName: 'Manning', 
                        team: 'Colts', 
                        height: '6 5'
                    }, 
                    {
                        totalPassingYardage: "",
                        totalPassingTouchdowns: 575
                    });
console.log(`qbPeyton: ${JSON.stringify(qbPeyton, undefined, 1)} `);
console.log(`qbTom: ${JSON.stringify(qbTom, undefined, 1)} `);

console.log(`Are they equal? ${qbTom === qbPeyton}`)