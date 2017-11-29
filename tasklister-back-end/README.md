Hey folks, just some more guidance for the project:

A good roadmap of building an application like TaskLister is this (of course, take the route that makes sense to your team):
<!--
Build backend (migrations, seeds, routes, controller actions rendering JSON)

Test backend (send requests to routes from Postman and get back JSON) -->

<!-- Enable `rack-cors` (look up documentation and add to your Rails project) -->

Build front-end adapters (methods that `fetch` information from your API routes)

Build out HTML templates for all of your resources (e.g., what’s the structure of a list/task? what classes/ids should each list/task have? what do list/task forms look like on
my page? what elements does a user interact with on my page?)

Connect event handlers to HTML elements using `element.addEventListener`

Remember to test at every step of the way!
