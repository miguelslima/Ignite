// export interface Specification {
//   id: string;
//   type: string;
//   name: string;
// }

// export interface Photo {
//   id: string;
//   photo: string;
//   photo_url: string;
// }

export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: {
    period: string;
    price: number;
  };
  fuel_type: string;
  thumbnail: string;
  accessories: {
    type: string;
    name: string;
  };
  photos: string[];
}

// specifications: Specification[];
// photo: Photo;
