# ReadmePWA

## Readme Books PWA
A Progressive Web App (PWA) for browsing and sharing books. This app fetches book metadata from a JSON file, caches it locally, and allows users to search, sort, and share books. It also supports dark mode and offline functionality.

## Features
Book Browsing: View a grid of books with cover images, titles, authors, and descriptions.

Search and Sort: Search books by title or author, and sort by token ID, name, or author.

Dark Mode: Toggle between light and dark themes.

Social Sharing (in progress): Share individual books on social media with unique URLs.

Offline Support: Books and assets are cached for offline use.

Responsive Design: Works seamlessly on desktop and mobile devices.

## Technologies Used
React: Front-end library for building the user interface.

React Router: For handling routing and deep linking.

PWA: Progressive Web App features for offline support and caching.

IndexedDB: For local storage of book metadata.

Service Worker: For caching static assets and enabling offline functionality.

CSS-in-JS: For dynamic theming (light and dark modes).

Web Share API: For social media sharing.


## Browsing Books
The home page displays a grid of books.

Use the search bar to filter books by title or author.

Sort books by token ID, name, or author using the dropdown menus.

## Viewing Book Details
Click on a book to open its description popup.

The popup includes the book's cover image, title, author, and description.

## Sharing Books (in progress)
Click the "Share" button on a book card to generate a unique URL.

Share the URL on social media or copy it to the clipboard.

## Dark Mode
Toggle dark mode using the button in the top-right corner.

## Offline Mode
The app caches book metadata and static assets for offline use.

If you lose internet connectivity, you can still browse previously loaded books.

## Contributing
Contributions are welcome! Follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/your-feature).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/your-feature).

Open a pull request.

## License
This project is licensed under the cc0 License. See the LICENSE file for details.

## Acknowledgments
Thanks to PageDAO for providing the book metadata.

Inspired by modern PWAs and React best practices.



