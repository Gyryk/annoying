const randint = (num) =>
{
    return Math.floor(Math.random() * num);
};

function myfunc()
{
    heightOffset = 150
    widthOffset = 200

    let phrases = ['Click on Me!', 'Over Here!', 'Come on now!', 'Stop Playing!', 'What are you doing!', 'OVER HERE!',
        'Nope not there!', "I'm getting tired!", "I can't do this all day", "Where are you", "It's so easy",
        "FFS DO IT ALREADY", "GET OVER HERE", "Wow you are bad "]

    document.getElementById('annoy').innerHTML = phrases[randint(phrases.length)]

    num1 = randint(Math.floor(window.innerHeight - heightOffset))
    num2 = randint(Math.floor(window.innerWidth - widthOffset))

    if(num1<heightOffset) num1 = heightOffset
    if(num2<widthOffset) num2 = widthOffset

    const top = (num1).toString()+'px';
    const left = (num2).toString()+'px';

    document.getElementById('annoy').style.position = 'absolute'
    document.getElementById('annoy').style.top = top;
    document.getElementById('annoy').style.left = left;
}

function clickfunc()
{
    alert("Wow how did you even do that? You're definitely a wizard. Time to brag!")
}