import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsdfadfsafdsafdasos', {
        headers: {
            Authorization: ''

        },
        params: {
            query: term,
        }
    });

    
    console.log(response)
    return response.data.results;
};

export default searchImages;