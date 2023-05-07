import { Technology } from '@/helpers/technologies';

type DescriptionItem = {
    title: string;
    description: string;
}

export type Job = {
    company: {
        name: string;
        dates: string;
        jobTitle: string;
        location: string;
        technologies: Technology[];
        summary: string;
    };
    responsibilities: DescriptionItem[];
    achievements: DescriptionItem[];
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
        summary: 'summary summary summary',
    },
    responsibilities: [
        {
            title: 'Responsibility 1',
            description: 'some desc ovah here',
        },
    ],
    achievements: [
        {
            title: 'Achievement 1',
            description: 'some desc ovah here',
        },
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
        summary: 'summary summary summary',
    },
    responsibilities: [
        {
            title: 'Responsibility 1',
            description: 'some desc ovah here',
        },
    ],
    achievements: [
        {
            title: 'Achievement 1',
            description: 'some desc ovah here',
        },
    ],
}

export const jobs: Job[] = [procuros, incentiveGames];
