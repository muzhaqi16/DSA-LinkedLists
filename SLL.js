const LinkedList = require('./LinkedList')
const SLL = new LinkedList();
main = () => {
    SLL.insertLast('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')

    SLL.insertLast('Tauhida')

    SLL.remove('Husker')

    SLL.insertBefore('Athena', 'Boomer')

    SLL.insertAfter('Hotdog', 'Helo')

    SLL.insertAt('Kat', 10)

}
display = (list) => {
    let currentNode = list.head;
    while (currentNode !== null) {
        console.log(currentNode.value)
        currentNode = currentNode.next
    }
}
size = (list) => {
    let currentNode = list.head;
    let x = 0
    while (currentNode !== null) {
        x++;
        currentNode = currentNode.next
    }
    return x;
}
isEmpty = (list) => {
    return list.head === null ? true : false;
}
findPrevious = (item, list) => {
    let currNode = list.head;
    if (!list.head) {
        return null;
    }
    while (currNode.next.value !== item) {
        if (currNode.next === null) {
            return null;
        }
        else {
            currNode = currNode.next;
        }
    }
    return currNode.value
}
findLast = (list) => {
    let currNode = list.head;
    while (currNode.next !== null) {
        currNode = currNode.next;
    }
    return currNode.value
}
main();
display(SLL)
console.log(size(SLL))
console.log(isEmpty(SLL))
console.log(findPrevious('Kat', SLL))
console.log(findLast(SLL))