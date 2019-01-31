
//Objective 1
$(document).ready(function () {

    let body = $('body');
    let button = $('<button> A Button</button>');
    button.appendTo(body);

    button.click(function () {
        alert('You Clicked Me!');
    })

    //Objective 2

    $('button').click(function () {
        let input = $('#message').val();
        alert(input);
    })

    //Objective 3

    let div = $('<div></div>');
    $(div).css({ 'background-color': 'green', 'height': '5em', 'width': '5em' });
    div.appendTo(body);

    div.mouseover(function () {
        $(div).css({ 'background-color': 'blue', 'height': '5em', 'width': '5em' });

    })
    div.mouseout(function () {
        $(div).css({ 'background-color': 'green', 'height': '5em', 'width': '5em' });


    })

    //Objective 4

    let p = $('<p>This is not the color text your looking for, so click me!</p>');
    p.appendTo(body);

    p.click(function () {
        let letters = ['#dc3545', '#28a745', '#ofd7e14', '#007bff'];
        let rand = letters[Math.floor(Math.random() * letters.length)];
        $('p').css('color', rand);
    })

    //Objective 5
    let div2 = $('<div></div>');
    let buttonTwo = $('<button> Another Button</button>');
    buttonTwo.appendTo(body);
    div2.appendTo(body);

    buttonTwo.click(function () {
        let span = $('<span>Chris Stillwell</span>');
        span.appendTo(div2);


    })

    //Objective 6

    let div3 = $('<div></div>');
    let buttonThree = $('<button> Really Another Button</button>');
    buttonThree.appendTo(body);
    div3.appendTo(body);

    let friends = [ 'Matt', 'Mark', 'Chris', 'Tom', 'Mike', 'Reg', 'Ronnie', 'Brosef'];

    buttonThree.click(function () {
        let list = $('<ul>Who invited those guys?</ul>');
        list.appendTo(div3);

        for(let i=0; i<friends.length; i++){
            let listItems = $('<li>' + friends[i] + '</li>');

            listItems.appendTo(list);

        }
    })
});






