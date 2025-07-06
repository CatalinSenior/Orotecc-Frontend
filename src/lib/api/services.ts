import { apiGet, apiPost, apiPut, apiPatch, apiDelete } from './client';

export async function createService(data: CreateServiceData): Promise<ApiResponse<Service>> {
  return apiPost<ApiResponse<Service>>('/api/services', data);
}

export async function getAllServices(): Promise<ApiResponse<Service[]>> {
  return apiGet<ApiResponse<Service[]>>('/api/services');
}

export async function getServiceById(id: string): Promise<ApiResponse<Service>> {
  return apiGet<ApiResponse<Service>>(`/api/services/${id}`);
}

export async function updateService(id: string, data: UpdateServiceData): Promise<ApiResponse<Service>> {
  return apiPut<ApiResponse<Service>>(`/api/services/${id}`, data);
}

export async function deleteService(id: string): Promise<ApiResponse<{ message: string }>> {
  return apiDelete<ApiResponse<{ message: string }>>(`/api/services/${id}`);
}

export async function toggleServicePublished(id: string): Promise<ApiResponse<Service>> {
  return apiPatch<ApiResponse<Service>>(`/api/services/${id}/toggle-published`);
}

export async function getServiceCount(): Promise<ApiResponse<{ count: number }>> {
  return apiGet<ApiResponse<{ count: number }>>('/api/services/count');
} 