// Create an array with 4 trees listed
const trees = ['oak', 'Pine', 'Aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

// Display the list of Trees inside the display Results Div
const listTrees = (t) => {
    let treeList = ''
    t.forEach(tree => {
        treeList += `${tree}<br>`

    })  
    displayResults.innerHTML = `${treeList} <span>${t.length} elements long</span>`
}

listTrees(trees)

document.querySelector('#add_redwood').onclick= () => {
    trees.push('Redwood')
    listTrees(trees)
}

document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees(trees)
}

document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0) {
        trees.shift()
        listTrees(trees)
    } else {
        errorElement.textContent = 'I cannot remove the first tree because there are no trees to remove '

    }
    }

    document.querySelector('#remove_tree2').onclick= () => {
        if (trees.length > 0) {
            trees.splice(1,1)
            listTrees(trees)
        }
    }
    

    document.querySelector('#remove_treelast').onclick= () => {
        if (trees.length > 0) {
            trees.pop()
            listTrees(trees)
        }
    }

    document.querySelector('#sortTrees').onclick= () => {
        if (trees.length > 0) {
            trees.sort()
            listTrees(trees)
        }
    }

    document.querySelector('#lowerTrees').onclick= () => {
        if (trees.length > 0) {
            var lowerTrees = [];
            for(let t of trees){
                lowerTrees.push(t.toLowerCase())
            }
            listTrees(lowerTrees)
        }
    }



    document.querySelector('#showName3').onclick = () => {
        if (trees.length > 2) {
           errorElement.textContent = trees[2]
           
        } else {
            errorElement.textContent = "There is not enough trees to perform this task."
    
        }
        }


    document.querySelector('#showName4').onclick = () => {
        if (trees.length > 3) {
           errorElement.textContent = trees[3]
           
        } else {
            errorElement.textContent = "There is not enough trees to perform this task."
    
        }
        }