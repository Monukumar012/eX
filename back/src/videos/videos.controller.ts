import { Controller,Get,Post,Body, Param } from "@nestjs/common";
import { VideosService } from "./videos.service";
import { createVideoDto } from "./videos.dto";



@Controller('videos')
export class VideosController{

    constructor(private videoService: VideosService){}

    @Get()
    getVideos(){
        return this.videoService.getVideos();
    }

    @Get('/:type')
    getVideosByType(@Param('type') type:string){
        return this.videoService.getVideosByType(type);
    }

    @Post()
    addVideo(@Body() body:createVideoDto){
        return this.videoService.addVideo(body);
    }
}