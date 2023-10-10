console.log('TEST concat')

console.log('CASE for array [5, 12, 8, 130, 44], [10, 20, 30, 40, 50] concat "3" results is [5, 12, 8, 130, 44, 10, 20, 30, 40, 50]')
console.log(concat([5, 12, 8, 130, 44], [10, 20, 30, 40, 50]))
// 130

console.log('CASE for array [5, 12, 8, 130, 44], [10, 20, 30, 40, 50], [a, b, c, d] concat 0 results is [5, 12, 8, 130, 44, 10, 20, 30, 40, 50, a, b, c, d] ')
console.log(concat([5, 12, 8, 130, 44], [10, 20, 30, 40, 50], ['a', 'b', 'c', 'd']))
// 5

console.log('CASE for array [5, 12, 8, 130, 44], [20, 21, 22, 23, 24, 25], [Manu, Ana, Judy, Isabel, Luis, Belen ] concat  results is [5, 12, 8, 130, 44, 20, 21, 22, 23, 24, 25, Manu, Ana, Judy, Isabel, Luis, Belen ]')
console.log(concat([5, 12, 8, 130, 44], [20, 21, 22, 23, 24, 25], ['Manu', 'Ana', 'Judy', 'Isabel', 'Luis', 'Belen' ]))
// 44

console.log('CASE for array [5, 12, 8, 130, 44], [100, 200, 300, 400, 500], [Abel, Edgar, Benja, eneko, chema, tano, miguel ] concat 1 results is [5, 12, 8, 130, 44], [100, 200, 300, 400, 500], [Abel, Edgar, Benja, eneko, chema, tano, miguel ] ')
console.log(concat([5, 12, 8, 130, 44], [100, 200, 300, 400, 500], ['Abel', 'Edgar', 'Benja', 'eneko', 'chema', 'tano', 'miguel' ]))
// 12

