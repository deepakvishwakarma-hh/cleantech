import { NextApiRequest, NextApiResponse } from 'next';

interface SurveyData {
    question: string;
    answer: any;
    // Add other properties as needed
}

const surveyInfoHandler = (req: NextApiRequest, res: NextApiResponse<any>) => {
    const { question } = req.query;
    res.status(200).json(data[question as string]);
};

export default surveyInfoHandler;


// testing data 
const data: any = {
    'welcome-quiz': {
        question: {
            next: 'get-name',
            previous: null
        }
    },
    'get-name': {
        question: {
            next: 'welcome-user',
            previous: 'welcome-quiz'
        }
    },
    'welcome-user': {
        question: {
            next: 'get-email',
            previous: 'get-name'
        }
    },
    'get-email': {
        question: {
            next: 'get-age',
            previous: 'get-name'
        }
    },
    'get-age': {
        question: {
            next: null,
            previous: 'get-email'
        }
    }
}