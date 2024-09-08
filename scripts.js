/* -----------------------General Styles  -----------------------*/

body {
    font-family: "Outfit", sans-serif;
  /* Set default font*/
  margin: 0;
  padding: 0;
  line-height: 1.6;
  /* Improve text readability */
  background-color: #fff;
  /* White background */
  color: #333;
  /* Dark gray text color */
  text-align: center;
}

header {
  background: linear-gradient(90deg, #FF69B4, #FFC0CB);
  /* Pink gradient background */
  color: #c20064;
  /* text color */
  padding: 20px 20px;
  /* Space above and below */
  text-align: center;
  /* Center align text */
}

h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

/* -----------------------Header -----------------------*/

header h1 {
  /*margin: 34;*/
  font-size: 3.5em;
  /* Large font size */
  font-weight: bold;
  color: #ffffff;
  animation: fadeIn 2s;
  opacity: 100%;
  text-shadow: -1px -1px 5px #c20064, 3px 0px 2px #fff, 1px -5px 5px #FFC0CB, -15px -18px 5px #ffc7f0, 18px 18px 8px #ccffcc;
  text-shadow: -1px -1px 0 #333, 1px -1px 0, #333, -1px 1px 0 #333, 1px 1px 0 #333;


}

header p {
  font-size: 1.1em;
  /* Smaller font size */
  animation: fadeIn 3s;
  /* Fade in animation */
  margin-bottom: 5%;
}
.parent {
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.child {
grid-area: 1 / 1 / 1 / 1;
}
/* -----------------------Navigation -----------------------*/
nav {
  text-align: center;
  margin: 20px 0;
  /* Space above and below */
}

nav a {
  margin: 0 15px;
  /* Space between links */
  color: #FFC0CB;
  /* White text color */
  text-decoration: none;
  /* Remove underline */
  font-weight: bold;
  position: relative;
}

nav a:hover {
  color: #FF69B4;
  /* Pink color on hover */
}

nav a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #FF69B4;
  /* Pink underline on hover */
  left: 0;
  bottom: -5px;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

nav a:hover::after {
  transform: scaleX(1);
  /* Expands underline on hover */
  transform-origin: bottom left;
}

/* -----------------------Container -----------------------*/
.container {
  width: 90%;
  margin: auto;
  /* Center container */
  overflow: hidden;
  text-align: center;
  padding: 20px;
  /*max-width: 1200px; /* Max width for container */
}

/* -----------------------Buttons -----------------------*/

/* Button Styles */
.button,
.btn1,
.btn2 {
  border: 3px solid black;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: 700;
  transition: background 0.3s ease, color 0.3s ease;
  margin: auto;
  background-color: #FF69B4;
  gap: 50px;
  /* Pink background */
  color: #fff;
  display: inline-block;
  /* White text */
}

.btn2 {
  background-color: #FF69B4;
  color: #fff;
  border-color: #fff;
  /* border */
}

.btn1 {
  background-color: white;
  color: #FF69B4;
  border-color: #FF69B4;
}

.btn1:hover {
  transform: scale(1.05); /* Slightly enlarge the icon on hover */
  background-color: #FF69B4;
  color: white;
}

.btn2:hover {
  transform: scale(1.05); /* Slightly enlarge the icon on hover */
  background-color: #ffb6ed;
  color: #c20064;
}

.button:hover {
  transform: scale(1.05); /* Slightly enlarge the icon on hover */
  background-color: #FF1493;
  /* Darker pink on hover */
  color: white;
}
.button-container {
 display: flex; /* Flexbox to center the button */
 justify-content: center; /* Center horizontally */
 align-items: center; /* Center vertically */
 margin: 40px 0; /* Adds top and bottom margin to prevent overlap */
 width: 100%; /* Full width to ensure spacing around */
 padding: 20px 0; /* Additional padding for space */
 box-sizing: border-box; /* Ensure padding is included in width/height */
}

/* -----------------------Back to Top Button -----------------------*/
#back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: #FF69B4;
  /* Pink background */
  color: white;
  /* White arrow */
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  /* Center arrow */
  display: none;
  /* Hidden by default */
  z-index: 1000;
  /* Above other elements */
}

#back-to-top:hover {
  transform: scale(1.1); /* Slightly enlarge the icon on hover */

  background-color: #FF1493;
  /* Darker pink on hover */
}




