var quote = [
    
    " The only way to do great work is to love what you do.- Steve Jobs",
    " Life is what happens when you're busy making other plan- John Lennon",
    " Get busy living or get busy dying.  - Stephen King",
    " You have within you right now, everything you need to deal with whatever the world can throw at you.  - Brian Tracy",
    " Believe you can and you're halfway there. - Theodore Roosevelt",
    " The purpose of our lives is to be happy. - Dalai Lama",
    " Success is not final, failure is not fatal: it is the courage to continue that counts.  - Winston Churchill",
    " Your time is limited, don't waste it living someone else's life.  - Steve Jobs",
    " Life is short, and it is up to you to make it sweet. - Sarah Louise Delany" ,
    " You only live once, but if you do it right, once is enough. - Mae West",
    "Believe you can and you're halfway there.- Theodore Roosevelt" ,
    "The only limit to our realization of tomorrow will be our doubts of today.- Franklin D. Roosevelt" ,
    "The future belongs to those who believe in the beauty of their dreams.  - Eleanor Roosevelt",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "You are never too old to set another goal or to dream a new dream.  - C.S. Lewis",
    "Dream big and dare to fail.  - Norman Vaughan",
    "In the middle of difficulty lies opportunity.  - Albert Einstein",
    "The journey of a thousand miles begins with one step. - Lao Tzu " 
]
    console.log(quote)
// var display = document.getElementsById('button')
// display.addEventListener('click', function() {
    //   alert('Button clicked!');
    // });
    
    var display = document.getElementById('button');
    display.addEventListener('click', function() {
        this.style.backgroundColor = "white";
        this.style.color = "black";
        this.style.fontSize = "95px";
        var hasan = quote[Math.floor(Math.random() * 18)];
        console.log(hasan)
        display .innerText = hasan;
        clearAll();
        // alert("Hasaaaan! Chal raha heay")
    } )