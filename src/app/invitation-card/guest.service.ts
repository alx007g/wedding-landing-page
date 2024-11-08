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
        uuid: "d7f7f7a9-3bfb-4a88-1df2-7e4e3d3a0b1e",
        guestName: "Danilo Soc & Sra.",
        guestNumber: 2,
      },
      {
        uuid: "d3f2f1a1-1bfz-1a11-8df7-3e4e3d3a0b1e",
        guestName: "Edwin Sac",
        guestNumber: 1,
      },{
        uuid: "d7f7f7a3-6bfb-4a88-8df7-3e4e3d3a0b1e",
        guestName: "Lesster Escalante",
        guestNumber: 1,
      },
      {
        uuid: "d3f2f1a3-6bfz-4a88-8df7-3e4e3d3a0b1e",
        guestName: "Mario Lopez, Sra e Hijo",
        guestNumber: 3,
      },
      {
        uuid: "d1f2f1a3-6bfz-4a77-8df7-3e4e3d3a0b1e",
        guestName: "Clarita Mendèz",
        guestNumber: 1,
      },
    {
        uuid: "d2f3f4a5-1bfb-7a77-8df7-3e4e3d3a0b1e",
        guestName: "Hector Hernandez y Sra.",
        guestNumber: 1,
      },
      {
        uuid: "d2f2f2a3-6bfb-4a88-8df7-3e4e3d3a0b1e",
        guestName: "Kevin Itzep",
        guestNumber: 1,
      },
      {
        uuid: "d3f3f3a3-6bfb-4a88-8df7-3e4e3d3a0b1e",
        guestName: "Kevin Rivas",
        guestNumber: 1,
      },
    {
      uuid: "d1f1f1a3-6bfb-4a88-8df7-3e4e3d3a0b1e",
      guestName: "Cristian Nimatuj & Olga Nimatuj",
      guestNumber: 2,
    },
    {
      uuid: "4f5b3d8a-2d9f-49e2-9a1a-134ad76d15e4",
      guestName: "Hugo Escalante y Sra.",
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
      guestName: "Estuardo Vasquez y Sra.",
      guestNumber: 2,
    },
    {
      uuid: "9d3b6a2f-8d1e-4e4b-b8e9-5d3a7e1f6b8e",
      guestName: "Kerin Medina y Sra.",
      guestNumber: 2,
    },
    {
      uuid: "b7e5d9a2-3f4e-4a5b-a7d9-3e8f1a4b7c5e",
      guestName: "Irene Hurtado",
      guestNumber: 2,
    },
    {
      uuid: "e2d3f5b4-6a9f-4b8a-a8d8-2f5d3b6e1a8c",
      guestName: "Josafat Sosa y Sra.",
      guestNumber: 2,
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
      uuid: "c2f5a9d1-6b7e-4e8f-9a3b-1f6d8e3c5b9f",
      guestName: "Hugo Pastor",
      guestNumber: 1,
    },
    {
      uuid: "f7e1c9a6-3b5e-4a9d-8d9f-2f4d6e1a7b3f",
      guestName: "Cristian Soberanis y Sra.",
      guestNumber: 2,
    },
    
    {
        uuid: "03471684-271e-441e-b36e-5a3844cbe365",
        guestName: "Sr. Raul Macario y Sra.",
        guestNumber: 2
    },
    {
        uuid: "c99f61e0-bf04-459c-93b5-0f42fc8cb1f0",
        guestName: "Sr. Eduardo Macario Sra. e hijas",
        guestNumber: 0
    },
    {
        uuid: "ba8201c5-c08c-4591-98d6-1f3463497c1e",
        guestName: "Sra. Claudia Macario e hija",
        guestNumber: 0
    },
    {
        uuid: "d2b48ba7-87af-4b1a-9c1f-35d757bc762e",
        guestName: "Sr. Carlos Sarat y Sra.",
        guestNumber: 2
    },
    {
        uuid: "933b4d1a-7157-4e9b-80cd-6e5a4c14bfe6",
        guestName: "Sr. Orlando Lopez y Sra.",
        guestNumber: 2
    },
    {
        uuid: "fa0ae9d8-8c00-4a38-8c25-0b03e28240ac",
        guestName: "Sr. Pablo Menchú y Sra.",
        guestNumber: 2
    },
    {
        uuid: "f5d287f8-6109-4daa-b7ba-884fcd2afe31",
        guestName: "Sr. Victor Arango y Sra.",
        guestNumber: 2
    },
    {
        uuid: "b0fdd4a9-c8a9-4dc2-8ee3-73299bea5edb",
        guestName: "Sr. Fredy Alvarez Sra. e hijos",
        guestNumber: 0
    },
    {
        uuid: "c1ed058f-902d-4f4a-8948-cf7429e0c73f",
        guestName: "Sr. Miguel Gomez y Sra.",
        guestNumber: 2
    },
    {
        uuid: "d11b7e72-073b-4e8a-8c35-566cdadedea8",
        guestName: "Joven Walter Hidaldo",
        guestNumber: 1
    },
    {
        uuid: "5046ce3e-bea6-464c-8222-4fa288322448",
        guestName: "Sr. Yony Alvarez y Sra.",
        guestNumber: 2
    },
    {
        uuid: "26cce306-253a-4b22-8705-5dcd6a0e095c",
        guestName: "Sr. Luis Alvarez y Sra.",
        guestNumber: 2
    },
    {
        uuid: "98cf8850-84c5-4633-92d9-1a555e5a2464",
        guestName: "Sr. Andy Molina Sra. e hijo",
        guestNumber: 0
    },
    {
        uuid: "6191d4c2-8936-49eb-bac0-2bd4dd0dfa19",
        guestName: "Srta. Sofia Gática",
        guestNumber: 1
    },
    {
        uuid: "4540393c-07cc-4698-a802-b89885b5e591",
        guestName: "Srta. Karin Bethancourt",
        guestNumber: 1
    },
    {
        uuid: "560b0808-16a5-47e4-8011-beb586ed0534",
        guestName: "Srta. Sofia Arreola",
        guestNumber: 1
    },
    {
        uuid: "d0237f57-42d4-4ac8-aacf-87c4fbfff391",
        guestName: "Sr. Angel González Sra. e hijo",
        guestNumber: 0
    },
    {
        uuid: "1511feb1-8bd7-4fad-979e-5f370f78b73e",
        guestName: "Srta. Jennifer Figueroa",
        guestNumber: 1
    },
    {
        uuid: "7efd2b16-6e75-4930-bdb7-c05e2191c1fb",
        guestName: "Mario Reyes",
        guestNumber: 1
    },
    {
        uuid: "5becec9f-3fa4-4848-bcd6-e6cfd8b783ba",
        guestName: "Elian Barrios",
        guestNumber: 1
    }
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
