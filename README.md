# lab4

## Rich Web Lab 4 Questions and Answers

**Q1) Explain what is meant by the stream abstraction. What is the relationship between streams and the observer pattern? What are streams useful for modeling and when might you use them in Rich Web development?**

Stream abstraction refers to how a stream can be present unlike an array for data that may or may not be present or could arrive at some stage in the future after processing has begun on other elements. Streams implement the observer design pattern. The observer design pattern works in a similar way to a promise, it can be implemented to assist with asynchronous functions. The observer design pattern works when a subject notifies the observer of a state change, this in turn causes the observer to execute it's function. This means that the observer is notified when it needs to be updated as oppose to a change in state being checked for repeatedly. In the case of streams and the observable design pattern, the stream is what is being observed and the observer will execute when the stream has the data needed present in it. This can in the long run save time and processing power. Streams can be useful for modeling as they can be used to process things of the same logical structure. Streams could be used in rich web development to process things as they are received as opposed to waiting until functions are called to do so. Streams can also be used in web development to access data that is in many different locations for synchronization purposes.

**Q2) Assume that you are building an interface to an API in your Rich Web App. Describe in detail how you could use the RxJS library to handle asynchronous network responses to API requests. In your opinion, what are the benefits to using a streams library for networking over, say, promises? And what do you think are the downsides?**

The RxJS library could be used to handle asynchronous network responses to API requests through the use of obervables, operators and observers. This would allow for requests coming in to be processed and have the required operations completed on them and then be sent to the observer. This would involve the use of the pipe operator and also the map operator. The data would go from the Observable, to the pipe where the operators would be called and then the output would be sent to the observer.

RxJS may be prefered over promises because an RxJS obervable can handle multiple events at a time, this is not something that promises are capable of doing. Call failures can also be handled using the RxJS library. Speed is another thing that could be a benefit of using the RxJS library over promises as the Observer will be called into action as soon as the observable has completed its relevant operations.

A potential downside to using the RxJS library is the extra code that would have to be written in comparison to promises. The RxJS library also has a steep learning curve and is not as straightforward as using promises.

**Q3) Consider three asynchronous tasks, A,B & C. What are the consequences of these functions sharing global state? What is a good practice to alleviate any problems associated with this?**

The sharing of a global state can cause a number of issues. Results could be different in each of the functions but some functions may see their state change while another function remains as it was before the change was made.

Good practice and a potential solution would be to implement the code in a way that there is no global state but the state of one function is passed to the other function by means of a function call with the state of the current function put into the function calls parameters. This can also handle the issue of one function being called before another and changing the state incorrectly. If implemented in the suggested manner the execution of function A would lead to function B being called and then function C being called with the relevant state and variables being passed to each of the functions.
