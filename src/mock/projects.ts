import type { Project } from "@/types/project"

export const projects: Project[] = [
    {
        title: "BlogHub",
        descriptions:
        [
            "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
        ],
        image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=640&q=75",
        tags:["Typescript", "React", "SQLAlchemy", "Python", "FastAPI", "Responsive Web Design"]
    },
    {
        title: "Dynamic Memory Allocator",
        descriptions:
        [
            "Constructed a 64-bit struct-based dynamic memory allocator that supports malloc, calloc, realloc, and free functions in C",
            "Boosted space efficiency by reducing internal and external fragmentations through footer elimination, mini-block implementation, and better-fit searching algorithm",
            "Optimized throughput from 100 Kops/s to 16,000 Kops/s using the segregated free list and LIFO insertion policy"
        ],
        image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&w=640&q=75",
        // tags: ["C"],
    },
    {
        title: "Online Interactive Latin Motto APP",
        descriptions:
            [
                "Web-crawled 572 + school mottos and Latin-word dictionaries using Python and stored data in MySQL",
                "Built a mobile application with Django as the backend to support data categorization and transmission; manually edited English and Chinese translations and composed grammar references on the Django admin site",
                "Designed and implemented UI that supports Motto Search, Latin English/Mandarin Dictionary, Favorites, and Grammar using Vue.js to elevate Latin's accessibility for beginners and promoted interactive Latin learning",
                "Launched the App on Google Play and received Authorship of Software Issued by the National Patent Bureau",
            ],
        image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&w=640&q=75",
        tags: ["Python", "Web Crawler", "MySQL", "Django", "Vue"]
    },
]
