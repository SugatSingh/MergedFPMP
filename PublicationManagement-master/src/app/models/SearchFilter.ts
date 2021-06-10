export class SearchFilter {
    journal?: Journal;
    range?: Range;
    department?: string;
    type?: string;
}
interface Journal {
    journal_name: string;
    year: number;
    volume: string;
    issue: string;
    pages: string;
}
interface Range {
    start: Date;
    end: Date;
}