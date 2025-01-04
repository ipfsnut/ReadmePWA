const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      backgroundColor: "#f4f4f9",
      color: "#333",
    },
    controls: {
      marginBottom: "20px",
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
    },
    searchInput: {
      padding: "8px",
      fontSize: "1rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
      flex: 1,
    },
    sortSelect: {
      padding: "8px",
      fontSize: "1rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
      flex: 1,
    },
    nftGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "20px",
      marginBottom: "20px",
    },
    nftCard: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      width: "100%",
    },
    imageContainer: {
      width: "150px",
      height: "150px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f0f0",
      borderRadius: "8px",
      overflow: "hidden",
    },
    coverImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      borderRadius: "8px",
    },
    title: {
      fontSize: "1.2rem",
      margin: "8px 0",
    },
    author: {
      fontSize: "0.9rem",
      color: "#666",
      margin: "4px 0",
    },
    descriptionLink: {
      background: "none",
      border: "none",
      color: "#007bff",
      cursor: "pointer",
      fontSize: "0.9rem",
      margin: "4px 0",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    tradeLink: {
      color: "#007bff",
      textDecoration: "none",
      fontSize: "0.9rem",
      margin: "4px 0",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    popupOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    ppopupContent: {
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "500px",
        width: "90%",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        maxHeight: "80vh", // Limit the height of the popup
        overflow: "hidden", // Ensure the content doesn't overflow
        display: "flex",
        flexDirection: "column",
      },
      scrollableDescription: {
        flex: 1, // Take up remaining space
        overflowY: "auto", // Enable vertical scrolling
        marginBottom: "16px", // Add some spacing
      },

    popupDescription: {
      fontSize: "1rem",
      color: "#333",
      margin: 0,
    },
    interactiveIframe: {
      width: "100%",
      height: "50vh",
      minHeight: "300px",
      border: "none",
      borderRadius: "8px",
      marginBottom: "16px",
    },
    expandButton: {
      background: "#28a745",
      border: "none",
      color: "#fff",
      padding: "8px 16px",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1rem",
      marginRight: "10px",
    },
    closeButton: {
      background: "#007bff",
      border: "none",
      color: "#fff",
      padding: "8px 16px",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1rem",
    },
    pagination: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      marginTop: "20px",
    },
  };
  
  export default styles;