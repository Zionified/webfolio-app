import type { Project } from "@/types/project"
import LatinImg from "@/assets/images/Latin-motto.jpg"
export const projects: Project[] = [
    {
        title: "Portfolio Nexus: Web Portfolio and Administration Hub",
        name: "portfolio",
        descriptions:
        [
            "Developed and deployed a well-functional single page web portfolio application using React (TypeScript) and an admin site using Ant Design with integrated Markdown editor to manage dynamic web page data",
            "Incorporated responsive design, CSS animation, dynamic theme, and a rolling bullet curtain feature for skills in portfolio page",
            "Designed a well-structured database schema utilizing Python-based ORM library SQLAlchemy to ensure efficient data storage and management",
            "Implemented the backend functionality using FastAPI framework to enable smooth data retrieval, manipulation, and secure authentication; utilized Axios for seamless communication with the backend API",
        ],
        image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=640&q=75",
        tags:["Typescript", "React", "SQLAlchemy", "Python", "FastAPI", "Responsive Web Design"]
    },
    {
        title: "COMPASS (COntext Marking and starter PhrAses for Synchronized Socializing)",
        name: "compass",
        descriptions:
        [
            "Collaborated in the implementation of a web-based interface designed to facilitate real-time online communication for users with speech-generating disabilities",
            "Performed text cleaning and stop words removal on 3940 dialogue scripts from switchboard dialogue act corpus using Python",
            "Refined keyword extraction model KeyBERT and evaluated its performance on the switchboard dataset using cosine word embedding similarity; achieved 78% average accuracy in extracting conversation topics",
            "Developed visualization pipelines in R for analyzing user satisfaction, interface usability, and feature effectiveness based on the results of the user study on 6 pairs",
        ],
        image: "https://scontent.fagc2-1.fna.fbcdn.net/v/t39.30808-6/299981593_451795230297859_3289026810608075502_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Ii73pfZsIvsAX8qLToJ&_nc_ht=scontent.fagc2-1.fna&oh=00_AfAi6ndNRPlK4kmKmMKsTIyBTimP1cFMRFL7ox5Z0xH3TA&oe=64875033",
        tags: ["Python", "KeyBERT", "R", "Data Visualization"],
    },
    {
        title: "LatinGuru: Motto - Online Interactive Latin Motto APP",
        name: "latinguru",
        descriptions:
            [
                "Web-crawled 572 + school mottos and Latin-word dictionaries using Python and stored data in MySQL",
                "Built a mobile application with Django as the backend to support data categorization and transmission; manually edited English and Chinese translations and composed grammar references on the Django admin site",
                "Designed and implemented UI that supports Motto Search, Latin English/Mandarin Dictionary, Favorites, and Grammar using Vue.js to elevate Latin's accessibility for beginners and promoted interactive Latin learning",
                "Launched the App on Google Play and received Authorship of Software Issued by the National Patent Bureau",
            ],
        image: "https://super.abril.com.br/wp-content/uploads/2018/07/531e320b9827682eba0002bfmundoestranho-147-55-ed-1.jpeg",
        tags: ["Python", "Web Crawler", "MySQL", "Django", "Vue"]
    },
    {
        title: "Dynamic Memory Allocator",
        name: "malloc",
        descriptions:
        [
            "Constructed a 64-bit struct-based dynamic memory allocator that supports malloc, calloc, realloc, and free functions in C",
            "Boosted space efficiency by reducing internal and external fragmentations through footer elimination, mini-block implementation, and better-fit searching algorithm",
            "Optimized throughput from 100 Kops/s to 16,000 Kops/s using the segregated free list and LIFO insertion policy"
        ],
        image: "https://cdn-icons-png.flaticon.com/512/2630/2630878.png",
        tags: ["C"],
    },
]
