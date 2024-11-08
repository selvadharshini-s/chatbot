const chatbotData = {
  "initial": {
    "message": "Welcome to the Educational Chatbot! What can I help you with?",
    "options": [
      { "text": "Learn about Courses", "next": "courses" },
      { "text": "Facilities in Campus", "next": "faculty" },
      { "text": "Explore Upcoming Events", "next": "events" },
      { "text": "Get General Information", "next": "general" }
    ]
  },
  "courses": {
    "message": "Which subject area are you interested in?",
    "options": [
      { "text": "Computer Science", "next": "cs_courses" },
      { "text": "Business Administration", "next": "ba_courses" },
      { "text": "Professtional Courses", "next": "professtional_courses" },
      { "text": "Arts and Humanities", "next": "arts_courses" },
      { "text": "Home Science", "next": "home_science_courses" }, 
      { "text": "Back", "next": "initial" }
    ]
  },
  "cs_courses": {
    "message": "What would you like to know about Computer Science courses?",
    "options": [
      { "text": "Course Descriptions", "next": "cs_course_descriptions" },
      { "text": "Faculty Profiles", "next": "cs_faculty" },
      { "text": "Back to Courses", "next": "courses" }
    ],
    
  },
  "cs_course_descriptions": {
    "message": "Here are descriptions of our Computer Science courses:",
    "options": [
      { "text": "Introduction to Programming", "next": "intro_programming_desc" },
      { "text": "Data Structures and Algorithms", "next": "dsa_desc" },
      { "text": "Back to Computer Science", "next": "cs_courses" }
    ],
    
  },
  "intro_programming_desc": {
    "message": "This course covers the fundamentals of programming, including variables, data types, control flow, and basic algorithms.",
    "options": [
      { "text": "Back to Course Descriptions", "next": "cs_course_descriptions" }
    ],
   
  },
  "dsa_desc": {
    "message": "This course explores essential data structures like arrays, lists, stacks, queues, trees, and graphs, along with algorithms for manipulating and searching these structures.",
    "options": [
      { "text": "Back to Course Descriptions", "next": "cs_course_descriptions" }
    ],
     
  },
  "cs_faculty": {
    "message": "Meet our Computer Science faculty:",
    "options": [
      { "text": "Aided-Professor [Mrs.Jayanthi]", "next": "faculty_profile_1" }, // Link to faculty profile 
      { "text": "UnAided-Professor [Mrs.Akila]", "next": "faculty_profile_2" },
      { "text": "Back to Computer Science", "next": "cs_courses" }
    ],
    
  },
  "faculty_profile_1": {
    "message": "Dr.S.K.Jayanthi, M.Sc., P.G.D.C.A., M. Phil., Ph.D.,Principal & Head teaches one of the core.", 
    "options": [
      { "text": "Back to Computer Science Faculty", "next": "cs_faculty" }
    ],
     
  },
  "faculty_profile_2": {
    "message": "Dr.S.Akila, MCA., M.Phil., Ph.D.,Assistant Professor & Head teaches one of the core.", 
    "options": [
      { "text": "Back to Computer Science Faculty", "next": "cs_faculty" }
    ],
     
  },
  "ba_courses": {
    "message": "Our Business Administration courses offer a comprehensive understanding of business principles.",
    "options": [
      { "text": "Back to Courses", "next": "courses" }
    ],
     
  },
  "professtional_courses": {
    "message": "Our Professtional course MCA provide hands-on experience in various technologies. The Director of the M.C.A. program at Vellalar College for Women (VCW) is Mr. N. SenthilKumaran. He has an M.C.A., M.Phil., and Ph.D.",
    "options": [
      { "text": "Back to Courses", "next": "courses" }
    ],
     
  },
  "arts_courses": {
    "message": "Our Arts and Humanities courses are Bachelor of Computer Applications (BCA), Bachelor of Business Administration (BBA), Bachelor of Commerce,Master of Arts (MA) which foster creativity and critical thinking.",
    "options": [
      { "text": "Back to Courses", "next": "courses" }
    ],
   
  },
  "home_science_courses": {
    "message": "Our Home Science courses focus on...",
    "options": [
      { "text": "Nutrition", "next": "nutrition_courses" },
      { "text": "Socialogy", "next": "textiles_courses" },
      { "text": "Back to Courses", "next": "courses" }
    ],
  
  },
  "nutrition_courses": {
    "message": "Our Nutrition courses cover...",
    "options": [
      { "text": "Back to Home Science Courses", "next": "home_science_courses" }
    ],
    
  },
  "textiles_courses": {
    "message": "Our Sociology courses explore...",
    "options": [
      { "text": "Back to Home Science Courses", "next": "home_science_courses" }
    ],
    
  },
  "faculty": {
    "message": "Classrooms:Modern, well furnished and airy classroom with latest teaching aids & College Office,Kasturba Gandhi Auditorium,Conference, Mini Conference and Seminar, SCS, NRI Halls,Transport(Bus facilities),Hostel,Sports Area,Parking Area",
    "options": [
      { "text": "Back", "next": "initial" }
    ],
    
  },
  "events": {
    "message": "Upcoming events at Vellalar College for Women:",
    "options": [
      { "text": "Annual College Day", "next": "event_1" },
      { "text": "Guest Lecture Series", "next": "event_2" },
      { "text": "Back", "next": "initial" }
    ],
    
  },
  "event_1": {
    "message": "The Annual College Day will be held on...",
    
    "options": [
      { "text": "Back to Events", "next": "events" }
    ],
    
  },
  "event_2": {
    "message": "The Guest Lecture Series will feature...",
    "options": [
      { "text": "Back to Events", "next": "events" }
    ],
    
  },
  "general": {
    "message": "For general inquiries, please contact us at principalvcw@gmail.com or  0424 224 4101.",
    "options": [
      {"text": "Images", "next": "images"},
      {"text": "Videos", "next": "videos"},
      { "text": "Back", "next": "initial" }
    ],
    "media": "www.youtube.com/@vellalarcollegeforwomenero8480" 
  },
       "images": {
         "media": "https://www.vcw.ac.in/wp-content/uploads/2022/04/vcw-home-banner-new.jpg",
          
         "options": [
           { "text": "Back to General", "next": "general" }
         ],

       },

  "videos": {
     
    "media": "https://www.youtube.com/embed/3jxByRroPUQ",
    
     "options": [
       { "text": "Back to General", "next": "general" }
     ],

   },
};
let currentStep = 'initial'; // Keep track of the current step
function displayMessage(message, className, mediaUrl = null) {
  const chatBody = document.getElementById('chat-body');
  const messageElement = document.createElement('div');
  messageElement.className = `chat-message ${className}`;
  if (mediaUrl) { 
    if (mediaUrl.startsWith('https://www.youtube.com/embed/')) {
      // Handle YouTube embeds
      messageElement.innerHTML = `<div class="message"><iframe width="100%" height="200" src="${mediaUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`; 
    } else if (mediaUrl.endsWith('.jpg') || mediaUrl.endsWith('.png') || mediaUrl.endsWith('.gif')) {
      messageElement.innerHTML = `<div class="message"><img src="${mediaUrl}" alt="Course Image"></div>`;
    } else if (mediaUrl.endsWith('.mp4') || mediaUrl.endsWith('.webm')) {
      messageElement.innerHTML = `<div class="message"><video controls width="300" height="200" src="${mediaUrl}"></video></div>`;
    }
  } else {
    messageElement.innerHTML = `<div class="message">${message}</div>`;
  }
  chatBody.appendChild(messageElement); 
  chatBody.scrollTop = chatBody.scrollHeight;
}
function displayOptions(options) {
  const buttonGroup = document.getElementById('button-group');
  buttonGroup.innerHTML = '';
  options.forEach(option => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = option.text;
    buttonElement.addEventListener('click', () => {
      handleOptionClick(option.next);
    });
    buttonGroup.appendChild(buttonElement);
  });
}
function handleOptionClick(nextStep) {
  currentStep = nextStep; // Update the current step
  const currentData = chatbotData[nextStep];
  const mediaUrl = currentData.media; // Access the media URL directly
  displayMessage(currentData.message, 'bot-message', mediaUrl);
  displayOptions(currentData.options);
}
function toggleChat() { 
  const chatContainer = document.getElementById('chat-container');
  if (chatContainer.style.display === 'none') {
    chatContainer.style.display = 'block';
    handleOptionClick('initial'); 
  } else {
    chatContainer.style.display = 'none';
  }
}
// Initial setup (hide chat initially)
const chatContainer = document.getElementById('chat-container');
chatContainer.style.display = 'none'; 
