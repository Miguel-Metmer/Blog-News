class NewsManager
{
    constructor()
    {
        this.news = [];
        this.Title = document.querySelector("#News .article h1");
        this.Image = document.querySelector("#News .article img");
        this.Text = document.querySelector("#News .article p");
    }

    getNews(url)
    {
        let request = new Request(url);
        fetch(request)
            .then( (response) => {
                response.json()
                    .then( (text) => {
                        this.showNews(text);
                    })
            })
            .catch( (err) => {
                console.log(err);
            })
    }

    showNews(data)
    {
        for(let i = 0; i < data.totalResults; i++)
        {
            this.news.push(data.articles[i]);
        }

        let articleBox = [];
        let titleChild = [];
        let imageChild = [];
        let contentChild = [];

        for (let i = 0; i < this.news.length; i++) 
        {
            articleBox[i] = document.createElement("div");
            titleChild[i] = document.createElement("h1");
            imageChild[i] = document.createElement("img");
            contentChild[i] = document.createElement("p");

            titleChild[i].innerHTML = "<a href=" + this.news[i].url + ">" + this.news[i].title + "</a>";
            imageChild[i].setAttribute("src", this.news[i].urlToImage);
            imageChild[i].setAttribute("alt", "Absence d'image");
            contentChild[i].innerHTML = this.news[i].content;

            document.querySelector("#News #Article_Box").appendChild(articleBox[i]);
            articleBox[i].setAttribute("class", "article");
            articleBox[i].appendChild(titleChild[i]);
            articleBox[i].appendChild(imageChild[i]);
            articleBox[i].appendChild(contentChild[i]);
        }
    }

}

let news = new NewsManager();
news.getNews('https://newsapi.org/v2/top-headlines?' +'country=fr&' + 'apiKey=a727be71caab4420b0862dad9c71c661');
