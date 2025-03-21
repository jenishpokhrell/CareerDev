export class JobModelList{
    id: number;
    jobTitle: string;
    jobType: string;
    jobLevel: string;
    noOfOpenings: number;
    postedBy: string;

    constructor(){
        this.id = 0;
        this.jobTitle = "";
        this.jobType = ""
        this.jobLevel = ""
        this.noOfOpenings = 0
        this.postedBy = ""
    }
}