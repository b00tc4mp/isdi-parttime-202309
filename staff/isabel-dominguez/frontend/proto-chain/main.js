/**
 * Prints the prototype chain of an instance.
 * 
 * @example:
 * 
 * protoChain(new Ferrari)
 * 
 * Object
 * └── Car
 *      └── Ferrari
 * 
 * @param {*} instance 
 * @param {*} level 
 */

function protoChain(instance, level = 0) {
    const proto = instance.__proto__;
    if (proto) {
        console.log(`${'  '.repeat(level)}${proto.constructor.name}`);
        protoChain(proto, level + 1);
    } else {
        console.log(`${'  '.repeat(level)}null`);
    }
}

protoChain(new Date)
console.log("*******************************************************************************")
protoChain(new Array)
console.log("*******************************************************************************")
protoChain(new Object)
console.log("*******************************************************************************")