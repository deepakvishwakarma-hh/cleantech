import useReport from "./useReportHook";

// Define TypeScript types
type Question = {
  name: string;
  answer: string;
  option: number;
};

type DataObject = {
  name: string;
  questions: Question[];
};

// Function to calculate ml value from questions with a fixed 1:10 ratio
function calculateMlFromObjects(objects: DataObject[]): number {
  let totalScore = 0;

  // Iterate through each object
  objects.forEach((object) => {
    // Calculate the total score for questions in the object
    object.questions.forEach((question) => {
      totalScore += question.option;
    });
  });

  // Calculate ml value based on the total score and fixed 1:10 ratio
  const mlValue = totalScore * 10; // Assuming 1:10 ratio

  return mlValue;
}
function calculateMlRequired(currentConcentrationMl: number): number {
  // Example usage
  const concentrationMl: number = 51; // Concentration of the concentrate in ml
  const desiredMl: number = 1.02; // Desired concentration after dilution in ml (1.02 ml per gallon)
  const volumeDesired: number = 2; // Desired volume of the diluted solution in ml
  const dilutionFactor: number = concentrationMl / desiredMl;

  // Calculate the required volume of the concentrated solution in ml
  const requiredMl: number = volumeDesired / dilutionFactor;

  return requiredMl;
}

export const useSuggestedProducts = () => {
  const reportData = useReport();
  const data = calculateMlFromObjects(reportData);
  const requiredMl = calculateMlRequired(4500);

  return { calculateMlFromObjects, Ml: data, requiredMl };
};