/* -----------------------Images -----------------------*/



.image-container {
  display: flex;
  /* Use flexbox to align the image */
  justify-content: center;
  /* Center horizontally */
  align-items: center;
  /* Center vertically */
  width: 5 vw;
  /* Set container width */
  height: 5vw;
  /* Set container height */
  overflow: hidden;
  /* Hide any overflow */
}

.centered-image {
  max-width: 100%;
  /* Shrink the image to fit container width */
  max-height: 100%;
  /* Shrink the image to fit container height */
  object-fit: cover;
  /* Maintain aspect ratio while fitting */
  display: block;
  /* Remove any default inline spacing */
  margin: auto;
  /* Center the image */
}

/* -----------------------Hero -----------------------*/
.hero {
  position: relative;
  height: 100vh;
  /* Full screen height */
  width: 100vw;
  background: linear-gradient(180deg, #FF69B4, #ffe1ec);
  /* Light pink to white gradient */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

}

/*
.hero-content {
 position: relative;
 z-index: 2; /* Content above background }*/

.hero-name {
  width: 100%;
  padding-top: 100px;
  font-size: 2.7vw;
}

/* -----------------------Vine Divider -----------------------*/


.vine-divider {
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #ffe1ec, #fff);
  /* Light pink to white gradient */
}

.vine-divider svg {
  width: 100%;
  max-width: 1000px;
  /* Max width to make sure it looks good on all screen sizes */
  height: auto;
}

/* -----------------------Featured Projects -----------------------*/

#featured-projects {
  padding: 50px 20px;
  text-align: center;
  background-color: #ffffff;
  position: relative;
  margin: auto;
  align-items: center;
}


.flower-row {
  /*padding-top: 20%;
 display: flex;
 justify-content: center;  Align the bottom part for stem 
 gap: 20vw;;*/
  display: grid;
  /* Use CSS Grid */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* Responsive grid */
  gap: 15px;
  /* Space between grid items */
  padding: 15%;
  /* Padding around the gallery */
  align-items: center;
  /* Center items within each flower */
  object-fit: cover;

}



.flower {
  position: relative;
  width: 120%;
  height: 300%;
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: cover;

}

.petal {
  position: relative;
  border-radius: 50%;
  border: 4px solid #333;

}

.center {
  width: 120px;
  height: 120px;
  background-color: rgb(254, 245, 124);
  border-radius: 50%;
  position: relative;
  top: 0px;
  left: 0px;
  align-items: center;
  border: 3px solid #333;
  /*rgb(197, 164, 0);*/
  justify-content: center;
  /* Align the bottom part for stem */
  object-fit: cover;

}

.center img {
  width: 100%;
  height: width;
  align-items: center;
  object-fit: cover;
  border-radius: 50%;
  justify-content: center;
  /* Align the bottom part for stem */

}

.stem {
  width: 5px;
  height: 110px;
  background-color: rgb(115, 225, 115);
  position: absolute;
  top: 120px;
  border: 2px solid green;

}

.leaf {
  position: relative;
  width: 40px;
  height: 20px;
  background-color: green;
  border-radius: 40px;
  border: 3px solid #004600;

}

.flower:hover {
  transform: scale(1.15);
  /* Slight zoom on hover */
  transition: transform 0.3s ease; /* Add hover effect */

}




/* -----------------------Introduction -----------------------*/
.introduction {
  align-items: center;
  padding: 50px 0;
  background-color: white;
  /* White background */
  text-align: center;

}

.introduction h2 {
  font-size: 2.5em;
  /* Large heading */
  margin-bottom: 20px;
  /* Space below heading */
}

.introduction p {
  font-size: 1.2em;
  color: #000;
  /* black text */
}


/* -----------------------Section Title -----------------------*/
.section-title {
  text-align: center;
  margin-bottom: 20px;
  /* Space below title */
  font-size: 2em;
  animation: slideIn 1s;
  /* Slide in animation */
}

.section-title::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 2px;
  background-color: #FF69B4;
  /* Pink underline */
  left: 50%;
  transform: translateX(-50%);
  bottom: -10px;
}





