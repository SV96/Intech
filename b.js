class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }
  appendNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  searchNode(value) {
    let result = 'Value not in linked list';
    let lead = this.head;
    let loop = true;
    while (loop) {
      if (lead.value === value) {
        loop = false;
        result = lead;
        console.log(lead);
        return result;
      }
      lead = lead.next;
      loop = !!lead;
    }
    console.log(result);
    return result;
  }
}

const linkedList = new LinkedList(100);
linkedList.appendNode(200);
linkedList.appendNode(300);
linkedList.appendNode(400);
linkedList.searchNode(300);
