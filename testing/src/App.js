import React, {useEffect} from 'react';
import logo from "../src/logo.svg"
import './App.css';
import TypeWriterEffect from 'react-typewriter-effect';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
        <TypeWriterEffect
            textStyle={{ fontFamily: 'Red Hat Display' }}
            startDelay={100}
            cursorColor="black"
            text="This is a single text"
            typeSpeed={100}
          />
          <h1 data-aos="ease-out">Compromise</h1>
          <div>HOW TO USE AOS SCROLL ANIMATION EFFECT IN REACT
Hi, I am Avi & today I will share a simple but powerful animation effect on React Js . Its called AOS animations.

Its simple to use like eating food & I’m not joking.

lets start form installation.

for bower 

bower install aos — save
for npm

npm i aos — save
for Yarn

npm i aos — save
Now after complete the installation you need import two things in the component where you want to use the scroll animation effect >>

import AOS from "aos";
import "aos/dist/aos.css";
Then you need to initialize aos like this

export default App;
Now comes the best part . you need to go here & copy the animation into your div/image/paragraph/header anywhere you want like this. only the data-aos part.

I think it will help you to create simple scroll animation effect on your project.

If you need more detailed information please visit here.

Reactjs
Animation
Aos
Aos Not Working
How To
25


4



<img src={logo} alt="logo" data-aos="zoom-in-right"/>

More from Avi Mistry
Follow

HI I'm Avi Mistry . A full stack web developer works with ReactJs, NodeJs, MongoDB, Firebase, Netlify & more ;)

May 7, 2021

JAVASCRIPT RECAP -3 (some core fundamentals of React)
In this blog, I’ll try to clear your all confusion about React JS. And now I’m talking about what I think are the key points of React JS. Hope you’ll like it. Let’s get right into it. What is React? Is it a framework? React is a JavaScript library, It’s not exactly a framework. Generally, it’s used…

4 min read

Share your ideas with millions of readers.

Write on Medium
May 5, 2021

JavaScript Recap
Hi, today I’m here to recap some JavaScript fundamentals. Let's begin, What is JavaScript? JavaScript is a scripting or programming language that is the world’s most popular programming language that allows you to implement complex features on web pages. JavaScript can update and change both HTML and CSS. …

Java Script
2 min read

May 8, 2021

JAVASCRIPT RECAP 4 
Here I am covering 10 tricky topics of javascript . ⚔️ Truthy & Falsy Value Truthy & Falsy values are coerced to Booleans when in statements. You can use these statemenst in condition block in switch, if-else,while blocks. You will see this future more & more. So just read now for easier future 😎 ‘’…

Java Script
4 min read

JAVASCRIPT RECAP 4 
May 6, 2021

JAVASCRIPT RECAP -2
Hi, there. Today I come with JavaScript recap part 2. JavaScript data types and data structures Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and reassigned) values of all types: let foo = 42; //…

4 min read
HOW TO USE AOS SCROLL ANIMATION EFFECT IN REACT
Hi, I am Avi & today I will share a simple but powerful animation effect on React Js . Its called AOS animations.

Its simple to use like eating food & I’m not joking.

lets start form installation.

for bower 

bower install aos — save
for npm

npm i aos — save
for Yarn

npm i aos — save
Now after complete the installation you need import two things in the component where you want to use the scroll animation effect >>

import AOS from "aos";
import "aos/dist/aos.css";
Then you need to initialize aos like this

export default App;
Now comes the best part . you need to go here & copy the animation into your div/image/paragraph/header anywhere you want like this. only the data-aos part.

I think it will help you to create simple scroll animation effect on your project.

If you need more detailed information please visit here.

Reactjs
Animation
Aos
Aos Not Working
How To
25


4





More from Avi Mistry
Follow

HI I'm Avi Mistry . A full stack web developer works with ReactJs, NodeJs, MongoDB, Firebase, Netlify & more ;)

May 7, 2021

JAVASCRIPT RECAP -3 (some core fundamentals of React)
In this blog, I’ll try to clear your all confusion about React JS. And now I’m talking about what I think are the key points of React JS. Hope you’ll like it. Let’s get right into it. What is React? Is it a framework? React is a JavaScript library, It’s not exactly a framework. Generally, it’s used…

4 min read

Share your ideas with millions of readers.

Write on Medium
May 5, 2021

JavaScript Recap
Hi, today I’m here to recap some JavaScript fundamentals. Let's begin, What is JavaScript? JavaScript is a scripting or programming language that is the world’s most popular programming language that allows you to implement complex features on web pages. JavaScript can update and change both HTML and CSS. …

Java Script
2 min read

May 8, 2021

JAVASCRIPT RECAP 4 
Here I am covering 10 tricky topics of javascript . ⚔️ Truthy & Falsy Value Truthy & Falsy values are coerced to Booleans when in statements. You can use these statemenst in condition block in switch, if-else,while blocks. You will see this future more & more. So just read now for easier future 😎 ‘’…

Java Script
4 min read

JAVASCRIPT RECAP 4 
May 6, 2021

JAVASCRIPT RECAP -2
Hi, there. Today I come with JavaScript recap part 2. JavaScript data types and data structures Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and reassigned) values of all types: let foo = 42; //…

4 min read
HOW TO USE AOS SCROLL ANIMATION EFFECT IN REACT
Hi, I am Avi & today I will share a simple but powerful animation effect on React Js . Its called AOS animations.

Its simple to use like eating food & I’m not joking.

lets start form installation.

for bower 

bower install aos — save
for npm

npm i aos — save
for Yarn

npm i aos — save
Now after complete the installation you need import two things in the component where you want to use the scroll animation effect >>

import AOS from "aos";
import "aos/dist/aos.css";
Then you need to initialize aos like this

export default App;
Now comes the best part . you need to go here & copy the animation into your div/image/paragraph/header anywhere you want like this. only the data-aos part.

I think it will help you to create simple scroll animation effect on your project.

If you need more detailed information please visit here.

Reactjs
Animation
Aos
Aos Not Working
How To
25


4





More from Avi Mistry
Follow

HI I'm Avi Mistry . A full stack web developer works with ReactJs, NodeJs, MongoDB, Firebase, Netlify & more ;)

May 7, 2021

JAVASCRIPT RECAP -3 (some core fundamentals of React)
In this blog, I’ll try to clear your all confusion about React JS. And now I’m talking about what I think are the key points of React JS. Hope you’ll like it. Let’s get right into it. What is React? Is it a framework? React is a JavaScript library, It’s not exactly a framework. Generally, it’s used…

4 min read

Share your ideas with millions of readers.

Write on Medium
May 5, 2021

JavaScript Recap
Hi, today I’m here to recap some JavaScript fundamentals. Let's begin, What is JavaScript? JavaScript is a scripting or programming language that is the world’s most popular programming language that allows you to implement complex features on web pages. JavaScript can update and change both HTML and CSS. …

Java Script
2 min read

May 8, 2021

JAVASCRIPT RECAP 4 
Here I am covering 10 tricky topics of javascript . ⚔️ Truthy & Falsy Value Truthy & Falsy values are coerced to Booleans when in statements. You can use these statemenst in condition block in switch, if-else,while blocks. You will see this future more & more. So just read now for easier future 😎 ‘’…

Java Script
4 min read

JAVASCRIPT RECAP 4 
May 6, 2021

JAVASCRIPT RECAP -2
Hi, there. Today I come with JavaScript recap part 2. JavaScript data types and data structures Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and reassigned) values of all types: let foo = 42; //…

4 min read

</div>
    </div>
  );
}

export default App;
