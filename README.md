# ResumeWebsiteMobileFirst
## Summary
I thought it'd be a great idea to make a resume website, it'd stand out to employers when applying or when networking with other people in tech. It could even have a QR code linked to it which could be added on business cards, etc. This website includes the skills and experience I have in the programming field, an about me section, and projects page going into more details about certain projects I have written. I have included features such as creating a responsive menu with CSS, creating a responsive menu with JavaScript, running PageSpeed Insights from google.com and recieved a score of 60 or better, and added transition animation to an element on hover. I will also continue to work on it to improve the PageSpeed Insights score.


## Basic Project Requirements
### Choose a color palette - ​​​https://coolors.co/palettes/trending - inspiration from the lighter blue palettes
### Set a font stack - https://fonts.googleapis.com/css2?family=Red+Hat+Text&display=swap
### Include a minimum of 2 media queries that create a better layout/user experience
I included two media queries that rearranges elements on the navigation bar, in the key skills sections, experience section, and the about me page. If page is too small for the nav bar it is hidden and then accessed via a button. Mobile First Design which adapts to Tablets and finally Dekstops.


## Features

### Create a responsive menu with CSS
The Mobile nav menu is styled in the styles.css file with mobile first in mind, It creates an X with the divs in the HTML when opened. If page is larger such as a Tablet or Desktop the navigation is static, and rearranged accordingly.

### Create a responsive menu with JavaScript
This simply toggles the CSS class when the button is pressed on the page. It changes the button to an X and shows the menu, or if closed it hides the menu and returns the button to 3 lines.

### Run PageSpeed Insights from google.com get a score of 60 or better
https://pagespeed.web.dev/analysis/http-claytonhite-github-io/62qm2ca5jo?form_factor=mobile - This was really cool and rewarding to see after I was able to get the site hosted on GitHub and then Google domain redirecting there. http://ClaytonHite.com

### Run PageSpeed Insights from google.com get a score of 80 or better
https://pagespeed.web.dev/analysis/https-claytonhite-github-io/yzyh1rw1j2?form_factor=mobile
Added image width and height to display at the correct ratio and received a score of 80 or higher in all fields.

### Run an accessibility check and make and document the adjustments in your readme
https://pagespeed.web.dev/analysis/http-claytonhite-github-io/62qm2ca5jo?form_factor=mobile
Accessibility score is recorded here on first run of the page. 

Second Run 
https://pagespeed.web.dev/analysis/https-claytonhite-github-io/yzyh1rw1j2?form_factor=mobile
Added title to button instead of alt tag and scored an 88 on accesibility.

Third Run 
https://pagespeed.web.dev/analysis/https-claytonhite-github-io/tz7blk48lg?form_factor=mobile
Scored 100 on accessibility. 
Added contrast to links on the page by making them darker, took out paragraph tags from the ul / li's, and added strong tags instead of headers for easier page navigation


### Add your own transition animation(s) to an element on hover.
Nav links and content on page with links attached have are highlighted when hovered, with a transition effect added to it.
