 export interface BibJSON {
     label?: string;
     type?: string;
     properties?: {
         journal?: string,
         publisher?: string,
         address?: string,
         title?: string,
         url?: string,
         doi?: string,
         author?: string,
         pages?: string,
         month?: number,
         year?: number,
         volume?: string,
         issue?: string,
         abstract?: string,
     };
 }