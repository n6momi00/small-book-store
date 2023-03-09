# Project structure

This project uses following libraries:
- Formik with Yup for managing form data
- Axios for communicating with the backend API
- Mobx for state management
- Bootstrap for the UI.

<br/>

| File or folder       | Description                                                            |
| -------------------- | ---------------------------------------------------------------------- |
| `src/index.js`       | The entry point for the application and where we setup global store.   |
| `src/api.js`         | Contains configurations for the Axios.                                 |
| `src/BookContext.js` | Provider component that provides global store.                         |
| `src/App.js`         | The main page of the application.                                      |
| `src/components`     | Contains all React components used in application.                     |
| `src/services`       | Contains functions used to communicate with the backend API.           |
| `src/stores`         | Contains the Mobx store classes.                                       |
| `src/styles`         | Contains CSS styles used for the application's components or globally. |
| `src/utils`          | Contains utility functions that are helpful across the application.    |
