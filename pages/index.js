import Layout from "../components/Layout";
import { Component } from "react";
import fetch from "isomorphic-unfetch";

export default class index extends Component {

    state = {
        user: null
    };

    static async getInitialProps() {
        const res = await fetch("https://api.github.com/users/Think91");
        const data = await res.json();

        // we must return an object to be used for props
        return { user: data };
    }
    render() {
        const { user } = this.props;
        return (
            <Layout 
                title="I'm Think"
                description="a full-stack web developer."
                img='/static/fractalmaster.png'
                img_max_width='50vw'
                img_max_height='50vh'
                active='about'
            >
                <div className='centered-column'>
                    <img className='upside-down home-story-1' src='/static/fractalmaster.png' />
                    <img className='avatar' src={user.avatar_url} />
                    <h2>Hi!</h2>
                    <p>
                        Exceptionally creative and dependable Web Developer with a stellar superbwork ethic. Broadly and deeply knowledgeable in a wide variety of computer languages as well as the principles and techniques of website construction and maintenance. 
                        Hard-working web developer with a flair for creating elegant solutions in the least amount of time. Valuable team member, anthusiastic about building world class web applications. 
                        Passionate about software architecture and cloud computing.
                    </p>
                    


                </div>

                <style jsx>
                {`
                    .upside-down {
                        transform: rotate(180deg);
                    }
                    .home-story-1 {
                        max-width: 10vw;
                    }
                    .avatar {
                        max-height: auto;
                        height: auto;
                        max-width: 35vw;
                        margin: 2rem 0rem;
                        border-radius: 100%;
                        -webkit-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                        -moz-box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                        box-shadow: -1px 3px 10px 0px rgba(0,0,0,0.75);
                    }
                    p {
                        line-height: 2rem;
                        max-width: 35rem;
                        margin: 0px 1rem;
                        text-align: center;
                    }
                    iframe {
                        margin-top: 4rem;
                    }
                    .desktop {
                        display: none;
                    }
                    @media only screen and (min-width: 468px) {
                        .avatar {
                            max-width: 10vw;
                        }
                        .mobile {
                            display: none;
                        }
                        .desktop {
                            display: flex;
                        }
                    }
                `}
                </style>
            </Layout>
        );
    }
}
