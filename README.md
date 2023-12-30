
# React To-Do App

This is a simple to-do app built with React. It allows users to add, complete, and delete to-do items.

## Features

- Add new to-do items
- Mark to-do items as completed
- Delete existing to-do items
- Persist to-do items in local state

## Usage

To use the app:

- Type a new to-do title in the text input and click "Add" to add it to the list
- Check the checkbox next to a to-do item to mark it as completed
- Click the "Delete" button next to a to-do item to remove it from the list

The app uses React state and hooks to manage the to-do data entirely in local component state.

## Components

The app consists of the following components:

- **App** - The root component that renders the input form and list 
- **Form** - Handles adding new to-do items
- **Todo** - Renders the list of to-do items
- **ListItem** - Renders an individual to-do item with checkbox and delete button

The components use state hooks and handlers to modify the todo list data and trigger re-renders when it changes.

## Code Overview

- `useState` hooks manage the `newItem` text state and the `todos` array 
- `uuidv4` generates unique IDs for each to-do 
- Submit handler adds new todos to the existing state array
- Toggle and delete handlers modify the state array to update the UI
- Conditionally shows placeholder text if `todos` array is empty

