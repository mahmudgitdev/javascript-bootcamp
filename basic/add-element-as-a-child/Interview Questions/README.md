### ইন্টারভিউ এর প্রশ্ন

1. What is appendChild in Javascript?
2. What is removeChild in JavaScript?
3. What is a parent node?
4. Which property should be used to remove an element from DOM?
5. What can I use instead of appendChild?

### Answer

1. The appendChild() is a method of the Node interface. The appendChild() method allows you to add a node to the end of the list of child nodes of a specified parent node.

2. **_removeChild()_** The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node. Note: As long as a reference is kept on the removed child, it still exists in memory, but is no longer part of the DOM. It can still be reused later in the code.

3. A Node that is the parent of the current node. The parent of an element is an Element node, a Document node, or a DocumentFragment node
4. **_remove()_** method removes the element from the DOM.

5. **_append()_** is a convenient alternative to appendChild() .
