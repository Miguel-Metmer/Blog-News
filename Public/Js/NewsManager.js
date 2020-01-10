class NewsManager
{
    constructor()
    {
        this.news = [];
        this.Title = document.querySelector("#News .article h1");
        this.Image = document.querySelector("#News .article img");
        this.Text = document.querySelector("#News .article p");
        
        this.articleBox = [];
        this.titleChild = [];
        this.imageChild = [];
        this.contentChild = [];

    }

    getNews()
    {
        fetch('https://newsapi.org/v2/top-headlines?' +'country=' + 'fr' + '&' + 'apiKey=a727be71caab4420b0862dad9c71c661')
        .then( (response) => {
            return response.json();
        })
        .then ((data) => {
            this.stockData(data);
            return data;
        })
        .then ( (data) => {
            this.showNews();
        })
        .catch ( (err) => {
            console.log(err);
        })
    }


    stockData(data)
    {
        for(let i = 0; i < data.totalResults; i++)
        {
            this.news.push(data.articles[i]);
        }
    }

    showNews()
    {
        for (let i = 0; i < this.news.length; i++) 
        {
            this.articleBox[i] = document.createElement("div");
            this.titleChild[i] = document.createElement("h1");
            this.imageChild[i] = document.createElement("img");
            this.contentChild[i] = document.createElement("p");

            this.titleChild[i].innerHTML = "<a href=" + this.news[i].url + ">" + this.news[i].title + "</a>";
            
            this.imageChild[i].setAttribute("src", this.news[i].urlToImage);
            this.imageChild[i].setAttribute("alt", "Absence d'image");
            
            if (this.news[i].description == "") 
            {
                this.contentChild[i].innerHTML = '<h2>' + 'Pas de description disponible' + '</h2>';
            }
            else
            {
                this.contentChild[i].innerHTML =  '<i>' + this.news[i].description + '</i>';
            }

            document.querySelector("#News #Article_Box").appendChild(this.articleBox[i]);
            this.articleBox[i].setAttribute("class", "article");
            this.articleBox[i].appendChild(this.titleChild[i]);
            this.articleBox[i].appendChild(this.imageChild[i]);
            this.articleBox[i].appendChild(this.contentChild[i]);
        }
    }

}

let news = new NewsManager();
news.getNews();


