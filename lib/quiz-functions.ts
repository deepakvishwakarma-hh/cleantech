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
    return quiz.storage.select.filter((name: string) => quiz.storage[name]?.length !== getCategoryDataByName(name)?.question?.length ?? 3)[0]
}

export const isCompleted = (quiz: any) => {
    return quiz.storage.select.filter((name: string) => quiz.storage[name]?.length !== getCategoryDataByName(name)?.question?.length ?? 3).length == 0
}


const getQuiz = (quiz: any) => {
    // category selection
    const current_category = selectCurrentCategory(quiz)
    // index selection
    const index = getIndex(quiz, current_category)
    // find category relatad data
    const currentCategoryData: any = getCategoryDataByName(current_category)

    const quesionLen = currentCategoryData?.question?.length ?? 3

    return {
        quesionLen,
        isCompleted: isCompleted(quiz),
        index,
        category_name: current_category,
        data: {
            question: currentCategoryData?.question?.at(index)?.name,
            options: currentCategoryData?.question?.at(index)?.options
        }
    }
}


export default getQuiz