import type { Project } from "@/types/project"

export const projects: Project[] = [
    {
        title: "Build a Spotify Connected App",
        description:
            "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
        image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=640&q=75",
    },
    {
        title: "Spotify Profile",
        description:
            "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
        image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&w=640&q=75",
        starCount: 547,
        tags: ["React", "Express", "Spotify API", "Heroku"]
    },
    {
        title: "Halcyon Theme",
        description:
            "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
        image: "https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&w=640&q=75",
        installCount: 100,
    },
]
