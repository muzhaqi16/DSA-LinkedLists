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

}