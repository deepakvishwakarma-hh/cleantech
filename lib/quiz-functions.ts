import quiz from "../quiz.json"

// find sub-category data by name
export const getCategoryDataByName = (name: string) => {
    // console.log(name) last error counter : undefined
    return quiz.filter((item) => item.name === name)[0]
}

// find the index for question
export const getIndex = (quiz: any, current_category: string) => {
    return quiz.storage?.[current_category] ? quiz.storage[current_category].length : 0
}

// find & select subcategory
export const selectCurrentCategory = (quiz: any) => {
    return quiz.storage.select.filter((name: string) => quiz.storage[name]?.length !== 3)[0]
}

export const isCompleted = (quiz: any) => {
    return quiz.storage.select.filter((name: string) => quiz.storage[name]?.length !== 3).length == 0
}


const getQuiz = (quiz: any) => {
    // category selection
    const current_category = selectCurrentCategory(quiz)
    // index selection
    const question_index = getIndex(quiz, current_category)
    // find category relatad data
    const currentCategoryData = getCategoryDataByName(current_category)

    return {
        isCompleted: isCompleted(quiz),
        index: question_index,
        category_name: current_category,
        data: {
            question: currentCategoryData?.question[question_index].name,
            options: currentCategoryData?.question[question_index].options
        }
    }
}


export default getQuiz