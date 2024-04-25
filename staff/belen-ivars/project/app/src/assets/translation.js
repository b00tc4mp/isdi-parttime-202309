export const dietTranslations = { 'glutenfree': 'glutenfree', 'vegan': 'vegà', 'vegetarian': 'vegetarià' }
export const complexityTranslations = { 'easy': 'fàcil', 'regular': 'regular', 'complex': 'complexe' }
export const methodTranslations = { 'steamed': 'al vapor', 'oven': 'forn', 'microwave': 'microones', 'grill': 'planxa', 'fresh': 'fresc', 'cook': 'cuit' }

export const getEnglishKey = (translationsList, stringToTranslate) => {
	for (let key in translationsList) {
		if (translationsList[key] === stringToTranslate) return key
	}
	throw new Error('no translation')
}