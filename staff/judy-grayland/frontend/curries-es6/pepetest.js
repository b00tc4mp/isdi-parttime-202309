console.log('%c pepe%ctest %c v0.0', 'background-color: white; color: tomato; font-weight: bold', 'background-color: white; color: black; font-weight: bold;', 'color: dodgerblue; font-size: .5rem;')

function TEST(what) {
    console.log(`%cTest ${what}`, 'color: deepPink; font-weight: bold; font-size: .75rem;')
}

function CASE(what) {
    console.log(`%cCASE ${what}`, 'color:blue; font-weight: bold;')
}