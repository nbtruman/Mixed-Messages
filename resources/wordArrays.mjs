// Arrays for zodiac signs and traits
const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];
  
const positiveTraits = [
    "creative", "ambitious", "adventurous", "passionate", "insightful",
    "charismatic", "optimistic", "generous", "loyal", "wise"
];
  
const negativeTraits = [
    "impatient", "stubborn", "indecisive", "self-centered", "pessimistic",
    "reckless", "demanding", "aloof", "moody", "overcritical"
];

export class words{
    constructor(){
        this.sign = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
        this.positiveTrait = positiveTraits[Math.floor(Math.random() * positiveTraits.length)];
        this.negativeTrait = negativeTraits[Math.floor(Math.random() * negativeTraits.length)];
    }
}
