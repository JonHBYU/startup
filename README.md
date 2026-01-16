# Miradoc

[My Notes](notes.md)

A simple application that allows writing text documents and submitting them, as well as reading and (crucially) liking other's documents.

> [!NOTE]
> This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

## 🚀 Specification Deliverable

> [!NOTE]
> Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] Proper use of Markdown
- [X] A concise and compelling elevator pitch
- [X] Description of key features
- [X] Description of how you will use each technology
- [X] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Miradoc uses a minimalist design to quickly allow anyone to submit text documents to the internet, whether that's recipes, novels, essays, or anything else. Simply put in a username and password (no email required) and begin writing or reading documents in literal seconds. You can also like your favorites, and see what is liked by others!

### Design

![Signup Page](Sketchups/SignupPage.png)
![Login Page](Sketchups/LoginPage.png)
![Trending Page](Sketchups/TrendingPage.png)
![Search Page](Sketchups/SearchPage.png)
![Reader Page](Sketchups/ReaderPage.png)
![Liked Documents Page](Sketchups/LikedDocumentsPage.png)
![My Documents Page](Sketchups/MyDocumentsPage.png)
![Writer Page](Sketchups/WriterPage.png)

The user will start at the sign up page, and will be able to go to the login page for if they already have an account. From there, they will be brought to the "trending" page, from which they can click documents to read them, search (search page), logout (returned to login page), or go to my documents or liked pages. From document page, they can create a new document, putting them on the writer page.

```mermaid
sequenceDiagram
    actor You
    actor Alice
    actor Bob
    You->>Server: Liked Bob's work
    Server -->You: Bob's work likes +1
    Server -->Alice: Bob's work likes +1
    Server -->Bob: Bob's work likes +1
```

### Key features

- Email-free signup
- Search for other authors quickly
- Keep track of and quickly add new documents to your collection with a dedicated page

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - HTML will be used extensively to define the elements of the website and more general layout
- **CSS** - CSS will be used to define text sizes/types across pages, as well as other common constants (element sizes, spacing between elements), improving consistency and convenience
- **React** - React will be used for navigating between different pages easily, such as login/signup pages
- **Service** 
    - AWS web services will be used to request documents and other information
    - Looking at using purgomalum API to check uploaded documents and make sure there's no profanity
- **DB/Login** - A Database will be used to store the saved documents and their owners, as well as login info
- **WebSocket** - Websocket will be used to allow users to see updated likes in realtime

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Visually appealing colors and layout. No overflowing elements.** - I did not complete this part of the deliverable.
- [ ] **Use of a CSS framework** - I did not complete this part of the deliverable.
- [ ] **All visual elements styled using CSS** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing using flexbox and/or grid display** - I did not complete this part of the deliverable.
- [ ] **Use of a imported font** - I did not complete this part of the deliverable.
- [ ] **Use of different types of selectors including element, class, ID, and pseudo selectors** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
