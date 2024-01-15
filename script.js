const jokeElement = document.getElementById('joke');
const jokeButton = document.getElementById('joke-btn');

const generateJoke = () => {
    const xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function() {
        if(this.readyState===4)
        {
            if(this.status===200){
                jokeElement.innerHTML = JSON.parse(this.responseText).value;
            }
            else{
                jokeElement.innerHTML="Something went wrong";
            }
        }
    };
    xhr.send();
};

jokeButton.addEventListener('click', generateJoke); // jokeButton generates joke on click
document.addEventListener('DOMContentLoaded',generateJoke); // To display the joke when the DOM is loaded