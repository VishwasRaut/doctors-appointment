// src/appointment/appointment.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { Appointment } from './entities/appointment.entity';

@Injectable()
export class AppointmentService {
  private appointments: Appointment[] = [];
  private nextId = 1;

  create(dto: CreateAppointmentDto) {
    // Check if this slot is already taken
    const conflict = this.appointments.find(
      (a) =>
        a.doctorId === dto.doctorId &&
        a.date === dto.date &&
        a.time === dto.time
    );

    if (conflict) {
      throw new BadRequestException(
        `Doctor already has an appointment on ${dto.date} at ${dto.time}`
      );
    }

    const appointment: Appointment = {
      id: this.nextId++,
      ...dto,
    };
    this.appointments.push(appointment);
    return appointment;
  }

  findAll() {
    return this.appointments;
  }
}
