import { apiGet } from './client';

export interface HealthResponse {
  status: string;
  timestamp: string;
}

export async function checkHealth(): Promise<HealthResponse> {
  return apiGet<HealthResponse>('/health');
} 