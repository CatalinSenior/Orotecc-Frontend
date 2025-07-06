import { apiGet, apiPost, apiPut, apiPatch, apiDelete } from './client';

export async function createProfessional(data: CreateProfessionalData): Promise<ApiResponse<Professional>> {
  return apiPost<ApiResponse<Professional>>('/api/professionals', data);
}

export async function getAllProfessionals(): Promise<ApiResponse<Professional[]>> {
  return apiGet<ApiResponse<Professional[]>>('/api/professionals');
}

export async function getProfessionalById(id: string): Promise<ApiResponse<Professional>> {
  return apiGet<ApiResponse<Professional>>(`/api/professionals/${id}`);
}

export async function updateProfessional(id: string, data: UpdateProfessionalData): Promise<ApiResponse<Professional>> {
  return apiPut<ApiResponse<Professional>>(`/api/professionals/${id}`, data);
}

export async function deleteProfessional(id: string): Promise<ApiResponse<{ message: string }>> {
  return apiDelete<ApiResponse<{ message: string }>>(`/api/professionals/${id}`);
}

export async function toggleProfessionalPublished(id: string): Promise<ApiResponse<Professional>> {
  return apiPatch<ApiResponse<Professional>>(`/api/professionals/${id}/toggle-published`);
}

export async function getProfessionalCount(): Promise<ApiResponse<{ count: number }>> {
  return apiGet<ApiResponse<{ count: number }>>('/api/professionals/count');
} 