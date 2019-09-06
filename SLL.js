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
main();
display(SLL)