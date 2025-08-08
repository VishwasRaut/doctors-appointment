import { Injectable } from '@nestjs/common';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorService {
  private doctors: Doctor[] = [
    { id: 1, name: 'Dr. Smith', specialization: 'Cardiology' },
    { id: 2, name: 'Dr. Jane', specialization: 'Dermatology' },
  ];

  findAll(): Doctor[] {
    return this.doctors;
  }
  findWithSpecialization(specialization: String): Doctor[]{
    return this.doctors.map(doc=>doc.specialization)
  }

  findOne(id: number): Doctor | undefined {
    return this.doctors.find((doc) => doc.id === id);
  }

  create(doctor: Omit<Doctor, 'id'>): Doctor {
    const newDoctor = { id: Date.now(), ...doctor };
    this.doctors.push(newDoctor);
    return newDoctor;
  }

  getAvailableSlots(doctorId: number): string[] {
    return ['09:00', '11:00', '14:00', '16:00'];
  }
}