console.log('%c pepe%ctest %cv0.0', 'background-color: white; color: tomato; font-weight:bold', 'background-color: white; color: black; font-weight: bold;' , 'color: dodgerblue; font-size: .5rem')

function TEST(what) {
    console.log(`%cTEST ${what}`, 'color: magenta; font-weight: bold;')
}

function CASE(what) {
    console.log(`%cCASE ${what}`, 'color: cyan; font-weight: bold;')
}