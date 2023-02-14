class Stack {
  item = [];
  currentSize;
  maxSize;
  constructor(size) {
    this.maxSize = size;
    this.currentSize = this.item.length;
    this.minValue = '';
  }
  push(newVal) {
    if (this.minValue === '') this.minValue = newVal;
    else if (newVal < this.minValue) this.minValue = newVal;

    if (this.currentSize >= this.maxSize) {
      console.log('stack is full');
    } else {
      this.item[this.currentSize] = newVal;
      this.currentSize += 1;
    }
  }
  pop() {
    if (this.currentSize > 0) {
      this.currentSize -= 1;
      this.item.length = this.currentSize;
    } else {
      console.log('stack is empty');
    }
  }
  min() {
    // one way can be we iterates through the stack and find min element
    console.log(this.minValue);
    return this.minValue;
  }
  display() {
    console.log(this.item);
  }
}

const st1 = new Stack(5);
st1.push(22);
st1.push(23);
st1.push(24);
st1.push(25);
st1.push(26);
st1.push(27);
// st1.pop();
st1.min();
st1.display();

{
  /*
 Web browser's history feature. When a user navigates to a new page in the browser, 
 the current page's URL is added to a stack. When the user clicks the "back" button, 
 the previous page's URL is popped off the top of the stack and loaded into the browser.
*/
}
