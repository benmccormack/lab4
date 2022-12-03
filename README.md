# lab4

## Rich Web Lab 4 Questions and Answers

**Q1) Explain what is meant by the stream abstraction. What is the relationship between streams and the observer pattern? What are streams useful for modeling and when might you use them in Rich Web development?**
Stream abstraction refers to how a stream can be present unlike an array for data that may or may not be present or could arrive at some stage in the future after processing has begun on other elements. Streams implement the observer design pattern. The observer design pattern works in a similar way to a promise, it can be implemented to assist with asynchronous functions. The observer design pattern works when a subject notifies the observer of a state change, this in turn causes the observer to execute it's function. This means that the observer is notified when it needs to be updated as oppose to a change in state being checked for repeatedly. This can in the long run save time and processing power. Streams can be useful for modeling as they can be used to process things of the same logical structure. Streams could be used in rich web development to process things as they are received as opposed to waiting until functions are called to do so. Streams can also be used in web development to access data that is in many different locations for synchronization purposes.

**Q2) Assume that you are building an interface to an API in your Rich Web App. Describe in detail how you could use the RxJS library to handle asynchronous network responses to API requests. In your opinion, what are the benefits to using a streams library for networking over, say, promises? And what do you think are the downsides?**

**Q3) Consider three asynchronous tasks, A,B & C. What are the consequences of these functions sharing global state? What is a good practice to alleviate any problems associated with this?**
