1. What problem does the context API help solve?

State management within parent child relationship is not usually the ideal when components are not in the same family tree or are deeply nested.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store holds all the state. Through reducers and actions we get to access and change the state from other components.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is good when we have to use one single piece of data passing within deeply nested components in the same family tree. Component state is better when we have different components in different family tree needing access to the same state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It’s a middleware that allows us to call action creators that return a function instead of an action object. It helps us make our action creators handle promises and async logic.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like Redux because of all the help that comes with it. We can access state from any component in regards of nesting or family trees.
