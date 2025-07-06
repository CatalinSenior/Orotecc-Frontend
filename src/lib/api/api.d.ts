interface CreateAwsPartnerData {
  alt: string;
  description?: string;
  image: string;
  published?: boolean;
}

interface UpdateAwsPartnerData {
  alt?: string;
  description?: string;
  image?: string;
  published?: boolean;
}

interface CreateProfessionalData {
  image: string;
  name: string;
  position: string;
  description?: string;
  published?: boolean;
}

interface UpdateProfessionalData {
  image?: string;
  name?: string;
  position?: string;
  description?: string;
  published?: boolean;
}

interface CreateServiceData {
  icon: string;
  title: string;
  subtitle: string;
  published?: boolean;
}

interface UpdateServiceData {
  icon?: string;
  title?: string;
  subtitle?: string;
  published?: boolean;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  count?: number;
}

interface Professional {
  id: string;
  image: string;
  name: string;
  position: string;
  description?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

interface AwsPartner {
  id: string;
  alt: string;
  description?: string;
  image: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Service {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
} 