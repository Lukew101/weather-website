export function cutConditionText(conditionText){
    const numberOfWords = conditionText.split(' ');
    if(numberOfWords.length <= 2){
        return conditionText;
    }
    const lastTwoWords = numberOfWords.slice(-2);
    const capitalized = lastTwoWords.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalized.join(' ');
}