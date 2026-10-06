export const CLOUDINARY_CLOUD_NAME = "f0damslf";
export const CLOUDINARY_UPLOAD_PRESET = "oro_rooms";

export async function uploadToCloudinary(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    const message = errorData?.error?.message || `Cloudinary upload failed with status ${res.status}`;
    throw new Error(message);
  }

  const data = await res.json();
  return data.secure_url;
}
