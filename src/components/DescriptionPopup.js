import React from "react";
import cleanDescription from "../utils/cleanDescription";
import { lightTheme, darkTheme } from "../styles/styles"; // Update import

const DescriptionPopup = ({ description, interactiveUrl, onClose, theme }) => {
  const cleanedDescription = cleanDescription(description);
  const styles = theme === "dark" ? darkTheme : lightTheme; // Use the correct theme

  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popupContent}>
        {interactiveUrl && (
          <div style={styles.iframeContainer}>
            <iframe
              src={interactiveUrl}
              title="Interactive Content"
              style={styles.interactiveIframe}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        )}

        <div style={styles.descriptionContainer}>
          <p style={styles.popupDescription}>{cleanedDescription}</p>
        </div>

        <div style={styles.buttonContainer}>
          {interactiveUrl && (
            <button
              onClick={() => window.open(interactiveUrl, "_blank")}
              style={styles.expandButton}
            >
              Expand View
            </button>
          )}
          <button onClick={onClose} style={styles.closeButton}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPopup;