# Football-Quiz



## Description

Football quiz is a Premier League football quiz app designed for anyone who enjoys quizzing, sport, football and testing their knowledge. 

- link to the live site here - https://garethrogers2828.github.io/Football-Quiz/

  <img width="1886" height="988" alt="Responsive" src="https://github.com/user-attachments/assets/66d17f45-3df3-4176-8d3d-038e7878c9b6" />


# Visitor Goals

The target audience for Football-Quiz are:

- Quizzers
- Sport Fans
- Football Fans

User goals are:

- Answer questions
- Receive feedback of correct/wrong answer
- See my score
- See Leaderboard

## Business Goals

The business goals for this app are:

- Generate more awareness
- User engagement and Data Collection

## User Stories 

1. As a user, I want to be able to enter my name before starting the quiz and I want to be able to start the quiz easily
2. As a user, i want to be able to understand exactly what the site is for when arriving
3. As a user, I want to to be able to answer questions with multiple choices  
4. As a user, I want to know if my answers are correct after answering each question
5. As a user, I want to be told the correct answer if I am wrong
6. As a user, I want to be kept up to date of my score
7. As a user, I want to know how far into the quiz I am, and how many questions are remaining
8. As a user, I want to be able to see my final score and a leaderboard
9. As a user, I want to be able to restart the quiz after I have finished 

# Design

## Wireframes

