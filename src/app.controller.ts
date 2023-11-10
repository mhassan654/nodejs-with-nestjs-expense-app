import { Controller,Delete,Get, Post, Put } from "@nestjs/common";

@Controller('reports/:type')
export class AppController{
@Get()
  getAllReports(){
    return [];
  }

  @Get(':id')
  getSingleReport(){
    return {};
  }

  @Post()
  storeReport(){
    return 'Creating....';
  }

  @Put(':id')
  updateReport(){
    return 'updating....';
  }

  @Delete(':id')
  deleteReport(){
    return 'deleting....';
  }

}