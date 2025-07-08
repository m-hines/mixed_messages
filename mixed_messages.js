const mixedMessage = () => {
    let randomFrame = Math.floor(Math.random() * 10);
    let randomNounA = Math.floor(Math.random() * 10);
    let randomNounB = Math.floor(Math.random() * 10);
    let randomAdverb = Math.floor(Math.random() * 10);
    let randomVerb = Math.floor(Math.random() * 10);
    let randomGerund = Math.floor(Math.random() * 10);

    let nounAArray = ['apple', 'target', 'summer', 'book', 'number', 'frontal cortex', 'regret', 'most cherished hope', 'dream', 'child'];
    let nounBArray = ['virtue', 'operation', 'explosion', 'sister', 'fault', 'thought', 'dwelling', 'waxwing', 'teacher', 'mistress'];
    let adverbArray = ['cheaply', 'slowly', 'laughably', 'soundly', 'without a doubt', 'wisely', 'knowing what the future holds', 'lovingly', 'not noticing the butterfly on the back of his wrist', 'promptly'];
    let verbArray = ['laugh', 'sing', 'spin', 'be squished', 'operate machinery', 'calculate the motions of the stars', 'hack your data files', 'teach', 'drive', 'smoke'];
    let gerundArray = ['knowing', 'asking', 'seeing', 'flying', 'emptying', 'reading', 'selling', 'crashing', 'saving', 'running'];

    let nounA = nounAArray[randomNounA];
    let nounB = nounBArray[randomNounB];
    let adverb = adverbArray[randomAdverb];
    let verb = verbArray[randomVerb];
    let gerund = gerundArray[randomGerund];

    let frameArray = [`For now we see through a ${nounB}, ${adverb}; but then face to face`, `All ${nounA}s can ${verb}, all ${nounB}s are ${nounA}s, therefore all ${nounB}s can ${verb}.`, `To ${verb} is human.`, `Time is a ${nounA} of ${nounB}`, `The unexamined ${nounA} is not worth ${gerund}.`, `No one steps into the same ${nounB} ${adverb}.`, `To ${verb} or not to ${verb}, that is the ${nounB}.`, `There is no ${nounA} either good or bad but ${gerund} makes it so.`, `All ${nounA}s by nature desire to ${verb}.`, `A man's ${nounA} is his ${nounB}.`];
    let frame = frameArray[randomFrame];

    return frame;
}

console.log(mixedMessage());

