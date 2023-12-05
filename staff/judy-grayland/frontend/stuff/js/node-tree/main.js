
// recursividad - you call the same function inside the original function
function nodeTree(element, level = 0) {
    const children = element.childNodes
    
    children.forEach(child => {
        console.log(`${'\t'.repeat(level)} ${level === 0 ? '' : '⊢'} ${child.constructor.name} - ${child.tagName}`)

        nodeTree(child, level +1)
    })
}

nodeTree(document)