export interface Job{ 
    id: any;
    category: string | undefined;
    nic?: string;
    name?: string;
    address?: string;
    division ?: string;
    tel?: string;
    permitNumber ?: string;
    landNumber?: string;
    description?: string;
    updateHistory?: UpdateHistory[];

    documents?:object;
    reports: any;
    approvel: any;
    status?: string;
    completePresentage?:string;
}

export interface UpdateHistory { 
    id: any;
    type: 'Create' | 'Update';
    name : string;
    email:string;
    date: Date;
}

export interface HistoryDetails { 
    id: any;
    title: string;
    createdBy: string;
    date : Date;
}