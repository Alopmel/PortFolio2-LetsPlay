# LetsPlay

Let's Play is a web page where you can find three different games. Snake, Flappy Bird and Space Invaders game.

You can access these games from the menu on the main page or from the section that is scrolling, where you will find three cards with the link and explanation of each game.

Before starting each game, you will find some short rules to play and when you lose or win you can play again as many times as you want.

![GitHub Logo](/media/responsive-design.png)

# Features
This section explains the functionality of the different parts of the page to provide the user with a brief guide on how to use the page.
## Existing Features

* **Header**
![GitHub Logo](/media/header.png)
    * In this section we find the name of the page, thus introducing the user.

    * The animations of the text and the illuminated balls that run through the header are made with CSScon CSS.

* **Navigation Bar**
![GitHub Logo](/media/navbar.png)
    * In the navigation bar, we find the links to go to the different sections of the page.

    * The animations are also made with CSS.

* **Principal Section**
![GitHub Logo](/media/section-cards.png)
    * In this section, we find three cards where there is a brief explanation of each game and with the links that take us to each one.

    * The animation is also made with CSS.

* **Start Page**
![GitHub Logo](/media/start-page.png)

    * You will find this section before each game, it contains the rules of the game and a start button to start playing.

    * The animation is also made with CSS.

* **Games Sections**
![GitHub Logo](/media/snake.png)

    * Here you will find each game board and below the score you have.

* **End Game Section**
![GitHub Logo](/media/loose.png)
    
    * This page appears when you have lost, in the case of Space invaders the You Win page appears if you have won.

    * There is a Play Again! button that will take you to the game board again and you can start from scratch.

    * The animation is also made with CSS.

* **Footer**
![GitHub Logo](/media/social-links.png)

    * In the footer, we find the different links to social networks.

    * The animation is also made with CSS.

# Testing

## Validator testing

  * HTML
 
    * No errors were returned when passing through the official W3C validator.

 * CSS
   
    * No errors were found when passing through the official Jigsaw validator
    * It has four caveats that are not relevant.
![GitHub Logo](/media/alert-css.png)

* JAVASCRIPT

    * There are no errors when passing the test in Jshint.

    * The errors that appear are referred to the ES6 since, depending on the browsers, they still do not support this format.
![GitHub Logo](/media/errors-javascript.png)

* Accessibility
![GitHub Logo](/media/lighthouse.png)


## Unfixed Bugs
![GitHub Logo](/media/error-invaders.png)
This error appears due to not having established limits for the variable within the board. You would have to find out the top size of the board and then set a condition with the laser beam variable. So when he leaves the board, he would not carry out the operation in which I assigned the classes to create the laser beam.

# Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://alopmel.github.io/PortFolio2-LetsPlay/

# Information sources

* CSS animations

    *  I got the animation resources from different video tutorials on this channel [on this channel](https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog).

    * To make the games I also relied on various youtube tutorials.
      * [Flappy Bird](https://www.youtube.com/watch?v=3SsYZDJdeXk&t=420s)
      * [Space Invaders](https://www.youtube.com/watch?v=3Nz4Yp7Y_uA)

