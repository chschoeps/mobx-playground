import { action, autorun, computed, makeObservable, observable, makeAutoObservable } from 'mobx';

class List {
    items = observable([]);
    disposer;
    constructor() {
        console.log('constructor');        
        makeObservable(this, { 
            items: observable,
            addItem: action,
            setItem: action,
            length: computed
        });
        // makeAutoObservable(this);
        this.disposer = autorun(() => console.log(`items: ${this.items}`));
    };

    get length() {
        return this.items.length;
    };

    addItem(item) {
        this.items.push(item);
    };

    setItem() {
        this.items[0] = 'test22';
    };

    printList() {
        console.log('list: ', this.items);
    };
}

const list = new List();

list.addItem('test1');
list.addItem('test2');
list.addItem('test3');
// list.items[1] = 'test11';
list.setItem();

console.log('length: ', list.length);
list.printList();
list.disposer();