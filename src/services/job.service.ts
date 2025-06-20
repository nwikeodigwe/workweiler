import type { JobFormInputs } from "../types/job";

export class JobService {
  static async createJob(data: JobFormInputs): Promise<void> {
    try {
      // Add your API call logic here
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create job");
      }
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Unknown error occurred"
      );
    }
  }
}
