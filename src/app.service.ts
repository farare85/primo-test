import { Injectable } from '@nestjs/common';
import { CreateUserDetail } from './app.model';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserDetail): Promise<User> {
    const { firstName, lastName, emailAddress } = user;

    const newUser = await this.userRepository.create({
      firstName,
      lastName,
      emailAddress,
    });
    const savedUser = await this.userRepository.save(newUser);
    return savedUser;
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getSingleUser(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: id } });
    return user;
  }
}
