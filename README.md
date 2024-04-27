State Initialization:
The initial state includes fields for name, email, and password.
The formReducer function manages state updates based on action types (SET_FIELD and RESET).

Input Fields:
Input fields for name, email, and password allow users to express their data.
The handleChange function captures input changes and updates the corresponding state values.

Form Submission and Reset:
The handleSubmit function prevents default form behavior and signals successful submission.
The “Reset” button invokes the RESET action, restoring the form to its initial state.

Conditional Rendering:
Based on the flag state, the application displays either user-entered details or a message indicating no data found.

Component Structure:
The code adheres to React best practices, utilizing hooks for efficient state management.
