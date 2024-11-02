import { Injectable } from "@angular/core";

export interface Guest {
  uuid: string;
  guestName: string;
  guestNumber: number;
}

@Injectable({ providedIn: "root" })
export class GuestService {
  constructor() {}

  private guests: Guest[] = [
    {
      uuid: "d1f1f1a3-6bfb-4a88-8df7-3e4e3d3a0b1e",
      guestName: "Cristian Nimatuj",
      guestNumber: 2,
    },
    {
      uuid: "4f5b3d8a-2d9f-49e2-9a1a-134ad76d15e4",
      guestName: "Hugo Escalante",
      guestNumber: 2,
    },
    {
      uuid: "d8f3e75a-9163-4f92-81e3-5d3825d28ec5",
      guestName: "Rolando Garcia",
      guestNumber: 1,
    },
    {
      uuid: "7e3f8c2d-6f10-4b5b-a8d8-2e8e5f3d9e2f",
      guestName: "Mario Juarez",
      guestNumber: 1,
    },
    {
      uuid: "f2a5d7c6-7bfb-41de-a9d8-1c4f6a8b3f6e",
      guestName: "Walter Pisquiy",
      guestNumber: 1,
    },
    {
      uuid: "8e3f5b4d-6f1b-4d5b-b8d8-4e5d3e9f8a3f",
      guestName: "Estuardo Vasquez",
      guestNumber: 2,
    },
    {
      uuid: "9d3b6a2f-8d1e-4e4b-b8e9-5d3a7e1f6b8e",
      guestName: "Marcela Cano",
      guestNumber: 2,
    },
    {
      uuid: "b7e5d9a2-3f4e-4a5b-a7d9-3e8f1a4b7c5e",
      guestName: "Irene Hurtado",
      guestNumber: 2,
    },
    {
      uuid: "e2d3f5b4-6a9f-4b8a-a8d8-2f5d3b6e1a8c",
      guestName: "Josafat Sosa",
      guestNumber: 2,
    },
    {
      uuid: "c1f2b7a3-9e4d-4f6b-9d8e-3a5d6f8b2d4e",
      guestName: "Amigas mama",
      guestNumber: 7,
    },
    {
      uuid: "d9f7e3a1-4d6f-4e2b-a8b9-5f2d3c1b9d3e",
      guestName: "Jorge Jo",
      guestNumber: 2,
    },
    {
      uuid: "a6b9f3d7-3e1f-4d5b-8d9e-2a5b6e9c7a1f",
      guestName: "Cristhofer Rueda",
      guestNumber: 1,
    },
    {
      uuid: "b3f8c7a9-4f1e-4a8b-9d8f-6e1d3b7a5c4f",
      guestName: "Otto Anaya",
      guestNumber: 2,
    },
    {
      uuid: "e8d2f3b4-5a9f-4c7e-a8b1-7f3e1a6d4c9f",
      guestName: "Familia",
      guestNumber: 11,
    },
    {
      uuid: "c2f5a9d1-6b7e-4e8f-9a3b-1f6d8e3c5b9f",
      guestName: "Hugo Pastor",
      guestNumber: 1,
    },
    {
      uuid: "f7e1c9a6-3b5e-4a9d-8d9f-2f4d6e1a7b3f",
      guestName: "Leandra Sosa",
      guestNumber: 2,
    },
    //
    {
      uuid: "f1b3e5d7-3b7e-4c8f-8d3e-2a4f6e9d7a2c",
      guestName: "Sr. Raul Macario y Sra.",
      guestNumber: 1,
    },
    {
      uuid: "e2c9f3a7-5b4e-4d9a-8f7e-3a5d1c9f8b3d",
      guestName: "Sr. Eduardo Macario Sra. é hijas",
      guestNumber: 5,
    },
    {
      uuid: "d3e1f7a9-4c2f-4b8e-9d1e-7a5b6e3f4c5a",
      guestName: "Sra. Claudia Macario é hija",
      guestNumber: 3,
    },
    {
      uuid: "b9f7d2e6-6f3b-4a9e-8d1f-5a3e1c9b7a4f",
      guestName: "Helen Pisquy y Sr.",
      guestNumber: 2,
    },
    {
      uuid: "c2a5f9d7-3f1e-4b8d-8a7e-4d6e1b3a5c9f",
      guestName: "Sr. Orlando Lopez y Sra.",
      guestNumber: 1,
    },
    {
      uuid: "d8f2b1a3-4e6f-4a9d-8d1e-2f5c3e9b6a7e",
      guestName: "Pablo Menchú y Sra.",
      guestNumber: 2,
    },
    {
      uuid: "e9a2c3b7-5f4e-4d8a-9d7e-1f6d8e3c2b4f",
      guestName: "Sr. Victor Arango y Sra.",
      guestNumber: 2,
    },
    {
      uuid: "f1d3e8b4-7a5c-4b9d-8f1e-3a6d2b4c5f7e",
      guestName: "Fredy Alvarez",
      guestNumber: 2,
    },
    {
      uuid: "a6e3d5b1-4f8c-4a9e-9f7e-2d5b1c3e8a9f",
      guestName: "Srita Andrea Gonzalez",
      guestNumber: 1,
    },
    {
      uuid: "b2f5e9d1-6b3e-4d8f-9a1c-7d5f3e2a9b4c",
      guestName: "Joven Walter Hidaldo",
      guestNumber: 1,
    },
    {
      uuid: "e4b9d3a7-2f5c-4a9e-8d7f-1f3e6b2c9a4f",
      guestName: "Yony Alvarez",
      guestNumber: 2,
    },
    {
      uuid: "f6d2b5e1-4a3e-4c8f-8d9a-7e1b9f3c2d5f",
      guestName: "Luis -Verito Macario",
      guestNumber: 2,
    },
    {
      uuid: "a7c8d3e1-5b4e-4a9d-8f2e-3b6d5c2f7e9a",
      guestName: "Rocio Lemuz",
      guestNumber: 2,
    },
    {
      uuid: "b8d9e3a2-4c1e-4b8f-9a7d-6e2f5c1d8b3f",
      guestName: "Sofia Gática",
      guestNumber: 1,
    },
    {
      uuid: "c9e1d2f7-3a5c-4d9e-8b1f-2f3b4e6a7c9d",
      guestName: "Karin Bethancourt",
      guestNumber: 1,
    },
    {
      uuid: "d1f3e4b9-7a8c-4b1d-9f2e-6c5d3e2a4f9b",
      guestName: "Sofia Arreola",
      guestNumber: 1,
    },
    {
      uuid: "e2f4c1b3-6d9a-4a8e-9f1e-3c7d5b6e2a4c",
      guestName: "Roxana Cocinero",
      guestNumber: 2,
    },
    {
      uuid: "f3b5e6d2-4c1f-4a9d-8b7e-2d5c3f9a6b4e",
      guestName: "Jennifer Figueroa",
      guestNumber: 1,
    },
    {
      uuid: "a4c9d2e3-5b8a-4d1e-8f9c-7b3e2f6d1a9f",
      guestName: "Mario Reyes",
      guestNumber: 1,
    },
    {
      uuid: "b5e8d3a7-2f9c-4a1d-8e7b-3d6f2a9e5c1b",
      guestName: "Elian Barrios",
      guestNumber: 1,
    },
  ];

  public findGuestByUuid(uuid: string|null): Guest {
    const defaultGuest: Guest = {
      uuid: "",
      guestName: "Para ti",
      guestNumber: 1,
    };
    
    if(!uuid) return defaultGuest;

    return this.guests.find((guest) => guest.uuid === uuid) || defaultGuest;
  }
}
