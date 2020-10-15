import axios from "axios";

const KEY = "57340e2d4db54811ae4632ba017cbca0"; 

export default axios.create({
    baseURL: "https://api.spoonacular.com/recipes/random?number=1&apiKey=" + KEY,
 
})