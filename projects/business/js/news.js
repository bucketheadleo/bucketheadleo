    /* post navigation */
const articles = document.querySelectorAll('.post');
const articleContent = document.querySelectorAll('.post-text');
const readMore = document.querySelectorAll('.read-more');

const articleLink = document.querySelectorAll('.article-link');

for(let i = 0; i < articleLink.length; i++){
    articleLink[i].onclick = function(){
        selectpost(i);
    } 
};

for(let i = 0; i < readMore.length; i++){
    readMore[i].onclick = function(){
        selectpost(i);
    } 
};
function selectpost(index) {
    for(let index = 0; index < articles.length; index++){
        articles[index].style.display = "none";
    }
    for(let index = 0; index < articleLink.length; index++){
        articleLink[index].classList.remove('on');
    }
    articles[index].style.display = "block";
    readMore[index].style.display = "none";
    articleContent[index].classList.add('open');
    articleLink[index].classList.add('on');
}
