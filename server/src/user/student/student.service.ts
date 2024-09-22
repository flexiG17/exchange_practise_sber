import {Injectable} from '@nestjs/common';
import {CreateStudentDto} from './dto/create-student.dto';
import {UpdateStudentDto} from './dto/update-student.dto';
import {PrismaService} from "../../prisma.service";
import * as bcrypt from 'bcrypt';
import {user_role} from "@prisma/client";


@Injectable()
export class StudentService {
    constructor(private prisma: PrismaService) {
    }

    create = (createStudentDto: CreateStudentDto) => this.prisma.student.create({
        data: {
            description: createStudentDto.description,
            university_id: createStudentDto.university_id,
            program_id: createStudentDto.program_id,
            course: createStudentDto.course,
            academic_group: createStudentDto.academic_group,
        }
    })
        /*.then(student => {
            return this.prisma.user.create({
                data: {
                    student_id: student.id,
                    name: createStudentDto.name,
                    email: createStudentDto.email,
                    password: bcrypt.hashSync(createStudentDto.password, 10),
                    phone_number: createStudentDto.phone_number,
                    gender: createStudentDto.gender,
                    role: user_role.student
                },
                include: {
                    student: true
                }
            })
        });*/

    findAll() {
        return `This action returns all student`;
    }

    findOne(id: number) {
        return `This action returns a #${id} student`;
    }

    update(id: number, updateStudentDto: UpdateStudentDto) {
        return `This action updates a #${id} student`;
    }

    remove(id: number) {
        return `This action removes a #${id} student`;
    }
}
