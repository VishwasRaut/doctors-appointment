import { Module } from '@nestjs/common';
import { DoctorModule } from './doctor/doctor.module';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [DoctorModule, AppointmentModule],
})
export class AppModule {}
