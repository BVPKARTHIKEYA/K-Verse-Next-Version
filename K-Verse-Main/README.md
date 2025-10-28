# K-Verse — Karthikeya's Digital Space 🌌

<div align="center">

![K-Verse Banner](https://github.com/user-attachments/assets/f259bc13-06e8-4a82-a6cd-5ef3241d5fcf)

*A personal corner of the web to showcase creativity, skills, and projects*

[![Next.js](https://img.shields.io/badge/Next.js-13+-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC.svg)](https://tailwindcss.com/)

</div>

---

## 📖 Overview

*K-Verse* is more than just a portfolio—it's a curated digital space where Karthikeya shares his journey as a developer, designer, and tech enthusiast. This platform highlights projects, skills, achievements, and ideas in a visually engaging and professional manner.

Built with modern web technologies, K-Verse delivers a seamless, responsive, and interactive experience that showcases the creator's personality and technical expertise.

---

## ✨ Features

- 🎨 *Modern Design* - Clean, responsive UI with smooth animations
- 🚀 *Fast Performance* - Built with Next.js for optimal speed
- 📱 *Mobile Responsive* - Looks great on all devices
- 📧 *Contact Form* - Integrated email functionality with EmailJS
- 🔒 *reCAPTCHA* - Spam protection on contact forms
- 📊 *Analytics Ready* - Google Tag Manager integration
- 🎭 *Interactive Elements* - Lottie animations and marquee effects
- 📝 *Blog Integration* - Fetch articles from dev.to and Medium

---

## 📋 Sections

The portfolio is organized into the following sections:

| Section | Description |
|---------|-------------|
| *🦸 Hero Section* | Eye-catching introduction with animated elements |
| *👤 About Me* | Personal introduction and background story |
| *💼 Experience* | Professional work history and achievements |
| *🛠 Skills* | Technical skills and proficiency levels |
| *🚀 Projects* | Showcase of completed projects and work |
| *🎓 Education* | Academic background and qualifications |
| *🏆 Certifications* | Professional certifications and courses |
| *📞 Contact* | Get in touch through integrated contact form |

---

## 🎬 Live Demo

<div align="center">

### Hero & About Section
![K-Verse Demo 1](https://github.com/user-attachments/assets/b2d14e09-f804-4422-8dbd-af0dbad773c5)

### Projects & Skills Section
![K-Verse Demo 2](https://github.com/user-attachments/assets/cb90f099-50bc-4ad5-a338-a94b810bc430)

### Contact Section
![K-Verse Demo 3](https://github.com/user-attachments/assets/66990f47-c646-4b33-ad37-64d1dd79151b)

</div>

---

## 🛠 Technologies Used

| Category | Technologies |
|----------|-------------|
| *Framework* | Next.js 13+ |
| *Frontend* | React 18+ |
| *Styling* | TailwindCSS, SASS |
| *Animations* | Lottie React |
| *Email Service* | EmailJS |
| *UI Components* | React Icons, React Fast Marquee |
| *Notifications* | React Toastify |
| *Security* | Google reCAPTCHA |
| *Analytics* | Google Tag Manager |

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Git](https://git-scm.com/downloads) - Version control system
- [Node.js](https://nodejs.org/en/download/) - JavaScript runtime (Latest LTS version recommended)

Verify your installations:

bash
node --version
git --version


### Setup Steps

1. *Fork and Clone the Repository*

   Click the fork button at the top right of the page, then:

   bash
   git clone https://github.com/<YOUR_GITHUB_USERNAME>/K-Verse-MAIN.git
   cd K-Verse-MAIN
   

2. *Install Dependencies*

   bash
   npm install
   # or
   yarn install
   

3. *Configure Environment Variables*

   Create a .env.local file from the .env.example template:

   env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_GTM=your_gtm_id
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXT_PUBLIC_RECAPTCHA_SECRET_KEY=your_recaptcha_secret
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
   

4. *Run the Development Server*

   bash
   npm run dev
   # or
   yarn dev
   

5. *Open in Browser*

   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio!

---

## ⚙ Configuration

### Setting Up EmailJS

1. Go to [emailjs.com](https://www.emailjs.com/) and create a free account
2. Create a new email service and template
3. Copy your Service ID, Template ID, and Public Key
4. Add these credentials to your .env.local file

> 📧 *Note*: Free tier includes 200 emails per month

### Setting Up Google reCAPTCHA

1. Visit [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Register a new site with reCAPTCHA v2
3. Copy your Site Key and Secret Key
4. Add them to your .env.local file

### Customizing Your Data

Edit the data files in the utils/data folder to personalize your portfolio:

#### Personal Information (utils/data/personal-data.js)

javascript
export const personalData = {
  name: "Karthikeya Boddeda",
  profile: '/profile.jpg',
  profile1: '/profile1.jpg',
  profile2: '/profile2.jpg',
  profile3: '/profile3.jpg',
  designation: "Full-Stack Developer",
  description: "My name is Karthikeya Boddeda. I am a passionate developer...",
  email: 'boddeda.karthikeya@gmail.com',
  phone: '+91 8074417859',
  
  // Social Links
  github: 'https://github.com/BVPKARTHIKEYA',
  facebook: 'https://www.facebook.com/boddeda.karthikeya/',
  linkedIn: 'https://www.linkedin.com/in/boddeda-venkata-pavan-karthikeya-1a670b255/',
  twitter: 'https://x.com/karth_bodd9274',
  instagram: 'https://www.instagram.com/karthikeya_boddeda/',
  
  // Documents
  resume: "https://github.com/BVPKARTHIKEYA/karthikeya-s-resume/blob/main/final%20resume.pdf",
  
  // Blog Integration
  devUsername: "karthikeya_boddeda",    // For dev.to articles
  mediumUsername: "sunny.penny041"       // For Medium articles
};


#### Other Data Files

- *Projects* - utils/data/projects-data.js
- *Experience* - utils/data/experience-data.js
- *Skills* - utils/data/skills-data.js
- *Education* - utils/data/education-data.js
- *Certifications* - utils/data/certifications-data.js

---

## 📦 Packages Used

| Package | Purpose |
|---------|---------|
| *next* | React framework for production |
| *@emailjs/browser* | Email service integration |
| *lottie-react* | Render Lottie animations |
| *react-fast-marquee* | Smooth scrolling marquee effect |
| *react-icons* | Icon library |
| *react-toastify* | Toast notifications |
| *sass* | CSS preprocessor |
| *tailwindcss* | Utility-first CSS framework |

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [Netlify](https://netlify.com)
3. Connect your repository
4. Configure build settings:
   - Build command: npm run build
   - Publish directory: .next
5. Add environment variables
6. Deploy!

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### How to Contribute

1. *Fork* the repository
2. *Create* a feature branch (git checkout -b feature/amazing-feature)
3. *Commit* your changes (git commit -m 'Add amazing feature')
4. *Push* to the branch (git push origin feature/amazing-feature)
5. *Open* a Pull Request

### Contribution Ideas

- 🎨 Improve UI/UX design
- 🐛 Fix bugs and issues
- ✨ Add new features
- 📝 Improve documentation
- 🌐 Add internationalization
- ♿ Enhance accessibility
- 🎭 Add more animations

---


## 👤 Author

*Karthikeya Boddeda*

- 📧 Email: boddeda.karthikeya@gmail.com
- 📱 Phone: +91 8074417859
- 💻 GitHub: [@BVPKARTHIKEYA](https://github.com/BVPKARTHIKEYA)
- 💼 LinkedIn: [Karthikeya Boddeda](https://www.linkedin.com/in/boddeda-venkata-pavan-karthikeya-1a670b255/)
- 🐦 Twitter: [@karth_bodd9274](https://x.com/karth_bodd9274)
- 📸 Instagram: [@karthikeya_boddeda](https://www.instagram.com/karthikeya_boddeda/)
- 📝 Dev.to: [@karthikeya_boddeda](https://dev.to/karthikeya_boddeda)
- ✍ Medium: [@sunny.penny041](https://medium.com/@sunny.penny041)

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS approach
- EmailJS for email integration
- Lottie for beautiful animations
- The open-source community

---


## 🌟 Support

If you found this project helpful, please consider:

- ⭐ *Starring* the repository
- 🐛 *Reporting* bugs and issues
- 💡 *Suggesting* new features
- 🤝 *Contributing* to the codebase
- 📢 *Sharing* with others

---

<div align="center">

*Made with ❤ by Karthikeya Boddeda*

[⬆ Back to Top](#k-verse--karthikeyas-digital-space-)

</div>