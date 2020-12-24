import React, { Component } from 'react';
import './Projects.scss';

interface Project {
    name: string,
    description: string,
    language: string,
    updated: string,
    url: string
};

const ProjectCard: React.FunctionComponent<Project> = (props) => {
    return (
        <div>
            <h5><a href={props.url}>{props.name}</a></h5>
            <p className="projectLang"><span className={'repolang repolang-' + props.language}></span>{props.language}</p>
            <p className="update">{props.updated}</p>
            <br />
            <p>{props.description}</p>
            <br />
        </div>
    );
}

interface ProjectsProps {
    displayCount: number
}

interface ProjectsState {
    reposFetched?: boolean
}

export default class Projects extends Component<ProjectsProps, ProjectsState> {

    private repos: Project[];

    constructor(props: any) {
        super(props);
        this.repos = [];
        this.state = {
            reposFetched: false
        };
        this.setState({ reposFetched: false });
    }

    componentWillMount() {
        fetch('https://api.github.com/users/b14s/repos?type=all?sort=updated', { headers: { 'Accept': 'application/vnd.github.v3+json' }, method: 'GET' }).then((res) => res.json()).then((data) => {
            data.map((arr: any) => {
                console.log(arr);
                let tmp: Project = { name: arr.name, description: arr.description, language: arr.language, updated: arr.updated_at, url: arr.html_url };
                this.repos.push(tmp);
                return 0;
            });
        }).then(() => this.setState({ reposFetched: true }));
    }

    render() {
        const reposFetched = this.state.reposFetched;
        const displayCount = this.props.displayCount;
        const repos = this.repos;
        const range: number[] = [...Array(displayCount).keys()].map((i: number) => i + 1);
        return (
            <section className="Projects">
                <h1>Latest Github activity:</h1>
                {reposFetched && repos ? (
                    <>
                        <ul>
                            {range.map((i) =>
                                (i <= repos.length && i <= 10) && (
                                    <ProjectCard key={i.toString()} name={repos[repos.length - i].name} updated={repos[repos.length - i].updated.substr(0, 10)} description={repos[repos.length - i].description} language={repos[repos.length - i].language} url={repos[repos.length - i].url}></ProjectCard>
                                )
                            )}
                        </ul>
                        <a href="https://github.com/b14s">More on Github...</a>
                    </>
                ) : (
                        <div id="projectsLoading">Loading...</div>
                    )
                }
            </section>
        );
    }
}