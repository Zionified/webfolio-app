import type { Experience } from "@/types/experience"

export const experiences: Experience[] = [
    {
        id: 2,
        name: "guangzhou",
        timeline: "June 2019-March 2021",
        roles: ["Research Assistant"],
        company: "Guangzhou Intelligence Electrical Technology Company, Ltd. ",
        description:
            "Used LabelImg to manually label and classify 1271 sample bird nest images taken by drones as training and testing dataset\nAugmented data through mirroring, rotation, Gaussian blur, pixel removal using PyTorch, resized images, and labeled regions\nEvaluated model's performance using Mean Average Precision (MAP), successfully raising 10+% accuracy rate and boosting 80 % processing efficiency\nPublished 10+ pages report in IEEE Access Journal (Volume: 7); granted National Patent for Technological Invention",
        tags: ["Python", "Data Processing", "LabelImg", "PyTorch"],
    },
    {
        id: 1,
        name: "robot",
        timeline: "May 2023-Present",
        roles: [
            "Research Assistant",
            "Summer Undergraduate Research Apprenticeship",
        ],
        company: "Robotics Institute at CMU",
        description:
            "Engineer a novel approach to incorporate physics constraints with computer vision algorithm NeRF (Neural Radiance Fields) to accurately predict the state of cloth-like objects under manipulation in biomedical applications\nDesign and implement script using Blender Python API to automatically generate 120+ simulation scenes in Blender for algorithm evaluation; incorporated randomized cloth size, texture, falling heights, and ground objects\nCombine Real-Time High-Resolution Background Matting model with COLMAP pipeline using Python to generate synthetic image dataset with subtracted background and JSON file of camera Field of Views (FOV) and relative poses\nLeverage AprilTag to recover objects' world frame translation and scale to improve robots' perception capabilities",
        tags: ["Python", "NeRF", "Blender", "COLMAP", "AprilTag"],
    },
]
