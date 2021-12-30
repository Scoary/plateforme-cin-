const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e382174105d47c23079862bf029ef046',
    language: 'fr',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;