const MOVIE_DATA = [
    {
        id: '1',
        name: 'The Shawshank Redemption',
        releaseYear: 1994,
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        fullDescr: "The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. It tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. Over the following two decades, he befriends a fellow prisoner, contraband smuggler Ellis 'Red' Redding (Morgan Freeman), and becomes instrumental in a money-laundering operation led by the prison warden Samuel Norton (Bob Gunton). William Sadler, Clancy Brown, Gil Bellows, and James Whitmore appear in supporting roles.",
        rating: 4.8,
        genre: 'drama',
        image: 'https://cdn.hipwallpaper.com/i/47/59/OjvikD.jpg'
    },
    {
        id: '2',
        name: 'The Dark Knight',
        releaseYear: 2008,
        description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        fullDescr: "The Dark Knight is a 2008 superhero film directed, produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins, starring Christian Bale and supported by Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and Morgan Freeman. In the film, Bruce Wayne / Batman (Bale), Police Lieutenant James Gordon (Oldman) and District Attorney Harvey Dent (Eckhart) form an alliance to dismantle organized crime in Gotham City, but are menaced by an anarchistic mastermind known as the Joker (Ledger), who seeks to undermine Batman's influence and throw the city into anarchy.",
        rating: 4.7,
        genre: 'action, crime, drama',
        image: 'https://wallpapercave.com/wp/wp2587950.jpg'
    },
    {
        id: '3',
        name: 'Lord of the Rings',
        releaseYear: 2004,
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        fullDescr: "The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the world at some distant time in the past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.",
        rating: 4.9,
        genre: 'adventure, drama, fantasy',
        image: 'https://wallpapermemory.com/uploads/438/the-lord-of-the-rings-the-fellowship-of-the-ring-background-full-hd-1920x1080-194664.jpg'
    }
]

const CATEGORY_DATA = [
    { 'id': '1', 'name': 'drama' },
    { 'id': '2', 'name': 'action' },
    { 'id': '3', 'name': 'adventure' },
    { 'id': '4', 'name': 'historical' },
    { 'id': '5', 'name': 'horror' },
    { 'id': '6', 'name': 'АНИМЕ' },
]


export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CATEGORY_DATA)
            reject("Cannot fetch categories!")
        })
    })
}

export const getMovies = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOVIE_DATA)
            reject("Cannot fetch movies!")
        }, 50)
    })
}

export const getMovieById = (id) => {
    return new Promise((resolve, reject) => {
        const movieIndex = MOVIE_DATA.findIndex((movie) => {
            return movie.id === id
        })
        const movie = MOVIE_DATA[movieIndex]
        setTimeout(() => resolve(movie), 50)
    })
}

export const createMovie = (movie) => {
    return new Promise((resolve, reject) => {

        movie.id = Math.random().toString(36).substr(2, 7)

        MOVIE_DATA.push(movie)
        setTimeout(() => {
            resolve(MOVIE_DATA)
        }, 50)
    })
}

