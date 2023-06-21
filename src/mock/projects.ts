import type { Project } from "@/types/project"
import LatinImg from "@/assets/images/Latin-motto.jpg"
export const projects: Project[] = [
    {
      "id": 2,
      "name": "portfolio",
      "title": "Portfolio Nexus: Web Portfolio and Administration Hub",
      "image": "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
      "description": "Developed and deployed a well-functional single page web portfolio application using React (TypeScript) and an admin site using Ant Design with integrated Markdown editor to manage dynamic web page data\nIncorporated responsive design, CSS animation, dynamic theme, and a rolling bullet curtain feature for skills in portfolio page\nDesigned a well-structured database schema utilizing Python-based ORM library SQLAlchemy to ensure efficient data storage and management\nImplemented the backend functionality using FastAPI framework to enable smooth data retrieval, manipulation, and secure authentication; utilized Axios for seamless communication with the backend API",
      "tags": [
        "Python",
        "SQLAlchemy",
        "FastAPI",
        "Responsive Web Design",
        "React",
        "Typescript"
      ],
      "github": "",
      "starCount": 0,
      "installCount": 0,
    },
    {
      "id": 4,
      "name": "latinguru",
      "title": "LatinGuru: Motto - Online Interactive Latin Motto APP",
      "image": "https://super.abril.com.br/wp-content/uploads/2018/07/531e320b9827682eba0002bfmundoestranho-147-55-ed-1.jpeg",
      "description": "Web-crawled 572 + school mottos and Latin-word dictionaries using Python and stored data in MySQL\nBuilt a mobile application with Django as the backend to support data categorization and transmission; manually edited English and Chinese translations and composed grammar references on the Django admin site\nDesigned and implemented UI that supports Motto Search, Latin English/Mandarin Dictionary, Favorites, and Grammar using Vue.js to elevate Latin's accessibility for beginners and promoted interactive Latin learning\nLaunched the App on Google Play and received Authorship of Software Issued by the National Patent Bureau",
      "tags": [
        "Python",
        "MySQL",
        "Django",
        "Vue",
        "React"
      ],
      "github": "",
      "starCount": 0,
      "installCount": 0,
    }
  ]