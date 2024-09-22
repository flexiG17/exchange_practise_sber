import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {CreateRequestDto} from "./dto/create-request.dto";
import {UpdateUniversityRequestDto} from "./dto/update-request.dto";

@Injectable()
export class RequestService {
    constructor(
        private prisma: PrismaService,
    ) {
    }

    create(createRequestDto: CreateRequestDto) {
        return this.prisma.request.create({
            data: createRequestDto as any
        })
    }

    findAll() {
        return `This action returns all universityRequest`;
    }

    findOne(id: number) {
        return `This action returns a #${id} universityRequest`;
    }

    update(id: number, updateUniversityRequestDto: UpdateUniversityRequestDto) {
        return `This action updates a #${id} universityRequest`;
    }

    remove(id: number) {
        return `This action removes a #${id} universityRequest`;
    }
}
