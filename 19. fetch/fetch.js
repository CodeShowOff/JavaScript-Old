// The fetch() method of the Window interface starts the process of fetching a resource from the network,
// returning a promise that is fulfilled once the response is available.

// The promise resolves to the Response object representing the response to your request.

// A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL
// or a network error. A fetch() promise does not reject if the server responds with HTTP status codes 
// that indicate errors (404, 504, etc.). 
// Instead, a then() handler must check the Response.ok and/or Response.status properties.


// Syntax:
// fetch(resource)
// fetch(resource, options)

fetch('https://api.github.com/users/codeshowoff')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));


// 📌 Note:
// There is a special queue (microtask queue) for promises and fetch,
// which has higher priority than the regular task queue (used by setTimeout, etc.).
// Therefore, sometimes fetch callbacks can execute earlier even if other code appears later in the file.
// This applies to asynchronous functions — synchronous code will still run before any promise resolution.