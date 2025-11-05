import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOfficeIcon,
  CalendarDaysIcon,
  FlagIcon,
  MapPinIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Nguyen Tan Loc - AI/ML Engineer',
  description: 'Resume website of Nguyen Tan Loc - AI/ML Engineer and Computer Science graduate from HCMUS',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Nguyen Tan Loc`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an <strong className="text-stone-100">AI/ML Engineer</strong> and a Computer Science graduate from
        <strong className="text-stone-100"> HCMUS</strong>, passionate about advancing my expertise in
        <strong className="text-stone-100"> Computer Vision and Machine Learning</strong> to design data-driven
        solutions that enhance business performance and profitability.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I’m currently <strong className="text-stone-100">seeking full-time opportunities</strong> in AI/ML Engineering,
        where I can apply my skills in artificial intelligence, and data analysis to solve real-world problems.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As a graduate student in Computer Science at HCMUS, I am pursuing a career as an AI/ML Engineer or Data Analyst. 
  I am passionate about developing my expertise in Computer Vision and Machine Learning to design data-driven solutions that 
  enhance business performance and profitability.`,
  aboutItems: [
    {label: 'Location', text: 'Ho Chi Minh City, Vietnam', Icon: MapPinIcon},
    {label: 'Age', text: '22', Icon: CalendarDaysIcon},
    {label: 'Nationality', text: 'Vietnamese', Icon: FlagIcon},
    {label: 'Interests', text: 'AI/ML, Computer Vision, Data Analysis', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Science HCMC', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Bosch Global Software Technologies', Icon: BuildingOfficeIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'NextJS',
        level: 7,
      },
    ],
  },
  {
    name: 'AI/ML',
    skills: [
      {
        name: 'PyTorch',
        level: 9,
      },
      {
        name: 'OpenCV',
        level: 8,
      },
      {
        name: 'Computer Vision',
        level: 9,
      },
      {
        name: 'NLP',
        level: 7,
      },
    ],
  },
  {
    name: 'Development & Deployment',
    skills: [
      {
        name: 'Docker',
        level: 8,
      },
      {
        name: 'FastAPI',
        level: 8,
      },
      {
        name: 'Linux',
        level: 7,
      },
      {
        name: 'Git/GitHub',
        level: 8,
      },
    ],
  },
  {
    name: 'Tools & Frameworks',
    skills: [
      {
        name: 'MLflow',
        level: 7,
      },
      {
        name: 'DVC',
        level: 7,
      },
      {
        name: 'CVAT',
        level: 8,
      },
      {
        name: 'Redis',
        level: 7,
      },
    ],
  },
];

/**
 * Resume section -- Education
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2021 - Present',
    location: 'University of Science HCMC',
    title: 'Bachelor of Computer Science',
    content: (
      <p>
        <strong>GPA: 3.83/4.0</strong>
        <br />
        Focused on AI/ML, Computer Vision, and Data Analysis. Completed undergraduate thesis on "Defensive Strategy for
        Explainability in Deep Neural Networks Under Adversarial Attacks" with a perfect score (10/10), accepted as a
        FULL paper at ICCCI 2025 (Springer CCIS).
      </p>
    ),
  },
  {
    date: 'August 2019 - August 2021',
    location: 'Gia Dinh High School',
    title: 'Science Department',
    content: (
      <p>
        <strong>GPA: 9.03/10</strong>
      </p>
    ),
  },
];

/**
 * Resume section -- Work Experience
 */
export const experience: TimelineItem[] = [
  {
    date: 'November 2024 - May 2025',
    location: 'Bosch Global Software Technologies Company Limited',
    title: 'AI Development Intern (Full Time)',
    content: (
      <ul className="list-disc ml-5">
        <li>
          Developed an icon classification system using YOLO and ViT for automation testing on a robot arm interacting
          with DUT HMI systems, achieving 99% accuracy
        </li>
        <li>
          Deployed an automated labeling system on CVAT using Docker, with separate YOLO and ViT models trained for each
          screen, achieving 95% labeling accuracy
        </li>
        <li>
          Evaluated multiple OCR models for text recognition, including GOT, EasyOCR, and PaddleOCR, and conducted
          comprehensive benchmarking
        </li>
        <li>Developed and tested robot arm automation for HMI screen interactions</li>
        <li>
          Built and deployed an AI service platform using FastAPI and Redis, enabling the team to run and access AI
          models through a unified API
        </li>
        <li>Utilized BERT to detect dynamic components in log files</li>
      </ul>
    ),
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Face Aging Model Using StarGAN',
    description:
      'Developed a generative adversarial network (GAN) that simulates the aging process on facial images. The model transforms facial images across different age groups while maintaining unique features.',
    url: 'https://github.com/dranox/Face-Aging-Modeling',
    image: porfolioImage1,
  },
  {
    title: 'Defensive Strategy for Explainability in Deep Neural Networks under Adversarial Attacks',
    description:
      'Undergraduate Thesis (10/10) - Published at ICCCI 2025. Proposed NODA to protect explanations against adversarial attacks in deep learning models.',
    url: '/public/assets/paper.pdf',
    image: porfolioImage2,
    download: true,
  },
];

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me for opportunities, collaborations, or just to connect!',
  items: [
    {
      type: ContactType.Email,
      text: 'tanlocnguyen1902@gmail.com',
      href: 'mailto:tanlocnguyen1902@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Ho Chi Minh City, Vietnam',
      href: 'https://www.google.com/maps/place/Ho+Chi+Minh+City,+Vietnam',
    },
    {
      type: ContactType.Github,
      text: 'dranox',
      href: 'https://github.com/dranox',
    },
    {
      type: ContactType.LinkedIn,
      text: 'talo1902',
      href: 'https://linkedin.com/in/talo1902',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/dranox'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com/in/talo1902'},
];
