# Communication between tabs

Let there're two different sites (hosts) opened it two different tabs and they need to communicate to each other in the same browser.

The problem could be solved using the next algorithm:

- A.com set a new item to the browser's localstorage
- a new storage event fires for the other window (in the next tab)
- B.com get the message from the localstorage

Here's some interface which give user some abstraction from localstorage:

```js
var proxy = new Proxy();

// Each proxy object should implement onMessage
proxy.onMessage = function(message) {
  console.log(message);
}

proxy.send('foo');
proxy.send('bar');
```
