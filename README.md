# Content
1. Theme
2. Our Website
3. Tools Used
4. Geting Started

# THEME
## GLOBAL INNOVATION
>*“The secret of change is to focus all of your energy, not on fighting the old, but building on the new."
>
>-Socrates (470-399 BC), Philosopher

This saying holds even today. After more than a year of fighting with the pandemic together, if one thing we can all agree upon is that new times demand new ideas. 
Utilizing this opportunity, we as students have tried to put forth our creativity and ideas into our Edtech website based on the theme of Global Innovation.

# OUR WEBSITE 
## VENUS EDTECH
Venus Ed. aims at providing quality educational resources for students and learners, breaking geographical bounds, covering every topic related to Information and Technology. Venus Ed. provides various IT certifications like CCNA, CCSP, CDP, CEH, etc. Venus ed. aims at providing an in-depth explanation of topics with the help of interactive and innovative technological tools.
1. INCULCATING INNOVATION: 
We aim at presenting the world and beyond to the students, not bounding them by any constraints.2. 
2. VERIFIED CONTENT:
 An in-depth explanation of topics from various IT domains along with certification courses.
3. EXPERTS EDUCATORS:
 Verified and expert educators from throughout the globe.
4. PERSONALISED LEARNING:
 At Venus, we provide self-paced personalized learning inclusive of all age groups.
5. PLATFORM FOR EXPERTS: 
We bridge the gap between students and teachers to provide quality resources.

# TOOLS USED 
1. HTML
2. CSS
3. JavaScript
4. React

## THIRD PARTY LIBRARIES USED
"react": "^17.0.2", <br />
    "react-dom": "^17.0.2",<br />
    "react-icons": "^4.3.1",<br />
    "react-responsive-carousel": "^3.2.22",<br />
    "react-responsive-modal": "^6.1.0",<br />
    "react-router-dom": "^5.3.0",<br />
    "reactjs-popup": "^2.0.5"<br />
    
# GETING STARTED
## Prerequisites
1. Git
2. Node: any 12.x version starting with v12.0.0 or greater
3. Yarn: See Yarn website for installation instructions
4. A fork of the repo (for any contributions)
5. A clone of the reactjs.org repo on your local machine

## Installation
    1. cd reactjs.org to go into the project root
    2. yarn to install the website's npm dependencies

## Running locally
  1. yarn dev to start the hot-reloading development server (powered by Gatsby)
  2. open http://localhost:8000 to open the site in your favorite browser

## DEPLOYMENT ON GITHUB PAGES
### Step 1: Add homepage to package.json
The step below is important!
If you skip it, your app will not deploy correctly.
Open your package.json and add a homepage field for your project:<br />

"homepage": "https://myusername.github.io/my-app",

or for a GitHub user page:<br />
 
 "homepage": "https://myusername.github.io",
 
or for a custom domain page:<br />
 
 "homepage": "https://mywebsite.com",
 
Create React App uses the homepage field to determine the root URL in the built HTML file.
### Step 2: Install gh-pages and add deploy to scripts in package.json#
Now, whenever you run npm run build, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.
To publish it at https://myusername.github.io/my-app, run:<br />

npm install --save gh-pages

Alternatively you may use yarn:<br />
  
 yarn add gh-pages 
 
Add the following scripts in your package.json:<br />
 
 "scripts": {
  + "predeploy": "npm run build",
 + "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
 
The predeploy script will run automatically before deploy is run.
If you are deploying to a GitHub user page instead of a project page you'll need to make one additional modification:
Tweak your package.json scripts to push deployments to master:<br />
  
 "scripts": {
 "predeploy": "npm run build",
 -"deploy": "gh-pages -d build",
 +"deploy": "gh-pages -b master -d build",
 
### Step 3: Deploy the site by running npm run deploy
Then run:<br />
 
 npm run deploy
 
### Step 4: For a project page, ensure your project’s settings use gh-pages#
Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch:<br />
  gh-pages branch setting 
### Step 5: Optionally, configure the domain
You can configure a custom domain with GitHub Pages by adding a CNAME file to the public/ folder.
Your CNAME file should look like this:<br />
 
 mywebsite.com
 
 
 Team Name - Venus
 
Developers - Avinash, Rishabh and Khushboo
 
