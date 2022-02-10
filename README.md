# NgrxFacadePattern

The point of this project is to test out NgRx features and more specifically play around with implementing the NgRx [facade pattern](https://thomasburlesonia.medium.com/ngrx-facades-better-state-management-82a04b9a1e39) by [Thomas Burleson](https://thomasburlesonia.medium.com/).

The project is running Angular _v13_ with [Angular Material](https://material.angular.io/). The application itself is a simple todo list.

## What is the Facade Pattern?

Facades in an Angular and NgRx context, is simply a way to create an abstraction between components and the store. Instead of components directly injecting the NgRx store, they inject a facade, which masks the NgRx artifacts. This simplifies the use of the store and removes the direct dependency to NgRx in every component that needs to access the store. 

Creating a facade in Angular is also simple, as it is essentially just a service (an `@Injectable`).

## How to Run

**Install Dependencies**
```sh
$ npm install
```

**Run Application**
```sh
$ npm run start
```

**Run Tests**
```sh
$ npm run test
```

## Documentation
- [NgRx + Facades: Better State Management by Thomas Burleson](https://thomasburlesonia.medium.com/ngrx-facades-better-state-management-82a04b9a1e39)
- [NgRx Facade Pattern by Colum Ferry](https://www.thisdot.co/blog/ngrx-facade-pattern)
- [NgRx Facades: Pros and Cons by Sam Julien](https://auth0.com/blog/ngrx-facades-pros-and-cons/)