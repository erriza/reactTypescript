export interface Diaire {   
    date: string,
    weather: string,
    visibility: string,
    comment: string
}

export type NewDiarie = Omit<Diaire, 'id'>

export type OnAddDiarie = (NewDiarie: Diaire) => void;