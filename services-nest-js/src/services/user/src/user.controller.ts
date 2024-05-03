import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';

@Controller('/api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(@Query('limit') limit: number = 10, @Query('page') page: number = 1): Promise<User[]> {
    return await this.userService.findAll(limit, page);
  }

  @Get('/email/:email')
  async findByEmail(@Param('email') email: string): Promise<User> {
    return await this.userService.findByEmail(email);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.userService.create(user);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() user: User): Promise<User> {
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User> {
    return await this.userService.delete(id);
  }
}
