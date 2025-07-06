import { apiGet, apiPost, apiPut, apiPatch, apiDelete } from './client';

export async function createAwsPartner(data: CreateAwsPartnerData): Promise<ApiResponse<AwsPartner>> {
  return apiPost<ApiResponse<AwsPartner>>('/api/aws-partners', data);
}

export async function getAllAwsPartners(): Promise<ApiResponse<AwsPartner[]>> {
  return apiGet<ApiResponse<AwsPartner[]>>('/api/aws-partners');
}

export async function getAwsPartnerById(id: string): Promise<ApiResponse<AwsPartner>> {
  return apiGet<ApiResponse<AwsPartner>>(`/api/aws-partners/${id}`);
}

export async function updateAwsPartner(id: string, data: UpdateAwsPartnerData): Promise<ApiResponse<AwsPartner>> {
  return apiPut<ApiResponse<AwsPartner>>(`/api/aws-partners/${id}`, data);
}

export async function deleteAwsPartner(id: string): Promise<ApiResponse<{ message: string }>> {
  return apiDelete<ApiResponse<{ message: string }>>(`/api/aws-partners/${id}`);
}

export async function toggleAwsPartnerPublished(id: string): Promise<ApiResponse<AwsPartner>> {
  return apiPatch<ApiResponse<AwsPartner>>(`/api/aws-partners/${id}/toggle-published`);
}

export async function getAwsPartnerCount(): Promise<ApiResponse<{ count: number }>> {
  return apiGet<ApiResponse<{ count: number }>>('/api/aws-partners/count');
} 