# Hotel-Website
Technology used : bootstrap, nodejs, express, mongodb. It is a website where client can book table online , order food online,book a room and give feedback and admin can manage status of room, table and can view feedbacks.
# Server Installation Guide

## Install Node.js

Go to https://nodejs.org and install v7.0.0 for your operating system.

## Install MongoDB

Go to https://www.mongodb.com/download-center?jmp=hero#community and install v3.2.10 for your operating system. Windows 7 64 bit or later users should install the file for Windows Server 2008 R2 64 bit and later, with SSL support.

## Clone this repository

Make a git folder somewhere on your computer and clone this repository over to it. There are many ways to do this. I installed GitBash, but there are some GUI clients that will work as well.

Check out this Git/GitHub [tutorial](https://www.youtube.com/watch?v=vR-y_2zWrIE&index=1&list=PLWKjhJtqVAbkFiqHnNaxpOPhh9tSWMXIF).

## Install Dependencies

Once you have cloned the repository, you should have a hotel-reservation-project folder somewhere. Navigate to this folder via the command line. For example, if your folder is located here C:\git\hotel-reservation-project, you could type cd C:\git\hotel-reservation-project to get there. Alternively, Windows users could navigate via the file explorer to the folder, shift-right-click on it, and select open command window here.

Once you're there enter <b>npm install</b> to get all of the dependencies.

## Start Nodejs Server
___
NOTE: Before starting the server, make sure <b>mongod</b> is running in the background. Navigate to the mongo installation directory and run mongod.exe. 
___
To start the server, enter <b>node server</b> into the command window while in the project directory. It should say Server running on port 3000. If you visit localhost:3000 from your browser and the site comes up, everything is good to go. Terminate the command to stop the server.
### Table of Contents 

1. [About](#about)
2. [Client View](#guest)
3. [Manager/Admin View](#manager)
4. [Demo](#demo)
5. [Database view](#dbview)

<a name="about"></a>
### About
Allows customers to book a room, reserve a table at the hotel's restaurant, and give feedback and can also order food online. Allows managers/admin to view room availability, current guests, checkin and checkout guests, and restaurant table reservations.
<br>
<br>
<img src="https://github.com/nikita-mirchandani/Hotel-Website/blob/main/images/about.jpeg"
width="800px">
<br>
<br>

<a name="guest"></a>
### Client View
Booking a room:<br>
<img src="https://github.com/nikita-mirchandani/Hotel-Website/blob/main/images/book%20room.jpeg" width="800px">

User can reserve a table at the restaurant:<br>
<img src="https://github.com/nikita-mirchandani/Hotel-Website/blob/main/images/table.jpeg" width="800px">

User can also order food online:<br>
<img src="https://github.com/nikita-mirchandani/Hotel-Website/blob/main/images/menu.jpeg" width="800px">

Contact Page:<br>
<img src="https://github.com/nikita-mirchandani/Hotel-Website/blob/main/images/contactus.jpeg" width="800px">

They can also give feedbacks:<br>
<img src="https://github.com/nikita-mirchandani/Hotel-Website/blob/main/images/feedback.jpeg" width="800px">

<a name="manager"></a>
### Manager View
The manager view is hidden from the main view. The Manager Portal route is: `/admin`
<br>
Managers need to be signed up to login. Mangers can view room availability, table availability and check in and check out guests, and view current reservations at the restaurant and also see feedbacks.<br>
<img src="https://github.com/nikita-mirchandani/Hotel-Website/blob/main/images/adminform.jpeg" width="800px"><br><br>
An admin account has already been created on the demo:
<br>Email: admin
<br>Password: admin
<br><br>
<b>Manager Menu<b>
<br>
<img src="https://github.com/nikita-mirchandani/Hotel-Website/blob/main/images/managermenu.jpeg" width="800px"><br><br>

<b>View Rooms<b>
<br>
<img src="https://github.com/nikita-mirchandani/Hotel-Website/blob/main/images/viewrooms.jpeg" width="800px"><br><br>

  
<b>Room status<b>
<br>
<img src="https://github.com/nikita-mirchandani/Hotel-Website/blob/main/images/roomstatus.jpeg" width="800px"><br><br>

 
<b>Feedback details<b>
<br>
<img src="https://github.com/nikita-mirchandani/Hotel-Website/blob/main/images/feedbackdetails.jpeg" width="800px"><br><br>

<a name="dbview"></a>
### Database view
<img src="https://user-images.githubusercontent.com/82458994/160231452-4f3ea244-0ef7-4713-acb3-193dc5b7e19e.png" width="800">

<a name="demo"></a>
### Demo
<ins>hosting soon....</ins>
<br>
### Manager Portal: 
<ins>hosting soon....</ins>
<br> 
<br> 

Spreadsheet Link :
https://1drv.ms/x/s!AjdqqwqCxhGHhMoywgzAVCHzesGZpw?e=1pkzSd 

