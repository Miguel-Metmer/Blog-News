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
        this.dateChild = [];
        this.contentChild = [];

        this.icon = document.getElementById("Icon");
        this.actualité = document.getElementById("Actualité");
        this.sport = document.getElementById("Sport");
        this.divertissement = document.getElementById("Divertissement");
        this.santé = document.getElementById("Santé");
        this.science = document.getElementById("Science");
        this.technologie = document.getElementById("Technologie");

    }

    getNews(url)
    {
        fetch(url)
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
            this.dateChild[i] = document.createElement("h2");
            this.contentChild[i] = document.createElement("p");

            this.titleChild[i].innerHTML = "<a href=" + this.news[i].url + ">" + this.news[i].title + "</a>";
            this.dateChild[i].innerHTML = "Date de publication : " + this.news[i].publishedAt;
            
            if(this.news[i].urlToImage == null)
            {
                this.imageChild[i].setAttribute("src", "Public/Image/News.png");
            }
            else
            {
                this.imageChild[i].setAttribute("src", this.news[i].urlToImage);
                this.imageChild[i].setAttribute("alt", "Absence d'image");
            }

            if (this.news[i].description == "" || this.news[i].description == null) 
            {
                this.contentChild[i].innerHTML = '<h2>' + 'Pas de description disponible' + '</h2>';
            }
            else
            {
                this.contentChild[i].innerHTML =  this.news[i].description;
            }

            document.querySelector("#News #Article_Box").appendChild(this.articleBox[i]);
            this.articleBox[i].setAttribute("class", "article");
            this.articleBox[i].appendChild(this.titleChild[i]);
            this.articleBox[i].appendChild(this.imageChild[i]);
            this.articleBox[i].appendChild(this.contentChild[i]);
            this.articleBox[i].appendChild(this.dateChild[i]);
        }
    }

    localStorage()
    {
        this.icon.addEventListener("click", () => {
            localStorage.removeItem("category");
        })
        this.actualité.addEventListener("click", () => {
            localStorage.removeItem("category");
            
        })
        this.sport.addEventListener("click", () => {
            localStorage.setItem("category", "sports");
        })
        this.divertissement.addEventListener("click", () => {
            localStorage.setItem("category", "entertainment");
        })
        this.santé.addEventListener("click", () => {
            localStorage.setItem("category", "health");
        })
        this.science.addEventListener("click", () => {
            localStorage.setItem("category", "science");
        })
        this.technologie.addEventListener("click", () => {
            localStorage.setItem("category", "technology");   
        })
    }
}

let news = new NewsManager();
news.localStorage();

if(localStorage.getItem("category") == null)
{
    news.getNews('https://newsapi.org/v2/top-headlines?country=fr&apiKey=a727be71caab4420b0862dad9c71c661');
}
else
{
    news.getNews('https://newsapi.org/v2/top-headlines?country=fr&category=' + localStorage.getItem("category") + '&apiKey=a727be71caab4420b0862dad9c71c661');
}



