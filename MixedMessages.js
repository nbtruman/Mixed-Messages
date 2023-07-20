import { words } from "./resources/wordArrays.mjs";

const parameters = new words;
const horoscope = `Today, ${parameters.sign} will experience a surge of ${parameters.positiveTrait} energy. It's a great time to take on new challenges and be more ${parameters.positiveTrait}. However, be mindful of your tendency to be ${parameters.negativeTrait}, as it may lead to unnecessary conflicts. Embrace the positive aspects of your personality and work on transforming the negative ones. This will help you achieve harmony in both your personal and professional life.`;

console.log(horoscope);