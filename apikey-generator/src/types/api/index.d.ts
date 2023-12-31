import { ApiKey } from "@prisma/client";
import { ZodIssue } from "zod";

export interface CreateApiData {
  error: string | ZodIssue[] | null,
  createdApiKey: ApiKey | null 
}

export interface RevokeApiData {
  error: string | zodIssue[] | null,
  success: boolean,
}