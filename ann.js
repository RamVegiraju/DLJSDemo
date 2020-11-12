//importing library
const brain = require('brain.js');

//creating an ANN
const network = new brain.NeuralNetwork();

//training ANN
network.train([
    {input: [0,0,0], output: [0]},
    {input: [0,0,1], output: [0]},
    {input: [0,1,1], output: [0]},
    {input: [1,0,1], output: [1]},
    {input: [1,1,1], output: [1]}
]);


//should return low value
const output = network.run([0,0,0]);


//should return high value
const output2 = network.run([1,1,1]);

//backtick for including JS code (template string)
console.log(`Prob: ${output}%`);
console.log(`Prob: ${output2}%`);