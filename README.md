# Getting Started with Redux Toolkit

Redux is library for managing state in a predictable way in JavaScript applications.

React-Redux is a library that provides bindings to use React and Redux together in a application.

- Redux is a state management library: Open-source JavaScript library.
- Provides a centralised store: Component can directly access the data
- Makes complex application easier: Provides consistent data across application.
- It's flexible: Works with any UI framework/libraries.

## Three Principles

1. The state of your application is stored in an object tree within a single store.
1. The only way to change the state is to emit/dispatch an action, an object describing what happened.
1. To specify how the state tree is transformed by actions, you write pure reducers.

## Action

- The only way your application can interact with the store.
- Carry some information from your app to the redux store.
- Plain JavaScript objects.
- Have a ‘type’ property that describes something that happened in the application.
- The ‘type’ property is typically defined as string constants.

## Redux Store 

- One store for the entire application.
- Responsibilities
    - Holds application state.
    - Allows access to state via getState().
    - Allows state to be updated via dispatch(action).
    - Registers listeners via subscribe(listener).

# Redux Toolkit

The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux: 

- Configuring a Redux store is too complicated.
- I have to add a lot of packages to get Redux to do anything useful.
- Redux requries too much boilerplate code.
