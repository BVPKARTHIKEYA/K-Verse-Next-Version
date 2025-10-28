import gift from "@/public/lottie/gift.json";
import robot from "@/public/lottie/robot.json";
import globe from "@/public/lottie/globe.json";
import control from "@/public/lottie/control.json";

export const projectsData = [    
    
       {
    id: 1,
    title: 'Email Spam Detection with Gmail Integration',
    name: 'Email Spam Detection with Gmail Integration',
    domain: 'Machine Learning ',

    description: 'This project focuses on detecting spam emails in a Gmail account using machine learning techniques. It involves integrating Gmail API to securely fetch emails, preprocessing email content, and classifying messages as spam or not using NLP and predictive models. The web interface allows users to view, filter, and manage emails efficiently while providing real-time spam detection alerts. I worked on both backend email analysis logic and frontend development for a responsive, user-friendly experience.',
    tools: ['Python', 'Keras', 'NLTK', 'Gmail API','OAuth 2.0','TensorFlow','NLTK'],
    role: 'Machine Learning Engineer',

    code: 'https://github.com/BVPKARTHIKEYA/Email-Spam-Detection-with-Gmail-Integration',
    demo: '/Project-4.png', 
    lottie: globe,
},

  
    {
        id: 2,
        title: 'Steganography',
        name: 'Cloak-Gift',
        domain: 'Cyber Security',
        description: 'I developed Cloak-Gift, a secure and interactive steganography web app that hides messages inside images using Unicode binary, Morse code, and XOR encryption. Designed with a playful “gift box” metaphor, the app offers an intuitive UI where users encrypt messages like wrapping gifts and decrypt them like unwrapping surprises—all built using HTML, CSS, and JavaScript.',
        tools: ['HTML','CSS','JavaScript','Unicode Binary Encoder','Morse Code Binary Encoder','XOR Cipher','Canvas/Image Processing'],
        role: 'Full Stack Developer',
        code: 'https://cloak-gifts.netlify.app/',
        demo: '/Project-2.png',
        lottie: gift,
    },
   
    {
    id: 3,
    title: 'Movie Recommendation System',
    name: 'Movie-Mentor',
    domain: 'Data Science & Machine Learning',
    description: 'Developed an intelligent Movie Recommendation System that suggests personalized movie choices based on user preferences and viewing history. Implemented collaborative and content-based filtering techniques using Python, Pandas, and Scikit-learn to deliver accurate and efficient recommendations. Integrated a Flask-based web interface for seamless user interaction and deployed the model for real-time predictions. Achieved a 90% accuracy rate in user satisfaction by optimizing cosine similarity and TF-IDF algorithms.',
    tools: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'NumPy','ast'],
    role: 'Machine Learning Developer',
    code: 'https://github.com/BVPKARTHIKEYA/Movie-Mentor',
    demo: '/project-3.jpg',
    lottie: control,
}

]