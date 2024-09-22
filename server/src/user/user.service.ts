import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { IRequestWithUser } from '../interfaces/Request.interface';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto, req: IRequestWithUser) {
    const dataToSave = { ...createUserDto };
    dataToSave.password = bcrypt.hashSync(createUserDto.password, 10);
    dataToSave.created_by = req.user.id;

    return this.prisma.user.create({
      data: dataToSave,
      include: {
        /*user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            created_at: true,
            updated_at: true,
            university_id: true,
            enterprise_id: true,
          },
        },*/
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        /*user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            created_at: true,
            updated_at: true,
            university_id: true,
            enterprise_id: true,
          },
        },*/
        university: true,
        enterprise: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        university_id: true,
        enterprise_id: true,
        created_at: true,
        updated_at: true,
        university: true,
        enterprise: true,
        /*user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            created_at: true,
            updated_at: true,
            university_id: true,
            enterprise_id: true,
          },
        },*/
      },
    });
  }

  findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: { email },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        university_id: true,
        enterprise_id: true,
        created_at: true,
        updated_at: true,
        university: true,
        enterprise: true,
       /* user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            created_at: true,
            updated_at: true,
            university_id: true,
            enterprise_id: true,
          },
        },*/
      },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
