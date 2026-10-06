export declare const propertyRepository: {
    create: (data: any) => Promise<{
        id: string;
        typeOfRent: string;
        type: string;
        ownerId: string;
        title: string;
        location: string;
        phoneNumber: string | null;
        description: string;
        images: string[];
        price: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAll: () => Promise<{
        id: string;
        typeOfRent: string;
        type: string;
        ownerId: string;
        title: string;
        location: string;
        phoneNumber: string | null;
        description: string;
        images: string[];
        price: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getRoom: (id: string) => Promise<{
        id: string;
        typeOfRent: string;
        type: string;
        ownerId: string;
        title: string;
        location: string;
        phoneNumber: string | null;
        description: string;
        images: string[];
        price: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    getAllOfUser: (ownerId: string) => Promise<{
        id: string;
        typeOfRent: string;
        type: string;
        ownerId: string;
        title: string;
        location: string;
        phoneNumber: string | null;
        description: string;
        images: string[];
        price: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getThird: () => Promise<{
        id: string;
        typeOfRent: string;
        type: string;
        ownerId: string;
        title: string;
        location: string;
        phoneNumber: string | null;
        description: string;
        images: string[];
        price: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
};
export default propertyRepository;
//# sourceMappingURL=property.repository.d.ts.map