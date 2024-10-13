const url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const header = {headers: { Accept: "application/json"}};
        let res = await axios.get(url, header);
        console.log(res.data);
        
    } catch (error) {
        console.log(error);
        
    }
}