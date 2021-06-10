import { Publication } from './Publication';

export class BookChapter extends Publication {
    book_id: number;
    book_title: string;
    volume: string;
    edition: string;
    ISBN: string;
    chapters: number;
    published_date: Date;
}