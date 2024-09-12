/* -----------------------General Styles  -----------------------*/


body {
    font-family: "Outfit", sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    background-color: #fff;
    color: #333;
    text-align: center;
    max-width: 100vw;
    width: 100vw;
  }
  
  header {
    background: linear-gradient(90deg, #FF69B4, #FFC0CB);
    color: #c20064;
    padding: 20px;
    text-align: center;
    overflow: hidden;
    max-width: 100vw;
    width: 100vw;
  }
  
  h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  /* -----------------------Header -----------------------*/
  header h1 {
    font-size: 3.5em;
    font-weight: bold;
    color: #ffffff;
    animation: fadeIn 2s;
    opacity: 100%;
  
    text-shadow: -1px -1px 5px #c20064, 3px 0px 2px #fff, 1px -5px 5px #FFC0CB, -15px -18px 5px #ffc7f0, 18px 18px 8px #ccffcc, -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333, 1px 1px 0 #333;
  }
  
  header p {
    font-size: 1.1em;
    animation: fadeIn 3s;
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
  }
  
  nav a {
    margin: 0 15px;
    color: #FFC0CB;
    text-decoration: none;
    font-weight: bold;
    position: relative;
  }
  
  nav a:hover {
    color: #FF69B4;
  }
  
  nav a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #FF69B4;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  
  nav a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  
  /* -----------------------Container -----------------------*/
  .container {
    width: 90%;
    margin: auto;
    overflow: hidden;
    text-align: center;
    padding: 20px;
  }
  
  /* -----------------------Buttons -----------------------*/
  .button, .btn1, .btn2 {
      max-width: 90%; /* Ensure buttons scale down */
    width: auto;
    border: 3px solid black;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 50px;
    font-weight: 700;
    transition: background 0.3s ease, color 0.3s ease;
    margin: auto;
    display: inline-block;
    background-color: #FF69B4;
    color: #fff;
  }
  
  .btn1 {
    background-color: white;
    color: #FF69B4;
    border-color: #FF69B4;
  }
  
  .btn2 {
    background-color: #FF69B4;
    color: #fff;
    border-color: #fff;
  }
  
  .btn1:hover {
    transform: scale(1.05);
    background-color: #FF69B4;
    color: white;
  }
  
  .btn2:hover {
    transform: scale(1.05);
    background-color: #ffb6ed;
    color: #c20064;
  }
  
  .button:hover {
    transform: scale(1.05);
    background-color: #FF1493;
    color: white;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
    width: 100%;
    padding: 20px 0;
    box-sizing: border-box;
    z-index: 10; /* Ensure the button is in front */
  
  }
  
  /* -----------------------Back to Top Button -----------------------*/
  #back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: #FF69B4;
    color: white;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    display: none;
    z-index: 1000;
  }
  
  #back-to-top:hover {
    transform: scale(1.1);
    background-color: #FF1493;
  }
  
  /* -----------------------Images -----------------------*/
  .image-container {
    display: flex;
    margin: auto;
    width: 5vw;
    height: 5vw;
    overflow: hidden;
  }
  
  .centered-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
    margin: auto;
  }
  
  /* -----------------------Hero -----------------------*/
  .hero {
    position: relative;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(180deg, #FF69B4, #ffe1ec);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
  
  .hero h1 {
    font-size: clamp(2rem, 5vw, 3.5rem); /* Scale based on screen size */
    margin: 0;
  }
  /* -----------------------Introduction -----------------------*/
  .about p {
    width: 50%;
    text-align: center;
    align-items: center;
    font-size: 8em;
  
  }
  
  /* -----------------------Vine Divider -----------------------*/
  .vine-divider {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #ffe1ec, #fff);
    width: 100%;
    height: auto;
    max-width: 100vw; /* Ensure no overflow occurs */
  
  }
  .vine-divider svg {
    width: 100%;
    height: auto;
    max-width: 100vw; /* Ensure no overflow occurs */
  }
  
  
  
  /* -----------------------Featured Projects -----------------------*/
  #featured-projects {
    padding: 50px 20px;
    text-align: center;
    background-color: #ffffff;
    position: relative;
    margin: auto;
    align-items: center;
    width: 100vw;
  }
  
  
  .flower {
    position: relative;
    transition: transform 0.4s ease; /* Smooth scaling effect */
  }
  
  .flower:hover {
    transform: scale(2.5); /* 
    Scale the entire flower */
    translate: 0 100px;
    z-index: 100;
  }
  .flower-name {
      position: absolute;
      left: 50%;
      border: 3px solid #333;
      top: 100px;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
      color: #fff;
      width: 110px;
      height: 50px;
      padding: 5px 10px;
      border-radius: 10%;
      font-size: 14px;
      text-align: center;
      display: none; /* Hidden by default */
      z-index: 1000; /* Ensure it's on top of other elements */
  }
  
  .flower:hover .flower-name {
      display: block; /* Show on hover */
  }
  
  
  /* Spin only the petals on hover */
  .flower:hover .stem {
    opacity: 0%;
  }
  .flower:hover .leaf {
    opacity: 0%;
  }
  
  
  /* Ensure that the stem and leaves are not affected */
  .stem, .leaf {
    transition: none; /* No animation or transform on stem and leaves */
  }
  
  .center {
    transition: none; /* No animation on the center image */
  }
  
  .petal {
    position: absolute;
    border-radius: 50%;
    border: 4px solid #333;
    transition: transform 0.4s ease; /* Smooth animation for petals */
  }
  
  /* -----------------------Flower Modifications -----------------------*/
  
  
  
  .flower-row {
      display: flex;
      flex-wrap: wrap;
      gap: 100px;
      position: relative;
      justify-content: center;
      align-items: flex-end;
  }
  
  .flower {
      position: relative;
      flex: 1 1 100% 100%; /* Adjust based on your layout needs */
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
  }
  
  
  .flower-name {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      padding: 10px 15px;
      border-radius: 5px;
      font-size: 16px;
      text-align: center;
      display: none; /* Hidden by default */
      z-index: 1;
  }
  
  .flower:hover .flower-name {
      display: block; /* Show on hover of flower or flower-row */
  }
  
  
  
  
  .stem {
    width: 5px;
    background-color: rgb(115, 225, 115);
    border: 2px solid green;
    position: relative; /* Maintain relative positioning */
    z-index: -1; /* Keep stems behind other content */
  }
  
  .leaf {
    position: absolute;
    width: 40px;
    height: 20px;
    background-color: green;
    border-radius: 40px;
    border: 3px solid #004600;
  }
  
  /* Responsive Adjustments (Hide stems/leaves on mobile) */
  @media (max-width: 768px) {
    .stem, .leaf {
      display: none; /* Hide stems and leaves on mobile */
    }
  }
  
  
  .center {
    width: 120px;
    height: 120px;
    background-color: rgb(254, 245, 124);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #333;
    position: absolute;
    top: 0px;
    overflow: hidden;
  }
  
  .center img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .petal {
    position: absolute;
    border-radius: 50%;
    border: 4px solid #333;
    top: 30px;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .flower-row {
      flex-direction: column;
      align-items: center;
      gap: 100px;
    }
  }
  @media (max-width: 768px) {
    .stem, .leaf {
      display: none; /* Hide stems and leaves on mobile */
    }
  
    .flower-row {
      flex-direction: column;
      align-items: center;
      gap: 250px;
    }
  }
  /* -----------------------Section Title -----------------------*/
  .section-title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2em;
    animation: slideIn 1s;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 2px;
    background-color: #FF69B4;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
  }
  
  /* -----------------------Footer -----------------------*/
  footer {
    padding: 20px;
    background-color: #FF69B4;
    color: white;
    text-align: center;
    position: relative;
    width: 100vw;
    bottom: 0;
    z-index: 5; /* Footer stays in front of the stems */
  }
  
  .footer-container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
  }
  
  .social-icons {
    margin-top: 5vw;
    margin-bottom: .5vw;
    display: flex;
    gap: 5vw;
  }
  
  .social-icon {
    border: .25vw solid black;
    padding: .5vw;
    background-color: white;
    width: 8vw;
    height: 8vw;
    border-radius: 50%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }
  
  .social-icon:hover {
    transform: scale(1.1);
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .container {
      width: 100%;
      padding: 10px;
    }
  
    nav a {
      margin: 5px;
    }
  
    h1, h2, h3 {
      font-size: 1.5rem;
    }
  
    p, li {
      font-size: 0.9rem;
    }
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
  .experience, .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 20px;
    padding: 20px;
    justify-items: center;
  }
  
  /* Experience and Project Cards */
  .experience-item, .project-item {
    background: #fff;
    padding: 20px;
    margin: 10px;
    border: 3px solid #FF69B4;
    border-radius: 10px;
    width: 100%;
    max-width: 500px;
    box-sizing: border-box;
    text-align: left;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .experience-item:hover, .project-item:hover {
    transform: scale(1.1);
  }
  
  .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 20px;
    object-fit: contain;
  }
  
  .experience-item h3, .project-item h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #FF69B4;
    display: flex;
    align-items: center;
  }
  
  .experience-item p strong, .project-item p strong {
    font-size: 1em;
    color: #555;
    margin-bottom: 10px;
    display: block;
    text-align: left;
  }
  
  .experience-item ul, .project-item ul {
    padding-left: 20px;
    margin: 10px 0;
  }
  
  .experience-item li, .project-item p {
    font-size: 0.95em;
    color: #333;
    margin-bottom: 8px;
    text-align: left;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .experience, .projects {
      grid-template-columns: 1fr;
    }
  
    .experience-item, .project-item {
      max-width: 100%;
    }
  
    .experience-item h3, .project-item h3 {
      font-size: 1.3em;
    }
  
    .icon {
      width: 20px;
      height: 20px;
    }
  }
  
  /* Cute Style for Skills Section */
  #skills {
      margin: 50px auto;
      padding: 0px 50px 70px 50px;
      border: 3px solid #FFB6C1; /* Soft pink border */
      border-radius: 30px;
      box-shadow: 0 6px 12px rgba(255, 182, 193, 0.3); /* Soft pink shadow */
      max-width: 1000px;
      text-align: center;
  }
  
  /* Skills List using Flexbox for left-aligned layout */
  .skills-list {
      list-style-type: none;
      padding: 20px 0 0 0;
      margin: 0;
      display: flex; /* Use Flexbox for layout */
      flex-wrap: wrap; /* Allow the items to wrap to the next line */
      justify-content: flex-start; /* Left-align the bubbles */
      gap: 20px 15px; /* Space between bubbles for even dispersion */
      align-items: center; /* Vertically align the bubbles */
  }
  
  /* Each skill as a bubble */
  .skills-list li {
    background-color: #FF69B4;
  
    /* Pink background */
  
    color: white;
    margin-right: 5px;
    
      font-size: 1em; /*.8 */
      padding: 8px 15px;
      border-radius: 30px; /* Rounded appearance */
      display: inline-block;
      align-items: center;
      justify-content: center;
      border: 2px solid #FF69B4;
      box-shadow: 0 6px 12px rgba(255, 182, 193, 0.5); /* Soft shadow */
      white-space: nowrap; /* Prevent text from breaking */
      min-width: 100px; /* Minimum width for the bubbles */
      max-width: 250px;
      transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  /* Hover effect for each bubble */
  .skills-list li:hover {  
      transform: scale(1.1);
      background-color: #FF69B4;
  }
  
  /* Add icons before each skill */
  .skill-icon {
      width: 25px;
      height: 25px;
      vertical-align: middle;
      margin-right: 10px;
  }
  
  /* Strong text styling for skill categories */
  .skills-list li strong {
      color: #FFF5F9; /* Light text for better readability */
      font-weight: bold;
  }
  