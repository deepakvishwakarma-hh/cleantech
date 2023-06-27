export const saveUserDataToSession = async (
  field: string,
  value: number | string
) => {
  try {
    const response = await fetch("/api/survey/saveuserinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ field, value }),
    });

    if (response.ok) {
      console.log("User data saved successfully.");
      // Perform any additional actions or update UI as needed
    } else {
      console.error("Failed to save user data.");
      // Handle the error or show an error message to the user
    }
  } catch (error) {
    console.error("An error occurred while saving user data:", error);
    // Handle the error or show an error message to the user
  }
};
