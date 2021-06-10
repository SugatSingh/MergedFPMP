import { Author } from './Author';

export class Journal {
    authors: Author[];
    userId: number;
    publication: string;
    title: string;
    editor: string;
    volume: number;
    ISSN: string;
    createdAt: Date;
}

export class Proceeding {
    authors: Author[];
    userId: number;
    publication: string;
    title: string;
    editor: string;
    address: string;
    ISSN: string;
    createdAt: Date;
}

export class Report {
    authors: Author[];
    userId: number;
    department: string;
    title: string;
    reportType: string;
    editor: string;
    institute: string;
    ISSN: string;
    createdAt: Date;
}