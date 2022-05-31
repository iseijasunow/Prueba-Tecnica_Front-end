import { IUser } from "./userInterface";

export interface IResjsonInterface{
    total_count:number,
    incomplete_results:boolean,
    items:Array<IUser>,

}