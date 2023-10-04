import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose';
import { createVideoDto } from './videos.dto'
import { Video, VideoSchema } from './videos.schema';




@Injectable()
export class VideosService{

    constructor(@InjectModel(Video.name) private videoModel: Model<Video>){}

    async getVideosByType(type:string){
        // console.log(type);
        
        const videos = await this.videoModel.find({type});

        if(!videos){
            return {
                success:false,
                msg:`Videos are not available of this ${type} catogery`,
                videos
            }
        }

        return {
            success:true,
            msg:`All Videos of ${type} catogery are Founded`,
            videos
        }
    }

    async getVideos(){
        const videos = await this.videoModel.find({});
        return {
            success:true,
            msg:"All Videos are Founded",
            videos
        }
    }


    async addVideo(body:createVideoDto){
        const videoLink = body.url;
        const videoType=body.type;

        if(!videoLink || !videoType){
            return {
                success:false,
                msg:"Enter Video Complete Details"
            }
        }

        const video= new this.videoModel(body);
        await video.save();

        return {
            success:true,
            msg:"Video Added Successfully!",
            video,
        }

        
    }
}