import Layout from "../components/Layout";

export default () => (
    <Layout 
        title='Projects'
        description="some of the technologies I've used"
        active='projects'   
        img='/static/fruitbanner.png'
        img_max_height='auto'
        img_max_width='90%' 
        className='centered-column'
    >
        <div className='onlinestore proj-background centered-column'>
            <img src='/static/shelf.png'/>
            <h2>Online Store</h2>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                My online store is a platform that allows you to shop and have your items delivered at your convinience.
            </p>
            <h3>Front-end: React</h3>
            <h3>Back-end: Node & MongoDB</h3>
        </div>
        <div className='weatherapp proj-background centered-column'>
            <img src='/static/projects/weatherapp.png' />
            <img src='/static/shelf.png'/>
            <h2>Weather Checker</h2>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                The weatherapp allows you to find out your weather conditions by using the Google Maps API.
            </p>
            <h3>Front-end: React</h3>
            <h3>Back-end: Node & MongoDB</h3>
        </div>
        <div className='reactcalc proj-background centered-column'>
            <img src='/static/projects/reactcalc.png' />
            <img src='/static/shelf.png'/>
            <h2>Calculator</h2>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                I built this calculator with the great help of React.
            </p>
            <h3>Front-end: React</h3>
        </div>



        <style jsx>
        {`  
            h3 {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                width: 100%;
            }
            .onlinestore {
                background: var(--light);
                padding: 5rem 0rem;
                width:100%;
            }
            .onlinestore > h2{
                background: #6b0b0b;
                display: flex;
                justify-content: center;
                color: #f0edef;
                padding: 1rem;
                font-weight: 800;
                text-align: center;
            }
            .onlinestore > h4 > a {
                text-decoration: none;
                background: #6b0b0b;
                color: #f0edef;
                padding: 1rem;
                font-size: 2.5rem;
                font-weight: 800;
                -webkit-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
            }
            .onlinestore > h4 > a:hover {
                background: #f0edef;
                color: #6b0b0b;
            }
            .onlinestore > h3 {
                color: #f0edef;
            }
            .onlinestore > p {
                color: #f0edef;
                line-height: 2rem;
                max-width: 35rem;
                margin: 0px 1rem;
            }
            .weatherapp {
                background: #161e31;
                padding: 5rem 0rem;
                width:100%;
            }
            .weatherapp > h2 {
                background: #dbdce1;
                display: flex;
                justify-content: center;
                color: #161e31;
                padding: 1rem;
                font-weight: 800;
                text-align: center;
            }
            .weatherapp > h4 > a {
                text-decoration: none;
                background: #dbdce1;
                color: #161e31;
                padding: 1rem;
                font-size: 2.5rem;
                font-weight: 800;
                -webkit-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
            }
            .weatherapp > h4 > a:hover {
                background: #161e31;
                color: #dbdce1;
            }
            .weatherapp > p {
                color: #f0edef;
                line-height: 2rem;
                max-width: 35rem;
                margin: 0px 1rem;
            }
            .weatherapp > h3 {
                color: #dbdce1;
            }
            .reactcalc {
                background: #49494d;
                padding: 5rem 0rem;
                width:100%;
            }
            .reactcalc > h2 {
                background: #db890f;
                display: flex;
                display: flex;
                justify-content: center;
                color: #000000;
                padding: 1rem;
                font-weight: 800;
                text-align: center;
            }
            .reactcalc > h4 > a {
                text-decoration: none;
                background: #db890f;
                color: #000000;
                padding: 1rem;
                font-size: 2.5rem;
                font-weight: 800;
                -webkit-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
            }
            .reactcalc > h4 > a:hover {
                background: #000000;
                color: #db890f;
            }
            .reactcalc > p {
                color: #f0edef;
                line-height: 2rem;
                max-width: 35rem;
                margin: 0px 1rem;
            }
            .reactcalc > h3 {
                color: #db890f;
            }
            .proj-background > img {
                width: 90%;
                height: auto;
            }
            @media only screen and (min-width: 468px) {
                .proj-background > img {
                    width: 50%;
                }
            }
        `}
        </style>
    </Layout>
)