/* ----------------------- Footer -----------------------*/
/* Footer */
footer {
 padding: 20px;
 background-color: #FF69B4;
 color: white;
 text-align: center;
 position: relative;
 width: 100%;
 bottom: 0;
}

.social-icons {
  width: 1vw;
  height: 1vw;

  align-items: center;
  border-radius: 50%;
  justify-content: center;
  /* Align the bottom part for stem */



}

/* -----------------------Portfolio Gallery -----------------------*/


.portfolio-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1.5fr));
  /* Responsive grid with minimum width */
  gap: 20px;
  padding: 20px 50px 20px 50px;
  box-sizing: border-box;
  /* Include padding in width calculations */
}
/* Style for each project card */
.project-item-portfolio {
  background: #fff;
  padding: 10px 5px 10px 5px; /*top right bottom left*/
  margin: 10px;
  border: 3px solid #FF69B4;
  width: 100%; /* Full width within the grid */
  max-width: 280px; /* Control max width */
  height: 505px; /* Fixed height */
  box-sizing: border-box;
  transition: transform 0.3s ease;
  text-decoration: none;
  background-color: #ffe1ec;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Prevent overflow */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; /* Center content inside the card */
}

/* Style the image to fit within the square project item */
.project-item-portfolio img {
  width: 90%;
  height: 200px; /* Set fixed height for the image */
  object-fit: cover; /* Ensure the image covers the entire area */
  border-radius: 5px;
  margin-bottom: 10px;
  border: 1px solid #fff;
  filter: drop-shadow(5px 5px 5px #FF69B4);}

/* Maintain square aspect ratio and ensure content fits within */
.project-item-portfolio .project-title-portfolio {
  font-weight: bold;
  font-size: 1.2em;
  color: #333;
  margin: 10px 0;
}
/* Hide description initially */
.project-description-portfolio {
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: opacity 0.4s ease, height 0.4s ease; /* Smooth transition */
}

/* Style for each project card */
.project-item-portfolio {
  background: #ffe1ec;
  padding: 10px 5px;
  margin: 10px;
  border: 3px solid #FF69B4;
  width: 100%;
  max-width: 280px;
  height: auto;
  max-height: 325px; /* Set initial max height */
  box-sizing: border-box;
  transition: transform 0.4s ease, max-height 0.4s ease; /* Smooth scaling and height transition */
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

/* Show description and expand card when hovering */
.project-item-portfolio:hover .project-description-portfolio {
  opacity: 1;
  height: auto; /* Allow description to expand */
}

/* Hover effect for scaling and expanding the entire project card */
.project-item-portfolio:hover {
  transform: scale(1.05); 
  max-height: 800px; /* Adjust to allow enough space for all content */
  transition: transform 0.4s ease, max-height 0.4s ease;
}

/* Style the image to fit within the square project item */
.project-item-portfolio img {
  width: 100%;
  height: 150px; /* Set fixed height for the image */
  object-fit: cover; /* Ensure the image covers the entire area */
  border-radius: 5px;
  margin-bottom: 10px;
}

/* Maintain square aspect ratio and ensure content fits within */
.project-item-portfolio .project-title-portfolio {
  font-weight: bold;
  font-size: 1.2em;
  color: #333;
  margin: 10px 0;
}

/* Smaller font for the description */
.project-item-portfolio .project-description-portfolio {
  font-size: 0.75em; /* Smaller font size */
  color: #333;
  margin: 10px;
  padding: 0 10px;
  text-align: center;
}

/* Style the tags */
.project-tags-portfolio {
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the tags horizontally */
  gap: 5px;
}

/* Style project names within project items */
.project-item-portfolio p {
  text-decoration: none;

  font-size: 1.1em;
  /* Slightly larger font size */
  color: #333;
  /* Darker text for better readability */
  margin-top: 10px;
  /* Space between the image and the project name */
  margin-bottom: 5px;
  /* Space between the project name and description */
  text-align: center;
  /* Center-align the project names */
}

/* Style project names within project items */
.project-item-portfolio a {
  text-decoration: none;
}

/* Filter Button Container */
.filter-button-container {
  margin: 100px 20px 20px 60px;
  display: flex;
  justify-content: left;
  gap: 13px; /* Space between buttons */
}

/* Style for filter buttons */
.filter-link {
  padding: 10px 20px;
  background-color: #c20064; /* Pink background */
  color: #fff; /* White text */
  border-radius: 10px 10px 0px 0px; /* Rounded corners */
  border: 3px solid #333;
  border-bottom: 3px solid #FF69B4;
  font-weight: bold;
  text-transform: uppercase; /* Make text uppercase */
  text-decoration: none; /* Remove underline */
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

/* Hover effect for filter buttons */
.filter-link:hover {
  background-color: #FF1493; /* Darker pink on hover */
  color: white; /* White text on hover */
  border-color: #FF69B4; /* Optional border change on hover */
}

/* Active filter button style */
.filter-link.active {
  background-color: #FFC0CB; /* Light pink when active */
  color: #c20064; /* Dark pink text */
  border: 2px solid #FF69B4; /* Optional border to indicate active state */
  transform: scale(1.1); /* Slight enlargement to indicate active state */
}



.tag {
  display: inline-block;
  background-color: #FF69B4;
  /* Pink background */
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  margin-right: 5px;
  font-size: 0.8em;
}

.award {
  display: inline-block;
  background-color: #fff;
  /* Pink background */
  color: lightskyblue;
  padding: 5px 10px;
  border-radius: 0px;
  margin-right: 5px;
  font-size: 0.8em;
  border: 3px solid lightskyblue;
}


/* -----------------------Text Animations -----------------------*/
@keyframes fadeInDown {
  from {
      opacity: 0;
      transform: translateY(-20px);
  }

  to {
      opacity: 1;
      transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
      opacity: 0;
      transform: translateY(20px);
  }

  to {
      opacity: 1;
      transform: translateY(0);
  }
}

/* ----------------------- Responsive Design -----------------------*/
@media (max-width: 768px) {
  .flower-row {
      flex-direction: column;
      /* Stack items vertically */
      align-items: center;
      /* Center align */
  }

  .projects-grid {
      flex-direction: column;
      /* Stack items vertically */
      align-items: center;
      /* Center align */
  }

@media (max-width: 768px) {
 .button-container {
     margin: 20px 0; /* Adjust margins for smaller screens */
     padding: 15px 0; /* Reduce padding on smaller screens */
 }
}
}
/* Experience and Projects Container */
.experience,
.projects {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); /* Responsive grid */
  gap: 20px; /* Space between cards */
  padding: 20px; /* Padding around container */
  justify-items: center; /* Center-align grid items */
}
/* Experience and Project Cards */
.experience-item,
.project-item {
  background: #ffffff; /* White background for card contrast */
  padding: 20px; /* Padding inside the card */
  margin: 10px; /* Margin around the card */
  border: 3px solid #FF69B4; /* Border color to match theme */
  border-radius: 10px; /* Rounded corners for cards */
  width: 100%; /* Full width */
  max-width: 500px; /* Maximum width to control card size */
  box-sizing: border-box; /* Include padding in width calculation */
  text-align: left; /* Left align text inside cards for readability */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
  display: flex; /* Flexbox for layout */
  flex-direction: column; /* Stack elements vertically */
  align-items: flex-start; /* Align items to the start for better alignment with icons */
}
.experience-item,
.project-item::hover{
  transform: scale(1.1);
}
/* Icon Styling */
.icon {
  width: 50px; /* Set a small, consistent width for icons */
  height: 50px; /* Set a small, consistent height for icons */
  border-radius: 50%; /* Make the icons circular */
  vertical-align: middle; /* Align icon vertically with the text */
  margin-right: 20px; /* Space between icon and text */
  object-fit: cover; /* Ensure the icon fits within the circle without distortion */
}

/* Headings inside Cards */
.experience-item h3,
.project-item h3 {
  font-size: 1.5em; /* Large font size for titles */
  margin-bottom: 10px; /* Space below titles */
  color: #FF69B4; /* Title color matching theme */
  display: flex; /* Flexbox to align items */
  align-items: center; /* Center-align items vertically */
}

/* Subheading (Location and Dates) */
.experience-item p strong,
.project-item p strong {
  font-size: 1em; /* Font size for subheading */
  color: #555; /* Darker gray for subheadings */
  display: block; /* Block display for spacing */
  margin-bottom: 10px; /* Space below subheadings */
  text-align: left; /* Left align text for consistency */
}

/* Description Lists */
.experience-item ul,
.project-item ul {
  padding-left: 20px; /* Indent list items */
  margin: 10px 0; /* Space above and below list */
  text-align: left; /* Left-align list items for readability */
}

.experience-item li,
.project-item p {
  font-size: 0.95em; /* Slightly smaller font size for descriptions */
  color: #333; /* Dark text color for readability */
  margin-bottom: 8px; /* Space between list items */
  text-align: left; /* Left-align description text */
}

/* Responsive Design */
@media (max-width: 768px) {
  .experience,
  .projects {
      grid-template-columns: 1fr; /* Single column layout for smaller screens */
  }

  .experience-item,
  .project-item {
      max-width: 100%; /* Full width on smaller screens */
  }

  .experience-item h3,
  .project-item h3 {
      font-size: 1.3em; /* Slightly smaller titles on smaller screens */
  }

  .icon {
      width: 20px; /* Smaller icons on mobile */
      height: 20px; /* Smaller icons on mobile */
  }
}



/* Resume Button Container */
.resume-button-container {
  margin-top: 20px; /* Space above the button */
  text-align: center; /* Center-align the button */
  padding-bottom: 50px;
}

/* Resume Button Styling */
.resume-button {
  display: inline-block; /* Inline-block for better styling */
  padding: 10px 20px; /* Padding for the button */
  background-color: #FF69B4; /* Background color matching theme */
  color: #fff; /* White text color */
  font-size: 1em; /* Font size for button text */
  font-weight: bold; /* Bold text */
  border-radius: 5px; /* Rounded corners */
  text-decoration: none; /* Remove underline from link */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
  border: 3px solid #000; /* Border matching background color */
}

/* Resume Button Hover Effect */
.resume-button:hover {
  transform: scale(1.05); /* Slightly enlarge the icon on hover */
  background-color: #FF1493; /* Darker pink on hover */
  color: #fff; /* Maintain white text color on hover */
  border-color: #FF1493; /* Border matches hover background color */
}

/* Footer Styles */
footer {
  padding: 30px;
  background-color: #FF69B4;
  color: white;
  text-align: center; /* Center all footer text */
  width: 100%;
  position: relative;
  bottom: 0;
}

.footer-container {
  max-width: 1200px; /* Limit width to keep content centered */
  margin: auto; /* Center the content */
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack content vertically */
  align-items: center; /* Center align items */
}

.social-icons {
  margin-top: 50px;
  margin-bottom: 10px; /* Space below the social icons */
  display: flex; /* Display icons in a row */
  gap: 15px; /* Space between icons */
}

.social-icon {
  border: 3px solid black;
  padding: 3px; /* Add padding for the white background */
  background-color: white; /* White background for the icons */
  width: 30px; /* Set a small, consistent width for icons */
  height: 30px; /* Set a small, consistent height for icons */
  border-radius: 50%; /* Make the icons circular */
  object-fit: cover; /* Ensure the icon fits within the circle without distortion */
  transition: transform 0.3s ease; /* Add hover effect */
}

.social-icon:hover {
  transform: scale(1.1); /* Slightly enlarge the icon on hover */
}

/* Responsive Design for Footer */
@media (max-width: 768px) {
  .footer-container {
      padding: 0 10px; /* Add padding for smaller screens */
  }

  .social-icon {
      width: 25px; /* Smaller icons on mobile */
      height: 25px; /* Smaller icons on mobile */
  }
}


/* Back-to-top button */
#backToTop {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: #FF69B4;
  color: white;
  border-radius: 50%;
  text-align: center; /* Center arrow inside the button */
  line-height: 50px;
  display: none;
  z-index: 1000;
}

#backToTop:hover {
  background-color: #FF1493;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
      width: 100%; /* Full width for smaller screens */
      padding: 10px;
      text-align: center; /* Center text on smaller screens */
  }

  nav a {
      margin: 5px; /* Less margin on smaller screens */
      text-align: center; /* Center navigation links on smaller screens */
  }


  h1, h2, h3 {
      font-size: 1.5rem; /* Reduce font size for smaller screens */
      text-align: center; /* Center headings on smaller screens */
  }

  p, li {
      font-size: 0.9rem; /* Reduce font size for smaller screens */
      text-align: center; /* Center text on smaller screens */
  }
}
