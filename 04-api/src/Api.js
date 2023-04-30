import axios from 'axios';

const searchImages = async (subject) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization : 'Client-ID TwpKv6_ocAKtPVlPgtRwy11jpbqLqNT3Z3U3VFJXHsM'
        },

        params: {
            query:subject
        }
    });

    
    return response.data.results;
}

export default searchImages;