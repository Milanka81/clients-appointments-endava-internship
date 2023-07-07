# Clients-Appointments Application

## Getting Started

To run this project, follow the steps below:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` from the root directory.
3. Start the React app by running `npm start`.
4. Start the Express app by running `node app`.

## Technologies

This project is built using the following technologies:

- React
- React Router
- Redux
- Express

## Application Specification

### Home Page

The home page of the application allows the user to choose between viewing a list of clients and a list of appointments. By clicking on the "Clients" option, the user will be redirected to the client list page. By clicking on the "Appointments" option, the user will be redirected to the appointments list page.

### Client List Page

The client list page displays a table of clients. The table is sorted by ID as the default sort order, but the user can also sort the table by any field in ascending or descending order. The page also provides a button that allows the user to navigate to another page using React Router.

The client list page includes the following content:

- Name
- Surname
- Address
- Phone Number
- Email
- Save button
- Cancel button

The submit button is enabled only if all mandatory fields are filled. If the save request is successful, the user will be navigated back to the home page, and a success toast with the message "Success!" will be shown. If the save request fails, the user will remain on the same page, and an error toast with the message "Error!" should be displayed. Additionally, if the combination of name, surname, and email already exists, the save button will be disabled.

The user can perform the following actions on the client list page:

- Edit client details
- View client details
- Delete a client
- Search for clients by various criteria

### Appointments List Page

The appointments list page displays a table of appointments. The table is sorted by ID as the default sort order, but the user can also sort the table by any field in ascending or descending order. The page also provides a button that allows the user to navigate to another page using React Router.

The appointments list page includes the following content:

- Date
- Time
- Dropdown to select client: name, surname and email is shown as option


The submit button is enabled only if all mandatory fields are filled. If the save request is successful, the user will be navigated back to the home page, and a success toast with the message "Success!" will be shown. If the save request fails, the user will remain on the same page, and an error toast with the message "Error!" should be displayed. Additionally, if the combination of name, surname, and email already exists, the save button will be disabled.

The user can perform the following actions on the appointments list page:

- Edit appointment details
- View appointment details
- Delete an appointment



