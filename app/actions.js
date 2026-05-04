"use server";
import { revalidatePath } from "next/cache";
import { createClient } from '@/utils/supabase/server';

export async function update_blueHeading(formData) {
  const supabase = await createClient();
  const blueheading = formData.get("blueheading");

  const { error } = await supabase
    .from("SiteSettings")
    .update({ blueheading: blueheading })
    .eq("id", 1);

  if (error) {
    console.error("Supabase Error:", error);
    return { success: false };
  }

  revalidatePath("/");
  return { success: true };
}
// export async function update_blueHeading(formData) {
//   const supabase = await createClient();
//   const blueheading = formData.get("blueheading");

//   // Adding .select() lets you see if any data actually changed
//   const { data, error } = await supabase
//     .from("SiteSettings")
//     .update({ blueheading: blueheading })
//     .eq("id", 1)
//     .select();

//   if (error) {
//     console.error("Supabase Error:", error.message);
//     return { success: false, error: error.message };
//   }

//   if (data && data.length === 0) {
//     console.warn("No rows were updated. Check if ID=1 exists and RLS allows updates.");
//     return { success: false, message: "No rows updated" };
//   }

//   console.log("Success! Updated data:", data);
//   revalidatePath("/");
//   return { success: true };
// }

export async function update_title(formData) {
  const supabase = await createClient();
  const title = formData.get("title");

  const { error } = await supabase
    .from("SiteSettings")
    .update({ heroTitle: title })
    .eq("id", 1);

  if (error) {
    console.error("Supabase Error:", error);
    return { success: false };
  }

  revalidatePath("/");
  return { success: true };
}

export async function update_subtitle(formData) {
  const supabase = await createClient();
  const subtitle = formData.get("subtitle");

  const { error } = await supabase
    .from("SiteSettings")
    .update({ heroSubtitle: subtitle })
    .eq("id", 1);

  if (error) {
    console.error("Supabase Error:", error);
    return { success: false };
  }

  revalidatePath("/");
  return { success: true };
}

export async function update_heroImage(formData) {
  const supabase = await createClient();
  const imageFile = formData.get("imageFile");

  if (imageFile && imageFile.size > 0 && imageFile.name !== "undefined") {
    try {
      // 1. Create a unique file name
      const fileName = `${Date.now()}_${imageFile.name.replace(/\s/g, "_")}`;

      // 2. Upload the file to a Supabase bucket (e.g., named 'hero-images')
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('hero-images') // Ensure you created this bucket in Supabase Dashboard
        .upload(fileName, imageFile);

      if (uploadError) throw uploadError;

      // 3. Get the Public URL for the uploaded image
      const { data: { publicUrl } } = supabase.storage
        .from('hero-images')
        .getPublicUrl(fileName);

      // 4. Update the database table with the Public URL
      const { error: dbError } = await supabase
        .from('SiteSettings')
        .update({ heroImageURL: publicUrl })
        .eq('id', 1);

      if (dbError) throw dbError;

      revalidatePath("/");
      return { success: true };
    } catch (err) {
      console.error("Supabase Storage/DB Error:", err);
      return { success: false };
    }
  }
  return { success: false, message: "No file provided" };
}

export async function update_pricestarter(formData) {
  const supabase = await createClient();
  const priceStarter = formData.get("priceStarter");

  const { error } = await supabase
    .from("SiteSettings")
    .update({ priceStarter: priceStarter })
    .eq("id", 1);

  if (error) {
    console.error("Supabase Error:", error);
    return { success: false };
  }

  revalidatePath("/");
  return { success: true };
}

export async function update_pricepro(formData) {
  const supabase = await createClient();
  const pricePro = formData.get("pricePro");

  const { error } = await supabase
    .from("SiteSettings")
    .update({ pricepro: pricePro })
    .eq("id", 1);

  if (error) {
    console.error("Supabase Error:", error);
    return { success: false };
  }

  revalidatePath("/");
  return { success: true };
}

export async function update_priceenterprise(formData) {
  const supabase = await createClient();
  const priceEnterprise = formData.get("priceEnterprise");

  const { error } = await supabase
    .from("SiteSettings")
    .update({ priceenterprise: priceEnterprise })
    .eq("id", 1);

  if (error) {
    console.error("Supabase Error:", error);
    return { success: false };
  }

  revalidatePath("/");
  return { success: true };
}
