import React from 'react';
import './About.scss';

const yDiff = (year: number, month: number, day: number): number => {
    return Math.abs(new Date(Date.now() - new Date(year, month, day).getTime()).getUTCFullYear() - 1970);
}

const About: React.FC = () => {
    return (
        <section className="About">
            <h3>US-based entrepeneur, software architect and full-stack engineer.</h3>
            <p> <i>&#8227;</i> {yDiff(2013, 5, 30)} years of small business administration.</p>
            <p> <i>&#8227;</i> {yDiff(2013, 12, 4)} - {yDiff(2010, 12, 4)}+ years of personal software development. Languages used in education: C/C++, Java, Python2/3</p>
            <p> <i>&#8227;</i> {yDiff(2016, 7, 30)}+ years experience in professional full-stack development (Python3|JavaScript).</p>

            <h4> Currently seeking full-time employment. Available for remote and on-site positions, open to relocating.</h4>
            <p> Please e-mail me at: ben@niftlabs.io, for any hiring, contract, or collaborative inquiries.</p>
        </section >
    );
}

export default About;