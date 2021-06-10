import { NumberValueAccessor } from '@angular/forms';
import { Publication } from './Publication';

export class Proceeding extends Publication {
    proceeding_id: number;
    conference_id: number;
    impact_factor: string;
}

export class ProceedingSelect {
    proceeding_id: number;
    proceeding_title: string;
}