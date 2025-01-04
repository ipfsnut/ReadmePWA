export function register() {
  if ("serviceWorker" in navigator) {
    // Register the Service Worker immediately (no need to wait for the 'load' event)
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("Service Worker registered: ", registration);

        // Check for updates to the Service Worker
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker) {
            installingWorker.onstatechange = () => {
              if (installingWorker.state === "installed") {
                if (navigator.serviceWorker.controller) {
                  // New Service Worker is available
                  console.log("New Service Worker available. Please refresh the page.");
                  // Optionally, prompt the user to refresh the page
                  if (window.confirm("A new version of the app is available. Refresh to update?")) {
                    window.location.reload();
                  }
                } else {
                  // Service Worker is installed for the first time
                  console.log("Service Worker installed for the first time.");
                }
              }
            };
          }
        };
      })
      .catch((error) => {
        console.error("Service Worker registration failed: ", error);
      });
  }
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister().then((unregistered) => {
        if (unregistered) {
          console.log("Service Worker unregistered.");
        }
      });
    });
  }
}