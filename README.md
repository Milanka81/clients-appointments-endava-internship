# clients-appointments-endava-internship

# Clients-Appointments Application specification

* Home Page
    - User is able to choose between List of Clients and List of Appointments
    - clicking on clients redirects to client list page 
    - clicking on appointments redirects to appointments list page

* Lists of Clients and Appointments contains one table each.

    - tables are sorted by id as a default sort, but it can be sorted by all fields asc and desc
    - User can see the button on both lists which redirects to another page using React Router 

* User can Add client and appointment
    -Clients page content:
        - name, surname, address, phoneNumber, email, save and cancel buttons. 
    -Appointments page content:
        -date, time, search client by corresponding name and surname 

    - submit button is enabled if all mandatory fields are filled
    - if save request is successful, user is navigated to home page and successful toast 'Success!' is shown
    - if save request is not successful, user remains on the same page and error toast should be shown 'Error!'
    - if the same combination of name + surname + email exist, the save button is disabled
    User also can:
* Edit client and appointment
* View client and appointment
* Delete client and appointment
* Search clients and appointments
