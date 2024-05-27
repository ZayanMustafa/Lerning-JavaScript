    //  Greeding the user 
var userName = prompt("Enter your name")
alert(`Welcome to the coding world, ${userName}! 🌟 Get ready to turn your ideas into reality with JavaScript – you’ve got the potential to create something amazing! 🚀`);
userNameTop= userName.toUpperCase();

var text = `Hey ${userNameTop} ! 🌟
<br>
Ready to embark on an exciting coding adventure? Learning JavaScript might feel like juggling flaming torches while riding a unicycle, but trust me, it's all part of the <b>fun!</b> 🎪
<br>
JavaScript is like the Swiss Army knife of web development – versatile, powerful, and sometimes, a bit quirky. But here’s the best part: every coding guru started exactly where you are now, scratching their head over what in the world "this" is, and wondering why "undefined" keeps crashing the party. 🤔
<br>
Think of the web as your playground. With JavaScript, you can make websites dance, sing, and even talk back to you (just like a virtual ventriloquist). It's the <b>magic</b> behind turning static HTML and CSS into interactive masterpieces.
<br>
And hey, if you ever feel overwhelmed, just think of JavaScript as a <b>pizza</b>. 🍕 Even when it's a bit messy, it's still pretty awesome. Each new concept you master is like adding another delicious topping.
<br>
So, ${userNameTop} , keep <b>experimenting</b>, keep breaking things (it’s how you learn), and don’t forget to console.log your successes, no matter how small. You've got this!
<br>
Happy coding, ${userNameTop} , and may your code be ever <b>bug-free</b> (or at least easy to debug)!`

document.getElementById('paragraph').innerHTML = text


