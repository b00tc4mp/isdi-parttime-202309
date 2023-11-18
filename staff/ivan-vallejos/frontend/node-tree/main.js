function nodeTree (element, level = 0) {
    const children = element.childNodes

    children.forEach(child => {
        console.log(`${level === 0 ? '': ''} ${'\t'.repeat(level)} ${child.constructor.name} - ${child.tagName}`)

        nodeTree (child, level + 1)
    })
}

nodeTree (document)