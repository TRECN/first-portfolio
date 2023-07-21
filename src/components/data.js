import { TbBrandCpp, TbBrandJavascript, TbBrandTypescript,TbBrandVscode } from 'react-icons/tb'
import { BiLogoJava,BiLogoFirebase,BiLogoMongodb,BiLogoGit,BiLogoGithub, BiLogoPython, BiLogoHtml5, BiLogoCss3,BiLogoNodejs,BiLogoReact } from 'react-icons/bi'
import {SiExpress,SiPostman, SiSocketdotio}from'react-icons/si'


const data=[
    {
        heading:"Switch-code",
        images:[
            require('../images/Switch-Code/SignUp.png'),
            require('../images/Switch-Code/SignUp.png'),
            require('../images/Switch-Code/Select.png'),
            require('../images/Switch-Code/webdev.png'),
            require('../images/Switch-Code/coding.png'),
        ],
        description:'Switch-code is a coding platform that provide both web dev and online compiler in a single click. ',

        stack:[<BiLogoMongodb/>,<SiExpress/>,<BiLogoReact/>,<BiLogoNodejs/>,<BiLogoFirebase/>],
        git:'https://github.com/TRECN/Final-SwichCode'
    },
    {
        heading:"Face-Meet",
        images:[
            require('../images/FaceMeet/1.jpg'),
            require('../images/FaceMeet/2.jpg'),
            require('../images/FaceMeet/3.jpg'),
            require('../images/FaceMeet/4.jpg'),
            require('../images/FaceMeet/6.jpg'),
            require('../images/FaceMeet/7.jpg'),
        
            
        ],
        description:'Face-Meet is a cutting-edge React Native full stack project that aims to create the immersive video conferencing experience using Socket.io, zegocloud. ',

        stack:[<BiLogoMongodb/>,<SiExpress/>,<BiLogoReact/>,<BiLogoNodejs/>,<SiSocketdotio/>],
        git:'https://github.com/TRECN/FaceMeet-Native'

    },
    {
        heading:"Zomato-clone",
        images:[
            require('../images/Zomato/Zomato-Delivery.png'),
            require('../images/Zomato/Zomato-Dining.png'),
            require('../images/Zomato/Zomato-Night.png'),  
            require('../images/Zomato/Zomato-Delivery.png'),
            require('../images/Zomato/Zomato-Dining.png'),
            require('../images/Zomato/Zomato-Night.png'),   
        ],
        description:'Zomato-clone is the clone of the online food delivery site "Zomato" developed to showcase the working of states and hooks in React',

        stack:[<BiLogoReact/>,<BiLogoHtml5/>,<BiLogoCss3/>],
        git:'https://github.com/TRECN/Zomato-Clone'

    },
    {
        heading:"Task-Cart",
        images:[
            require('../images/TaskCart/Home_TaskCart.png'),
            require('../images/TaskCart/Todo_TaskCart.png'),
            require('../images/TaskCart/Cart_TaskCart.png'),
            require('../images/TaskCart/Movies_TaskCart.png'),
            require('../images/TaskCart/AboutUs_TaskCart.png'),
            require('../images/TaskCart/Contact_TaskCart.png'),  
        ],
        description:'Task-Cart is a multi purpose website that has a Todo app, Shopping cart section and a Movie View section',

        stack:[<BiLogoReact/>,<BiLogoHtml5/>,<BiLogoCss3/>],

        git:'https://github.com/TRECN/taskcart'
    },

]

export default data