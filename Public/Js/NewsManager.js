class NewsManager
{
    constructor()
    {
        this.news = [];
    }

    getNews(url)
    {
        let request = new Request(url);
        fetch(request)
            .then( (response) => {
                response.json()
                    .then( (text) => {
                        this.show(text);
                    })
            })
            .catch( (err) => {
                console.log(err);
            })
    }

    show(data)
    {
        for(let i = 0; i < data.totalResults; i++)
        {
            this.news[i] = data.articles[i];
        }

        console.log(this.news[19]);
    }

}

let news = new NewsManager();
news.getNews("https://newsapi.org/v2/top-headlines?country=fr&apiKey=a727be71caab4420b0862dad9c71c661")

   
