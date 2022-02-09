//my first project in github!!!
// the empty array
const sath = []
// nested arrays for each girl plus the quotes

sath[0] = ["Samantha",
"A guy gets angry in a meeting, he’s a pistol. A woman, she’s emotional.",
"I love you, but I love me more.",
"I’m sick of people with children, they’re everywhere.",
"Hello, my name is fabulous","5. Yes, I am harsh. I’m also demanding, stubborn, self-sufficient, and always right.",
"You know marriage doesn’t guarantee a happy ending, just an ending." ]

sath[1] = ["Miranda",
" I Drink Coffee, Have Sex, Buy Pies, And Enjoy Battery-Operated Devices.",
"I Am Never Going To Be Happy. It’s Just Not Going To Happen For Me."
,"He Was Looking Into My Eyes, I Was Looking For The Remote."
,"4. Soul mates only exist in the Hallmark aisle of Duane Reade Drugs."
,"5. I  can’t say I love you. i can’t . It’s not in my DNA."
,"He is just not in to you. So move on."]

sath[2] = ["Carrie",
"The most exciting, challenging and significant relationship of all is the one you have with yourself.",
"They say nothing lasts forever; dreams change, trends come and go, but friendships never go out of style.",
"Maybe the past is like an anchor holding us back. Maybe, you have to let go of who you were to become who you will be.",
"Somewhere out there is another little freak who will love us and understand us and kiss our three heads and make it all better."
,"Man may have discovered fire, but women discovered how to play with it."
,"Some people are settling down, some people are settling, and some people refuse to settle for anything less than butterflies." ]
sath[3] = ["Charlotte",
"Could You Please Not Use The F-Word In Vera Wang.",
"My Marriage Is A Fake Fendi.",
"Do You Know How Lucky You Are To Have Me?",
"I’m Nice. I'm Pretty And Smart! I'm A Catch!",
"Maybe We Can Be Each Other's Soulmates?",
"I’ve Been Dating Since I Was 15. I'm Exhausted! Where Is He?" ]


// function that generates random numbers that represent a girl's array  
const randomQuote = arr =>{
   
    let n = Math.floor(Math.random()* 4)
    let m  = Math.floor(Math.random() * 6) +1


    console.log(`As ${arr[n][0]} once said..... ${arr[n][m]}`)
}


// function call
randomQuote(sath)