![Desktop-wireframe](https://github.com/user-attachments/assets/7c590e02-e3f1-4c1b-a1da-5aa0a1868409)
![Mobile-wirefram](https://github.com/user-attachments/assets/d6063aea-2d43-4ed8-94a1-4150a065f132)


## Colours

- I liked the black and gold theme as it gives the look of a gameshow and really stands out to the user. It has a great contrast and is easily readable.

<img width="1772" height="702" alt="image" src="https://github.com/user-attachments/assets/03864a1b-0b18-43a8-bf73-2cf2833a19d7" />


## Fonts

- I have used Arial 

# Existing Features

## Enter Name Screen

- User can enter name at the start of the quiz. This is good to give user the a quick personal touch and would allow this information to be used in a leaderboard later on in the quiz.

<img width="1910" height="892" alt="Quiz-Home-Page" src="https://github.com/user-attachments/assets/654e770e-ef8e-4a77-ae6a-6caba3e57ff4" />

## Sweet Alert if no name entered

- User is required to enter name, if no name is entered an alert will pop up. I havve used sweetalert to give the user a more friendly feedback experience
  <img width="1557" height="726" alt="sweetalert" src="https://github.com/user-attachments/assets/4fdcbd16-ce08-4ffc-a415-5b2718d67a19" />


## Start button

- User can initiate the start of the quiz via a the start quiz button, allows the user to start the quiz when they are ready.

<img width="441" height="68" alt="start-quiz-button" src="https://github.com/user-attachments/assets/46a8b1cb-3f48-45cc-9d33-33b6337cb375" />


## Questions Section

- After the user has clicked start quiz they can then view questions one at a time with 4 possible answers. Users can take their time and are given feedback when they are correct or wrong. The correct answer button is highlighted green and if the user answers in-correctly then this button will highlight in red. Great for improving the users knowledge as the correct answer will be highlighted green even if the user gets the question wrong.

<img width="1913" height="893" alt="questions-page" src="https://github.com/user-attachments/assets/7dcaee11-9e51-4cc3-9b18-b50f0e8869b1" />



- When the user hovers over the answer button, the button will highlight gold to show they are within the clicking range

## Progress Bar

- There is a progress bar so users can see how far into the quiz they are and how many questions they have left. This is important to the user as they know roughly how long th quiz will take and if they are close to the end for extra motivation.

<img width="1003" height="265" alt="progress-bar" src="https://github.com/user-attachments/assets/75efda5f-f74f-4780-9673-62d604aa0e09" />

- When user clicks answer the progress bar temorarily shows them how many answers they have correct. This then reverts back to the question number 


 ##  Play Again Button

 - Users can reset the quiz and restart without refreshing their browser. Great for the user to be able to very quickly play the quiz again with their renewed knowledge
 - This button is visable at the end of the quiz, it is also available from the leaderboard section


## Future Features 

- New round of questions

## Technologies used 

- HTML
- CSS
- Javascript

## How to View the Project

https://garethrogers2828.github.io/Football-Quiz/

# Testing

## User Story testing

| User Story                                                                                                            | Result |
| --------------------------------------------------------------------------------------------------------------------- | ------ |
| As a user, I want to be able to enter my name before starting the quiz and I want to be able to start the quiz easily | Pass   |
| As a user, i want to be able to understand exactly what the site is for when arriving                                 | Pass   |
| As a user, I want to to be able to answer questions with multiple choices                                             | Pass   |
| As a user, I want to know if my answers are correct after answering each question                                     | Pass   |
| As a user, I want to be told the correct answer if I am wrong                                                         | Pass   |
| As a user, I want to be kept up to date of my score                                                                   | Pass   |
| As a user, I want to know how far into the quiz I am, and how many questions are remaining                            | Pass   |
| As a user, I want to be able to see my final score and a leaderboard                                                  | Pass   |
| As a user, I want to be able to restart the quiz after I have finished                                                | Pass   |
|                                                                                                                       |        |                          



                                                                                        
## Manual testing 

| Feature                    | Steps                                         | Expected Outcome                                                                                                                                                   | Outcome |
| -------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Home screen                |                                               |                                                                                                                                                                    |         |
| Introduction               |                                               | Introduction to the Quiz explaining what it is and how long                                                                                                        | Pass    |
| Start Quiz Button          | User clicks Start Quiz                        | Quiz starts providing user has entered a name                                                                                                                      | Pass    |
| Enter Name box             | User doesn't enter name and clicks Start Quiz | Sweet Alert pop up asking user to enter name                                                                                                                       | Pass    |
| Start Quiz Button          | User Hovers over the button                   | Button highlights white                                                                                                                                            | Pass    |
|                            |                                               |                                                                                                                                                                    |         |
| Questions Screen           |                                               |                                                                                                                                                                    |         |
|                            |                                               |                                                                                                                                                                    |         |
| Questions and Progress bar |                                               | User Can see each question 1 by 1 and their progress as they go through the quiz                                                                                   | Pass    |
| Answer Button              | User hovers over an answer button             | Button highlights gold and text changes colour to black                                                                                                            | Pass    |
| Answer Button/s            | User clicks an answer button                  | If correct this button will highlight Green and the text will change colour to White                                                                               | Pass    |
| Answer Button/s            | User clicks an answer button                  | If incorrect this button will highlight Red and the text will change colour to White. The correct answer will be highlighted Green and text also changed to white. | Pass    |
| Answer Button/s            | User clicks an answer button                  | 3 second delay until next questions loads                                                                                                                          | Pass    |
|                            |                                               |                                                                                                                                                                    |         |
| Results Screen             |                                               |                                                                                                                                                                    |         |
| Thank you message          |                                               | Thanks the user for playing and shows them their score.                                                                                                            | Pass    |
| Play Again Button          | User Clicks Play Again Button                 | The user is directed back to the home page and can re enter their name to play the quiz again                                                                      | Pass    |
| Play Again Button          | User Hovers                                   | Button highlights gold and text changes colour to black                                                                                                            | Pass    |
| View Leaderboard           | User Hovers                                   | Button highlights gold and text changes colour to black                                                                                                            | Pass    |
| View Leaderboard           | User Clicks View Leaderboard Button           | User taken to leaderboard                                                                                                                                          | Pass    |
|                            |                                               |                                                                                                                                                                    |         |
| Leaderboard Screen         |                                               | User can see their score and where they came on the leaderboard                                                                                                    |         |
| Play Again Button          | User Clicks Play Again Button                 | The user is directed back to the home page and can re enter their name to play the quiz again                                                                      | Pass    |
| Play Again Button          | User Hovers                                   | Button highlights White                                                                                                                                            | Pass    |


## Validator Testing

- HTML validation pass 
<img width="1826" height="930" alt="html-validation" src="https://github.com/user-attachments/assets/742eec72-d3bf-4e04-99be-e2783ece152a" />

- CSS Validation
- <img width="1836" height="470" alt="css-validation" src="https://github.com/user-attachments/assets/46e92c93-21f8-4dfd-94fb-bb34f657a021" />


  

## Lighthouse Testing 

- The website has been tested using DevTools lighthouse, producing an acceptable result.

<img width="1621" height="791" alt="lighthouse-desktop" src="https://github.com/user-attachments/assets/0e5147fa-9594-4eb2-b8a9-7cb0b33a3e3b" />
<img width="1521" height="838" alt="lighthouse-mobile" src="https://github.com/user-attachments/assets/19aa76da-901c-4ca0-a4f8-e9e21719003a" />



## Bugs

 

## IDE

- Used Visual Studio Code. 

## Version Control 

- The site has been managed within git-hub.

- https://github.com/garethrogers2828/Football-Quiz

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:

1. Go to your repository on GitHub. Then, navigate to the Settings tab.
2. Scroll down to the "Pages" section in the left sidebar and select it.
3. Under Branch, Select the main branch.
4. Click Save to confirm.


## Credits

I watched 3-4 youtube quiz tutorials before and during his project to help my understanding of the new language and syntax.

- https://www.youtube.com/watch?v=_FnFPmA87XU
- https://www.youtube.com/watch?v=rFWbAj40JrQ&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF

I also used Chatgpt to help with troubleshooting and problem solving issues. This helps breakdown more complex code and simplify

- https://chatgpt.com/

  I used Fontawesome for the social media fonts
  
- https://fontawesome.com/


## Content 

- Content was created by me. Answers to questions searched on Google.


## Media 














































































