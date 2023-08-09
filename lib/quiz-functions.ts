import QUIZ from "../quiz.json"

// find sub-category data by name
export const getCategoryDataByName = (name: string) => {
    // console.log(name) last error counter : undefined
    return QUIZ.filter((item) => item.name === name)[0]
}

// find the index for question
export const getIndex = (quiz: any, current_category: string) => {
    return quiz.storage?.[current_category] ? quiz.storage[current_category].length : 0
}

// find & select subcategory
export const selectCurrentCategory = (quiz: any) => {
    return quiz.storage.select.filter((name: string) => quiz.storage[name]?.length !== getCategoryDataByName(name)?.question?.length)[0]
}

export const isCompleted2 = (quiz: any) => {
return quiz.storage.select.filter((category_name: string) =>quiz.storage[category_name]?.length !== QUIZ.filter((category_data) => category_data.name == category_name).at(0)?.question?.length).length == 0
}


const getQuiz = (quiz: any) => {
    // category selection
    const current_category = selectCurrentCategory(quiz)
    // index selection
    const index = getIndex(quiz, current_category)
    // find category relatad data
    const currentCategoryData: any = getCategoryDataByName(current_category)
// lenght of question 
    const quesionLen = currentCategoryData?.question?.length ?? 3

    return {
        quesionLen,
        isCompleted: isCompleted2(quiz),
        index,
        category_name: current_category,
        description : currentCategoryData?.description ?? 'description goes here',
        data: {
            question: currentCategoryData?.question?.at(index)?.name,
            options: currentCategoryData?.question?.at(index)?.options
        }
    }
}


export default getQuiz