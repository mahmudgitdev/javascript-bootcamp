### ইন্টারভিউ এর প্রশ্ন

1. What is event delegation in JavaScript?
2. What are the benefit of event delegation?
3. How does an event propagate in JavaScript?
4. How do I stop click event propagation?
5. When should I use event delegation?

### Answer

1. Event delegation allows you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent. That event listener analyses bubbled events to find a match on child elements.
2. Benefits: Simplifies initialization and saves memory: no need to add many handlers. Less code: when adding or removing elements, no need to add/remove handlers. DOM modifications: we can mass add/remove elements with innerHTML and the like.
3. In the capturing phase, events propagate from the Window down through the DOM tree to the target node. For example, if the user clicks a hyperlink, that click event would pass through the <html> element, the <body> element, and the <p> element containing the link.
4. To stop an event from further propagation in the capturing and bubbling phases, you call the Event. stopPropation() method in the event handler. Note that the event. stopPropagation() method doesn't stop any default behaviors of the element e.g., link click, checkbox checked.
5. The event delegation is a useful pattern because you can listen for events on multiple elements using one event handler. Making the event delegation work requires 3 steps: Determine the parent of elements to watch for events. Attach the event listener to the parent element.
