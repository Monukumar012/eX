import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import {HydratedDocument} from 'mongoose';


export type VideoDocument = HydratedDocument<Video>;

@Schema()
export class Video{

    @Prop({required:true, type:String})
    title:string;


    @Prop({required:true, type:String})
    url:string;

    @Prop({required:true, type:String})
    type:string;
}

export const VideoSchema = SchemaFactory.createForClass(Video);