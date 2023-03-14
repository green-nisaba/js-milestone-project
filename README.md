# Flag Quiz 
Flag Quiz is an app created for entertainment purposes. Users can test their knowledge of international flags. 
Quiz contains four content spaces: introduction, the quiz itself, final results and leaderboard. 

# Design 
## Color scheme 
For this project was used soft yellow, green and white tones in order not to interfere with perceprion of flag images.
## Typography 
Barlow Semi Condensed was chosen as a font for this project for minimalistic and modern look. 

## Imagery
All images for the flag photos were taken from [Wikimedia](https://www.wikimedia.org/).

# Features 
## Start screen 
This screen greets the user and explains purpose of the quiz. It has two oprions: start quiz and leaderbord, which leads to previous results. 

![start-section](https://raw.githubusercontent.com/green-nisaba/js-milestone-project/main/assets/images/start.png)

## Quiz itself 
Quiz contains a question and an image with a flag and set of 4 answers. User can choose one of suggested otions. 
![question](https://raw.githubusercontent.com/green-nisaba/js-milestone-project/main/assets/images/questionArea.png)

User can also see the number of queston his answering right now 

![question-number](https://raw.githubusercontent.com/green-nisaba/js-milestone-project/main/assets/images/questionIndicator.png)

And also a score, which updates with every right answer. 

![score](https://raw.githubusercontent.com/green-nisaba/js-milestone-project/main/assets/images/score.png)

After finishing quiz, user is taken to a page with results. This page suggests to enter a name in order to save results or to try again. 

![results-page](https://raw.githubusercontent.com/green-nisaba/js-milestone-project/main/assets/images/results.png)

After saving results, user is landing to leaderboard page, where he can see highest 4 results with saved name and exact score.

![leaderboard](https://raw.githubusercontent.com/green-nisaba/js-milestone-project/main/assets/images/leaderboardWhole.png)

# Testing 
Quiz functionality was tested on next browsers for desktop: Opera, Chrome, Microsoft Edge. All features work as expected. All media are displaying noramlly. Links function. Results can be saved and shown. 
For mobile devices quiz was tested on Mi Broswer and Chrome. Results were the same as for desctop - no obvious issues.

## Lighthouse 
![lighthouse](https://raw.githubusercontent.com/green-nisaba/js-milestone-project/main/assets/images/Lighthouse_start.png)


* HTML 
Html Checker found no errors or warnings to show for all three HTML pages (index.html, finish.html, finalResults.html). 

* CSS 
W3C CSS Validator found no errors.
 
* JS 
JSHint for all three js files (script.js, finish.js, finalResults.js) show no errors (but did show several warnings).

## Bugs 

Fixed bugs 

* Despite using splice method, answered questuins were still showing up in the quiz. It happened because I accidently used square brackets instead of parentheses. After rewriting this piece of code everything started working as expected. 

* Links weren't working and images were broken after deployment. The issue was fixed by switching to relative paths in code. 
 
* Score in quiz started updating from second question and didn't match final result. The issue was fixed by changing the order of declared virables. 

# Deployment 

This website was deployed via GitPages. Here are the steps to do so: 

* In website's repository, go to setting.
* In the GitHub pages select the master branch. 
* After that you'll see a link to a published website.

The link for Flag Quiz is - https://green-nisaba.github.io/js-milestone-project/index.html

In order to fork this project, you have to do following:

* Browse to the required repository.
* Click fork button and wait a few seconds.
* Forked repository will appear uder your GitHub account.

To clone repository:

* Navigate to required repository.
* Click on Code.
* Choose and copy URL for repository.
* Open Git Bush. 
* Change directory to the desired directory.
* Type git clone, paste URL from step 2.
* Press Enter.



# Credits 
## Content 

* The main idea on how to solve coding problems required for making a quiz was inspired by [James Quick's tutorial "Build a Quiz App with HTML, CSS, and JavaScript"](https://www.udemy.com/course/build-a-quiz-app-with-html-css-and-javascript/)
* Code written for saving results in local storage and displaying leaderboard was replicated from [Brian Design's video "How to Make a Quiz App using HTML CSS Javascript"](https://www.youtube.com/watch?v=f4fB9Xg2JEY)
* Approach on working with CSS clases for displaying certain elements was inspired by [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k)

## Media 
Images were taken from [Wikimedia](https://www.wikimedia.org/). 
Favicon was generated with help of [Fav Gen Website](https://fav-gen.com/)