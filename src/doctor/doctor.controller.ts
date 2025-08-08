import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';

@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get()
  findAll() {
    return this.doctorService.findAll();
  }
  @Get()
  findWithSpecialization(@Param('spec') specialization: String) {
    return this.doctorService.findWithSpecialization(specialization);
    }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorService.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreateDoctorDto) {
    return this.doctorService.create(dto);
  }

  @Get(':id/slots')
  getAvailableSlots(@Param('id') id: string) {
    return this.doctorService.getAvailableSlots(+id);
  }
}