import { NextApiRequest, NextApiResponse } from 'next';

interface SurveyData {
    question: string;
    answer: string;
    // Add other properties as needed
}

const surveyInfoHandler = (req: NextApiRequest, res: NextApiResponse<SurveyData>) => {
    const { question } = req.query;
    // Perform any necessary operations to fetch the survey information based on the question
    // For this example, let's assume we have a hardcoded set of survey data
    const surveyData: SurveyData = {
        question: question as string,
        answer: 'Sample Answer',
        // Set other properties accordingly
    };

    // Return the survey data as the response
    res.status(200).json(surveyData);
};

export default surveyInfoHandler;