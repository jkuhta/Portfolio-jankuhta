import ROS_pdf from "../../../assets/RINS_Final_report___skupina_CHI_2.pdf";
import ERK2024_pdf from "../../../assets/ERK2024.pdf";
import BodyFat_pdf from "../../../assets/UOZP_mascobe_rokrajher_jankuhta.pdf";
import Bicikelj_pdf from "../../../assets/UOZP_Tekmovanje__Bicikelj___Jan_Kuhta.pdf";
import Outbrain_pdf from "../../../assets/CTR_outbrain_final_report.pdf";

export const projectItems = [
    {
        title: "Advent <br/> of Code",
        modalTitle: "Advent of Code",
        description:
            "A collection of coding challenges completed as part of the Advent of Code event. The challenges cover a wide range of algorithms, data structures, and problem-solving skills across multiple programming languages.",
        projectData: [
            "Implemented daily challenges from Advent of Code 2023 and 2024",
            "Focused on efficient algorithms and clean code",
            "Solved problems involving graphs, dynamic programming, recursion, and parsing",
            "Practiced Python and Java for algorithmic problem-solving",
            "Improved debugging, testing, and code optimization skills"
        ],
        icon: "fa-solid fa-sleigh",
        labels: ["Java", "Python"],
        github_link: "https://github.com/jkuhta/Advent-of-Code",
    },
    {
        title: "Concept Drift in <br/> Image Data Streams",
        modalTitle: "Concept Drift Detection in Image Data Streams Using the GAN Loss Drift Detection Method (GLDD)",
        description:
            "This research paper presents a method for detecting concept drift in image data streams using discriminator loss analysis within a Wasserstein GAN (WGAN) learning loop. The paper introduces the GAN Loss Drift Detection (GLDD) method, which identifies shifts in data distribution through changes in discriminator loss.",
        projectData: [
            "Developed a GAN-based approach for concept drift detection",
            "Focused on image data streams with dynamic data distributions",
            "Exploited discriminator loss for detecting concept drift in WGAN",
            "Achieved high performance with GLDD-KSWIN: precision 0.79, recall 0.90, F1-score 0.84, and latency 41.64",
            "Tested on the MNIST dataset with ten different data distributions",
            "Contributed to the field of incremental learning and generative models"
        ],
        icon: "fa-solid fa-chart-line",
        labels: ["Python", "Deep Learning", "GANs", "Research Paper"],
        report: ERK2024_pdf
    },
    {
        title: "CTR and CVR Prediction",
        modalTitle: "Data Science Competition Paper - CTR & CVR Prediction with Outbrain",
        description:
            "This paper presents collaborative research with Outbrain aimed at improving CTR and CVR prediction for online advertising. We explored various architectures, including Factorization Machines, Deep Neural Networks, and state-of-the-art models like Attention Factorization Machines and DeepFM. A batch skipping approach was also developed, significantly boosting model performance on both CTR and CVR prediction tasks.",
        projectData: [
            "Collaborated with Outbrain to enhance CTR and CVR prediction",
            "Evaluated various architectures: Logistic Regression, Factorization Machines, DeepFM, Deep & Cross Networks",
            "Implemented advanced models such as Attention Factorization Machines and Gated Deep & Cross Network",
            "Developed batch skipping approach to improve model performance",
            "Achieved AUC scores of 0.8380 for CTR and 0.9179 for CVR with batch skipping"
        ],
        icon: "fa-solid fa-chart-bar",
        labels: ["Python", "Deep Learning", "Data Science", "Research Paper"],
        report: Outbrain_pdf,
    },
    {
        title: "BicikeLj <br/> Prediction Model",
        modalTitle: "BicikeLj prediction model",
        description:
            "In this project I created a prediction model for number of bicycles on several public bicycle stations in Ljubljana. For train set I used real Bicikelj history data for timestamps in intervals of 5 minutes.",
        projectData: [
            "Data cleansing, data preprocessing",
            "Data visualization",
            "Feature engineering, Feature selection",
            "Model learning, hyperparameter tuning",
            "Model validation",
            "Prediction on final test set",
        ],
        icon: "fa-solid fa-bicycle",
        labels: ["Python", "Jupyter Notebook"],
        github_link: "https://github.com/jkuhta/BicikeLj-prediction-model",
        website: "",
        report: Bicikelj_pdf,
    },
    {
        title: "ROS TurtleBot <br/> RoboSheriff",
        modalTitle: "ROS TurtleBot RoboSheriff",
        description:
            "In this project we built an intelligent and robust coherent system using ROS and TurtleBot. The robot had to navigate through the poligon, extract information from the environment, process data and find the robber.",
        projectData: [
            "Autonomous control of the mobile platform",
            "Acquiring images and 3D information",
            "Simultaneous mapping and localization (SLAM)",
            "Path planning, obstacle avoidance, approaching",
            "Advanced fine manoeuvring and parking",
            "Detection of faces, circles, 3D rings, posters, 3D cylinders",
            "Recognition of digits, colour, reidentification",
            "Basic manipulation and visual servoing",
            "Speech synthesis, speech recognition, dialogue processing (reading QR codes)",
            "Belief maintenance, reasoning, planning",
        ],
        icon: "fa-solid fa-robot",
        labels: ["ROS", "Python", "C++"],
        github_link: "https://github.com/fri-RINS/ROS-TurtleBot-RoboSheriff",
        website: "",
        report: ROS_pdf,
        // images: "123",
    },
    {
        title: "Website <br/> PNPPLS Clothing",
        modalTitle: "PNPPLS Clothing Website",
        description:
            "In this project I created a website for PNPPLS Clothing. I used React JS. The brand is not existing, only for website developement purposes.",
        projectData: [
            "Frontend web developement using React",
            "Responsive, dynamic webpage",
            "UI/UX design",
            "Deployment on Cloudfare Pages",
        ],
        icon: "fa-solid fa-shirt",
        labels: ["ReactJS", "JavaScript", "HTML", "CSS"],
        github_link: "https://github.com/jkuhta/pnppls-clothing",
        website: "https://pnppls-clothing.pages.dev",
        report: "",
    },
    {
        title: "Excel Manipulator <br/> Freestyle.si",
        modalTitle: "Freestyle.si Excel manipulator",
        description:
            "In this project I created 2 python scripts for manipulating with excel sheets. Demolition and Remaster are two main goals of this project for a specific task with specific excel inputs requested by Freestyle.si",
        projectData: [
            "Excel sheet manipulation using pandas module in python",
            "Simple Web application created with python Flask",
            "simple UI using html, css and javascript",
            "Deployment on Render",
        ],
        icon: "fa-regular fa-file-excel",
        labels: ["Python", "Flask", "HTML", "Javascript", "CSS"],
        github_link: "https://github.com/jkuhta/Freestyle-Excel-manipulator",
        website: "https://freestyle-excel-manipulator.onrender.com",
        report: "",
    },
    {
        title: "Portfolio Website <br/> Jan Kuhta",
        modalTitle: "Portfolio Website - Jan Kuhta",
        description: "In this project I created my own Portfolio with React. ",
        projectData: [
            "Frontend web developement using React",
            "Responsive, dynamic webpage",
            "UI/UX design",
            "Deployment on Cloudfare Pages",
        ],
        icon: "bx bx-window-alt",
        labels: ["React", "HTML", "Javascript", "CSS"],
        github_link: "https://github.com/jkuhta/Portfolio-jankuhta",
        website: "www.jankuhta.com",
        report: "",
    },
    {
        title: "Microservice <br/> Price Comparer",
        modalTitle: "Price Comparer microservice",
        description:
            "In this project we created a microservice for a Price Comparison System. The whole backend was build with Java. Microservice can be used via exposed APIs.",
        projectData: [
            "Java backend developement",
            "Microservice Developement",
            "creating REST APIs",
        ],
        icon: "bx bx-purchase-tag-alt",
        labels: ["Java", "Docker", "PostgreSQL", "REST API", "OpenAPI"],
        github_link: "https://github.com/jkuhta/3d-model-showcase-web",
        website: "",
        report: "",
    },
    {
        title: "Bodyfat % <br/> Prediction Model",
        modalTitle: "BodyFat percentage prediction model",
        description:
            "In this project we created and learned a simple regression prediction model. We used different body measures to predict body fat percentage.",
        projectData: [
            "Data cleansing, data preprocessing",
            "Data visualization",
            "Feature engineering, Feature selection",
            "Model learning, hyperparameter tuning",
            "Model validation",
            "Prediction on final test set",
        ],
        icon: "bx bx-body",
        labels: ["Python", "Jupyter Notebook"],
        github_link: "https://github.com/UOZP-ULFRI/hw-bodyfat",
        website: "",
        report: BodyFat_pdf,
    },
    {
        title: "3D car model <br/> showcase",
        modalTitle: "3D car model showcase",
        description:
            "This website utilizes React.js and Three.js to present a sophisticated showcase of real-world automobiles transformed into accurate 3D models through the application of Photogrammetry techniques.",
        projectData: [
            "Frontend web developement using React",
            "3D modeling in Blender",
            "Photogrametry",
            "Presentation of 3D models on a webpage using Three.js",
        ],
        icon: "bx bxs-car",
        labels: ["Blender", "React", "Three.js"],
        github_link: "https://github.com/jkuhta/3d-model-showcase-web",
        website: "https://3d-model-showcase.pages.dev",
        report: "",
    },
    {
        title: "GIF <br/> Gallery",
        modalTitle: "Gif Gallery",
        description:
            "In this project a creted a few GIFs with Adobe Photoshop and Adobe Illustrator and displayed them in a simple React App. GIFs follow principles of Color Theory.",
        projectData: [
            "Base GIF images creation with Adobe Illustrator",
            "Creating GIFs in Adobe Photoshop",
            "Use of principles of color theory",
            "Frontend web developement using React",
        ],
        icon: "bx bxs-paint",
        labels: ["Adobe Photoshop", "Adobe Illustrator", "React"],
        github_link: "https://github.com/jkuhta/Gif-Gallery",
        website: "https://gif-gallery-2ck.pages.dev",
        report: "",
    },
];
