const cleanDescription = (description) => {
    if (!description) return "No description available.";
    return description
      .replace(/View on IPFS:\s*https?:\/\/[^\s]+/g, "")
      .trim();
  };
  
  export default cleanDescription;