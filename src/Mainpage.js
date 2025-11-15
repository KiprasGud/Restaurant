import myImg from './restaurant.jpg'

function Mainpage(){
    let content = document.getElementById('content');
    content.innerHTML = "";

    let h1 = document.createElement('h1');
    h1.innerText = "The best restaurant you will want to eat!";
    h1.id = "headline";
    content.appendChild(h1);

    let img = document.createElement('img');
    img.src = myImg;
    img.alt = "restaurant";
    img.id = "restImg";
    content.appendChild(img);

    let p = document.createElement('p');
    p.innerText = "This is where you will eat, the best food you have ever eaten! \n " +
        "You should definitely come and try and if you don't like it moneyback guaranteed.";
    p.id = "paragraph";
    content.appendChild(p);
}

export default Mainpage;