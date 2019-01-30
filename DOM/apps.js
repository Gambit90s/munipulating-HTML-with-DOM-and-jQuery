//Objective 1

document.addEventListener("DOMContentLoaded", function () {
    let body = document.body; //question on why
    let button = document.createElement("button");
    let btnText = document.createTextNode("Click Me!");

    body.appendChild(button);
    button.appendChild(btnText);


    button.addEventListener("click", buttonClick);
    function buttonClick() {
        alert("This is a nice button");
    };


    //objective 2

    let enter = document.getElementById("button");

    enter.addEventListener('click', function () {
        let input = document.getElementById("message").value;
        alert(input);
    })

    //objective 3

    let div = document.createElement('div');
    div.style.backgroundColor = 'green';
    div.style.height = '5em';
    div.style.width = '5em';
    body.appendChild(div);

    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = 'blue';


    })

    div.addEventListener("mouseout", function () {

        div.style.backgroundColor = 'green';

    })

    //objective 4

    let p = document.createElement('p');
    let pText = document.createTextNode('LETS CLICK SOME TEXT!');
    p.appendChild(pText);
    body.appendChild(p);


    p.addEventListener('click', function () {

        let colors = '#';
        let letters = ['dc3545', '28a745', 'ofd7e14', '007bff'];
        colors += letters[Math.floor(Math.random() * letters.length)];
        p.style.color = colors;
    })

    //objective 5

    let div2 = document.createElement('div');
    let buttonTwo = document.createElement("button");
    let btnTextTwo = document.createTextNode("Push Me!");


    buttonTwo.appendChild(btnTextTwo);
    body.appendChild(buttonTwo);
    body.appendChild(div2);

    buttonTwo.addEventListener('click', function() {

        let span = document.createElement('span');
        let spanText = document.createTextNode('Chris Stillwell');

        span.appendChild(spanText);
        body.appendChild(span);



    })
    //objective 6
    let div3 =document.createElement('div');
    let buttonThree = document.createElement("button");
    let btnTextThree = document.createTextNode("Press to see my friends!");

    buttonThree.appendChild(btnTextThree);
    body.appendChild(buttonThree);
    body.appendChild(div3);

    let friends = [ 'Matt', 'Mark', 'Chris', 'Tom', 'Mike', 'Reg', 'Ronnie', 'Brosef'];

    buttonThree.addEventListener('click', function() {

        let list = document.createElement('ul');

        body.appendChild(list);

        for (let i = 0; i <friends.length; i++){
            let listItem = document.createElement('li');
            let listItemText = document.createTextNode(friends[i]);
            listItem.appendChild(listItemText);
            list.appendChild(listItem);
        }
    })

})
