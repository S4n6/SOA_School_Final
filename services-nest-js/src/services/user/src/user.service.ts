import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';


@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  getHello(): string {
    return 'Hello World!';
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({
      email: email
    }).exec();
  }

  async findAll(limit: number, page: number): Promise<User[]> {
    return await this.userModel.find().limit(limit).skip((page - 1) * limit).exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  async searchByEmail(emailSearch: string): Promise<User[]> {
    const regex = new RegExp(emailSearch, 'i');
    return await this.userModel.find({ email: { $regex: regex } }).exec();
  }
  
}
