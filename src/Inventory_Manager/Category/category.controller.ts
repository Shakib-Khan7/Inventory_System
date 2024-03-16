/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, ValidationPipe } from '@nestjs/common';
// import { ManagerDTO } from './managerDTO';
// import { ManagerService } from './manager.service';
import { UsePipes } from '@nestjs/common/decorators/core/use-pipes.decorator';
import { CategoryService } from './category.service';
import { CategoryDTO } from './categoryDTO';
import { ManagerDTO } from '../managerDTO';
import { ManagerService } from '../manager.service';
import { CategoryEntity } from '../Entities/category.entity';
// import { AdminService } from './admin.service';
// import { ManagerDTO } from './adminDTO';
//import { AppService } from './app.service';

@Controller('/Category')
export class CategoryController {
  constructor(private readonly appService: CategoryService) { }


  @Post('addCategory')
  @UsePipes(new ValidationPipe)
  async createNewCategory(@Body() categoryInfo : CategoryDTO): Promise<CategoryDTO> {

    

    return this.appService.createNewCategory(categoryInfo);
  }



  @Get('allCategory')
  async getAllCategories(): Promise<CategoryEntity[]> {
    return await this.appService.getAllCategories();
  }



  @Delete('category/:id')
  async deleteCategoryById(@Param('id') Category_id: number): Promise<string> {
    try {
      return await this.appService.deleteCategoryById(Category_id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }


  @Put(':id')
  @UsePipes(new ValidationPipe)
  async updateProductById(@Param('id') Category_id: number, @Body() updateProduct: CategoryDTO): Promise<CategoryDTO> {
    return this.appService.updateProductById(Category_id, updateProduct);
  }
    










  
//   @Get()
//   async getAllUsers(): Promise<CategoryDTO[]> {
//     return this.appService.getAllUsers();
//   }
//   @Get(':id')
//   async getUserById(@Param('id') id: number): Promise<ManagerDTO> {
//     return this.appService.getUserById(id);
//   }
//   @Put(':id')
//   @UsePipes(new ValidationPipe)
//   async updateUser(@Param('id') id: number, @Body() updatedUser: ManagerDTO): Promise<ManagerDTO> {
//     return this.appService.updateUser(id, updatedUser);
//   }



  // @Get('/user')
  // getHello(): string {
  //   return this.appService.getHelloB();
  // }
  // @Get('/users/:id')
  // getUserById(@Param('id') id: string): object {
  //   return this.appService.getUserById(id);
  // }
  // @Post('/adduser')
  // addUser(@Body() myobj: object): object {
  //   return this.appService.addUser(myobj);
  // }
}
