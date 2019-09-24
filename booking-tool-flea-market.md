# Flea Market - Reserve your Stand

![img](http://www.flohmarktimmauerpark.de/images/galerie/Mau_4188_141019.jpg)

### Main Hook

-   Reserve your stand for Berlin's favorite Flea markets from Home
-   View available Dates and locations and pick the stand you want
-   Instantly receive confirmation for your booked Flea Market Stand

### Features

#### Must-Have

-   Registration and Login for Users
-   Admin page for Flea market manager that can manually change availability of stands
-   Overview of available dates, show only dates that are available
-   Overview of available stands, show only stands that are available
-   Select Stand that is available and submit booking
-   Show confirmation page for reserved stand with all necessary data
-   My bookings page with overview of my bookings

#### Optional / Bonus

-   Confirmation E-Mail
-   Export a calendar object on confirmation page
-   Payment route (sandbox)
-   Chat with customer support
-   Carousel with cool images on welcome page

### Technologies

-   Backend
    -   Node, Express, PSQL
-   Frontend
    -   React, React-Router
-   socket.io (only for bonus chat feature)

### Ideas for Look and Feel

![Desktop-BookingView.png](https://github.com/julia-/room-booking-system/blob/master/docs/Desktop-BookingView.png?raw=true)

<https://www.springshare.com/libcal/>

## Bugs and todo

-   [ ] error message when something goes wrong
-   [ ] error message when loading bookings page
-   [ ] update bookings database with primary_id to make sure no double bookings exist
-   [ ] admin panel only visible for admin
