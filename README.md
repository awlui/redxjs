# RedXJS

## Description
This is an implementation of Redux ideas with Rxjs in preparation for a chat app I want to build with React and Rxjs. This library will implement
Redux ideas for state management without redux. This library will imperfectly mimic redux concepts and apis to work with Rxjs observables. This will be accomplished
by modeling Actions as data streams that you can subscribe your view to. Action creators will insert actions on one end of the stream and up-to-date state will be pushed 
out the other end. I will do a write up of the API after I've made more progress on it.


## Project Goals

* Better understand Redux core ideas 
* Build a library with Typescript
* Get better at Rxjs and programming reactively
* Get better at programming 


## Future
Might publish to npm in the future if it becomes nontrivial to implement the features on a project by project basis with vanillajs. I've published packages to npm in the past that are a bit embarassing.




## License

MIT © [Andy Lui]()


### Note
Project Typescript/Webpack boilerplate generated with [wp-2-tsc](https://github.com/awlui/generator-wp2-typescript) Yeoman Generator!!!