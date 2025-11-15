function About() {
    let content = document.getElementById("content");
    content.innerHTML = "";
    let div = document.createElement('div');
    div.id = "aboutpage";
    let h1 = document.createElement("h1");
    h1.innerText = "About us";
    let h2 = document.createElement("h2");
    h2.innerText = "Welcome to The Bistro – Where Flavor Meets Comfort";
    let p = document.createElement("p");
    p.innerText = 'At The Bistro, we believe in the simple pleasure of great food shared with good company. Our mission is to create a dining experience that feels like home — warm, inviting, and always delicious. Whether you\'re here for a casual meal with friends or celebrating a special occasion, we aim to make every visit memorable.\n' +
        '\n' +
        'Our menu features a blend of classic comfort foods and contemporary dishes, all crafted with fresh, locally sourced ingredients. From sizzling steaks and grilled seafood to vibrant vegetarian options and wood-fired pizzas, there\'s something for everyone to enjoy. Every dish is prepared with care and passion, designed to bring out the best in every bite.\n' +
        '\n' +
        'Our team is dedicated to providing top-notch service in a relaxed, friendly atmosphere. Whether you’re enjoying a glass of wine with dinner or grabbing a quick bite, we want you to feel right at home.\n' +
        '\n' +
        'Thank you for choosing The Bistro. We look forward to serving you soon and sharing the joy of good food with you!';
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(p);
    content.appendChild(div);
}

export default About;