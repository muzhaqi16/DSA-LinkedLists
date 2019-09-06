const LinkedList = require('./LinkedList')
const SLL = new LinkedList();
main = () => {
    SLL.insertLast('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertAfter('Stranger', 'Apollo')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.insertBefore('Artan', 'Husker')
}
display = (list) => {
    let currentNode = list.head;
    while (currentNode !== null) {
        console.log(currentNode.value)
        currentNode = currentNode.next
    }
}
main();
display(SLL)