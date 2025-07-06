import { apiGet } from './client';

export interface PresignedUrlResponse {
  url: string;
  fields?: Record<string, string>;
  key?: string;
}

export async function getPresignedUrl(extension: string): Promise<PresignedUrlResponse> {
  return apiGet<PresignedUrlResponse>(`/upload/presigned-url/${extension}`);
} 