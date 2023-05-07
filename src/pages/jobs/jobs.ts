import { Technology } from '@/helpers/technologies';

export type Job = {
    company: {
        name: string;
        dates: string;
        jobTitle: string;
        location: string;
        technologies: Technology[];
    };
    summary: string;
    responsibilities: string[];
    achievements: string[];
}

const incentiveGames: Job = {
    company: {
        name: 'Incentive Games',
        dates: 'May 2020 - December 2021',
        jobTitle: 'Full Stack Developer',
        location: 'UK (Remote)',
        technologies: [
            Technology.React,
            Technology.Typescript,
            Technology.Jest,
            Technology.Node,
            Technology.SQL,
            Technology.AWS,
        ],
    },
    summary: 'I started at the company when I was a graduate. It was at the early startup stage where there was only about 6 people in the company. From there I grew with the company, getting more and more responsibility working on their suite of games.',
    responsibilities: [
        '',
    ],
    achievements: [
        'something',
    ],
}

const procuros: Job = {
    company: {
        name: 'Procuros Gmbh',
        dates: 'January 2022 - May 2023',
        jobTitle: 'Full Stack Developer',
        location: 'Germany (Remote)',
        technologies: [
            Technology.React,
            Technology.Typescript,
            Technology.Jest,
            Technology.PHP,
            Technology.Laravel,
            Technology.PHPUnit,
            Technology.Docker,
            Technology.AWS,
            Technology.GoogleAppScript,
        ],
    },
    summary: 'summary summary summary',
    responsibilities: [
        'something',
    ],
    achievements: [
        'something',
    ],
}

export const jobs: Job[] = [procuros, incentiveGames];
