# Blissful Booking App - Book your stand at Berlin's hippest flea markets

'Blissful Booking App' is a fictional booking app where users can book a stand to sell things at Berlin's hippest flea markets. Currently, users who want to book a stand at a Berlin flea market need to visit the registration office in person on a sunday morning! This could be a thing of the past with Blissful Booking App.

This site was made with React, Redux, Node, PSQL etc.

## Preview

### End User

![End user booking a stand](https://github.com/tobiasjeckel/blissful-booking-app/blob/master/gifs/user-booking.gif)

### Flea Market Admin

![Flea market admin using the admin panel](https://github.com/tobiasjeckel/blissful-booking-app/blob/master/gifs/admin-panel.gif)

## Features

### End User

-   Register to view available dates and locations and pick the stand you want
-   See an overview of available dates and stands - show only dates and stands that are available
-   Reserve your stand for Berlin's favorite flea markets from home
-   Instantly receive confirmation with information for your booked flea market stand
-   Log back in at a later time and get an overview of your bookings

### Flea Market Admin

-   Admin page for flea market manager that shows an overview of all bookings for selected dates
-   Manually change availability of stands
-   Export list of bookings to CSV file

## Future features and to-dos

-   Users receive confirmation E-Mail after booking
-   Export a calendar object on confirmation page
-   Chat with customer support
-   Payment route
-   Carousel with cool images on welcome page
-   Improve mobile responsiveness

## Tech

-   Backend
    -   Node, Express, PSQL, moment.js
-   Frontend
    -   React, React-Router, Redux
-   Preventing security vulnerabilities like Cross-Site Request Forgery (CSRF)
