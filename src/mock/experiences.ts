import type { Experience } from "@/types/experience"

export const experiences: Experience[] = [
    {
        range: "May 2023-Present",
        roles: [
            "Research Assistant",
            "Summer Undergraduate Research Apprenticeship",
        ],
        company: "Robotics Institute at CMU",
        descriptions: [
            "Engineer a novel approach to incorporate physics constraints with computer vision algorithm NeRF (Neural Radiance Fields) to accurately predict the state of cloth-like objects under manipulation in biomedical applications",
            "Design and implement script using Blender Python API to automatically generate 120+ simulation scenes in Blender for algorithm evaluation; incorporated randomized cloth size, texture, falling heights, and ground objects",
            "Combine Real-Time High-Resolution Background Matting model with COLMAP pipeline using Python to generate synthetic image dataset with subtracted background and JSON file of camera Field of Views (FOV) and relative poses",
            "Leverage AprilTag to recover objects' world frame translation and scale to improve robots' perception capabilities",
        ],
        tags: ["NeRF", "Blender", "COLMAP ", "Python", "AprilTag"],
    },
    {
        range: "Feb-May 2023",
        roles: ["Research Assistant"],
        company: "Human-Computer Interaction Institute at CMU",
        descriptions: [
            "Collaborated in the implementation of COMPASS (COntext Marking and starter PhrAses for Synchronized Socializing), a web-based interface designed to facilitate real-time online communication for users with speech-generating disabilities",
            "Performed text cleaning and stop words removal on 3940 dialogue scripts from switchboard dialogue act corpus using Python",
            "Finetuned keyword extraction model KeyBERT and evaluate its performance on switchboard dataset using cosine word embedding similarity; achieved 78% average accuracy in extracting conversation topics",
            "Developed visualization pipelines in R for analyzing user satisfaction, interface usability, and feature effectiveness based on the results of the user study on 6 pairs",
        ],
        tags: ["Python", "KeyBERT", "R"],
    },
]
