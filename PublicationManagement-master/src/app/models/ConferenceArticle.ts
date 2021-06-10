import { Publication } from './Publication';

export class ConferenceArticle extends Publication {
    pages: string;
    proceeding_id: number;
}