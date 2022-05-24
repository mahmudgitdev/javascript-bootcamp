### ইন্টারভিউ এর প্রশ্ন

1. What is event bubbling and capturing?
2. What is event bubbling for?
3. What is event propagation in DOM?
4. Why do we use event bubbling?
5. How can you stop the event bubbling up?

### Answer

1. Event capturing means propagation of event is done from ancestor elements to child element in the DOM while event bubbling means propagation is done from child element to ancestor elements in the DOM.

2. Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event. It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy.

3. Propagation refers to how events travel through the Document Object Model (DOM) tree. The DOM tree is the structure which contains parent/child/sibling elements in relation to each other. You can think of propagation as electricity running through a wire, until it reaches its destination.

4. Event-bubbling causes all events in the child nodes to be automatically passed to its parent nodes. So this means that no matter what elements are inside a table row <tr>, that element will pass its onmouseover and onmouseout events to their parent <tr> which contains the elements.

5. Make sure to pass the event object as a parameter.
   Use the stopPropagation method on the event object above your code within your event handler function.
