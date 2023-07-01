import axios from "axios";

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID aZG-8jdUbhvVg1JsvgUckl9AQb9BuMpZoUwzqXifISo'
        },
        params: {
            query: 'emotions'
        }
    });

    return response.data.results;
};

export default searchImages;