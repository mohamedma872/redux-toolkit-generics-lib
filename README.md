
# Redux Toolkit Generic Slice Library

A generic utility to easily create Redux slices with Redux Toolkit using TypeScript, enabling quick and reusable state management without the repetitive boilerplate code.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
  - [Usage](#usage)
- [API](#api)
  - [createGenericSlice](#creategenericslice)
- [Examples](#examples)
  - [Creating a User Slice](#creating-a-user-slice)
  - [Creating a Post Slice](#creating-a-post-slice)
- [Contributing](#contributing)
- [License](#license)

## Features

- **TypeScript Support**: Fully typed, offering a great developer experience.
- **Simplifies Boilerplate**: Reduces repetitive code required to manage state using Redux Toolkit.
- **Generic Solution**: Flexible and reusable, allowing you to quickly generate Redux slices for multiple entities.

## Installation

To use this library in your project, install it via npm:

```bash
npm install redux-toolkit-generics
```

If you're using Yarn:

```bash
yarn add redux-toolkit-generics
```

## Getting Started

The library provides a generic function, `createGenericSlice`, that helps you create Redux slices with minimal boilerplate.

### Usage

1. Import the `createGenericSlice` function from the library.
2. Pass in the entity name and a function for fetching data.

## API

### `createGenericSlice<T>(name: string, fetchFunction: () => Promise<T[]>): { reducer, actions }`

- **`name`**: The name of the slice (string).
- **`fetchFunction`**: An async function that returns an array of items (`T[]`) to populate your state.

### Returns

- **`reducer`**: The reducer function to be added to your store.
- **`actions`**: An object containing the actions generated for the slice, including the async thunk.

## Examples

### Creating a User Slice

```typescript
import { createGenericSlice } from 'redux-toolkit-generics';

// Define a function to fetch user data
const fetchUsers = async () => {
  return await fetch('/api/users').then((res) => res.json());
};

// Create a user slice
export const userSlice = createGenericSlice('user', fetchUsers);

// Export the reducer and actions
export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
```

### Creating a Post Slice

```typescript
import { createGenericSlice } from 'redux-toolkit-generics';

// Define a function to fetch post data
const fetchPosts = async () => {
  return await fetch('/api/posts').then((res) => res.json());
};

// Create a post slice
export const postSlice = createGenericSlice('post', fetchPosts);

// Export the reducer and actions
export const postReducer = postSlice.reducer;
export const postActions = postSlice.actions;
```

## Setup with Redux Store

After creating the slice, you need to add the reducer to your store:

```typescript
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { postReducer } from './postSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    posts: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

## Contributing

Contributions are welcome! If you find a bug, have an idea for improvement, or want to help expand the functionality, please feel free to submit a pull request or open an issue on [GitHub](https://github.com/your-repo-url).

### Running Locally for Development

To set up the library locally:

1. Clone the repository
   ```bash
   git clone https://github.com/mohamedma872/redux-toolkit-generics.git
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Run the build script
   ```bash
   npm run build
   ```

## License

This library is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
