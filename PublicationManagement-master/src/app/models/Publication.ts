export class Publication {
    publication_id: number;
    user_id: number;
    title: string;
    month: number;
    year: number;
    DOI?: string;
    link?: string;
    publisher_id?: number;
    publication_type?: string;
    type?: string;
    label?: string;
    abstract?: string;

}

export class PublicationInput {
    title: string;
    month?: number;
    year?: number;
    DOI: string;
    link: string;
    publication_type?: string;
    pages?: string;
    label?: string;
    type?: string;
}

export class JournalArticleSpecificInput {
    journal_id?: number;
    pages: string;
    volume: string;
}

export class ConferenceArticleSpecificInput {
    proceeding_id?: number;
    pages: string;
}

export class BookChapterSpecificInput {
    book_id?: number;
    edition: string;
    volume: string;
}

export class ProceedingSpecificInput {
    conference_id?: number;
    impact_factor: string;
}
